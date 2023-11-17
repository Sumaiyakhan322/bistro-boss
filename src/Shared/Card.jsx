import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const Card = ({ item }) => {
  const [,refetch] = useCart();

  const { user } = useContext(AuthContext);
  const { image, name, recipe, price, _id } = item;

  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    if (user && user.email) {
      //send the items to mongodb
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        recipe,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} item has been added`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch to update the cart items
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "please login to add cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
          
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-10 top-5 bg-black text-white p-3 rounded-md">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title flex flex-col items-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-b-4 mt-8  hover:text-yellow-600 bg-base-200 block mx-auto border-yellow-600 text-yellow-600"
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
