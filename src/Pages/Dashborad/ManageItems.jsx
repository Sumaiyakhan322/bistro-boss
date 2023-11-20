import { FaEdit, FaTrashAlt,  } from "react-icons/fa";
import useLoad from "../../Hooks/useLoad";
import Title from "../../Shared/Title";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu,,refetch]=useLoad()
    const axiosSecure=useAxiosSecure()
    let count=1;
    const handleDelete=(_id)=>{
        
        Swal.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/menu/${_id}`).then((res) => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  refetch();
                }
              });
            }
          });
        

    }
   
    return (
        <div>
           <Title heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up'}></Title>
           <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Number
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {menu?.map(item=><tr key={item._id}>
        <th>
          {count++}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {item.name}
          
        </td>
        <td className="text-right">${item.price}</td>
        <td>
         <Link to={`/dashboard/updateItem/${item._id}`}> <button className="btn btn-ghost btn-xs text-red-500 text-2xl"><FaEdit></FaEdit></button></Link>
        </td>
        <td>
          <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500 text-2xl"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)}
     
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
           </div>
        </div>
    );
};

export default ManageItems;