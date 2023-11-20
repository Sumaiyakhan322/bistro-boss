import { useForm } from "react-hook-form";
import Title from "../../Shared/Title";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting = import.meta.env.VITE_IMGBB_API;
const image_hosing_Api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const imgFile = { image: data.image[0] };
    //upload the img to imgbb and get an url
    const res = await axiosPublic.post(image_hosing_Api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const MenuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // Now post the menu item to backend
      const menuRes = await axiosSecure.post("/menu", MenuItem);
      // console.log(menuRes.data);
      reset();
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added a new item",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // console.log(MenuItem);
    }
    // console.log(res.data.data.display_url);
  };
  return (
    <div>
      <Title heading={"ADD AN ITEM"} subHeading={'WHAT"S NEW'}></Title>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full  my-6">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex gap-4 my-10 w-full ">
          {/* Cetegory */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className="select select-bordered "
              defaultValue={"default"}
            >
              <option value={"default"} disabled>
                Choose a category
              </option>
              <option value="salad">Salad</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
            </select>
          </div>
          {/* Price */}
          <div className="w-1/2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>
        {/* Recipe */}
        <div className="form-control my-6">
          <label className="label">
            <span className="label-text">Recipe</span>
          </label>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-24"
            placeholder="recipe"
          ></textarea>
        </div>
        {/* File */}

        <div className="form-control my-6">
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <button className="btn">
          AddItems <FaUtensilSpoon></FaUtensilSpoon>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
