import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [data,refetch]=useCart()
    const price=data?.reduce((sum,item)=>sum+item.price,0)
    const totalPrice=parseFloat(price)
     let count=1

     const axiosSecure=useAxiosSecure()

   //delete the item
   const handleDelete=_id=>{
    Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        axiosSecure.delete(`/carts/${_id}`)
        .then(res=>{
            if(res.data.deletedCount>0){
                Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          })
          refetch()
            }
        })
        }
      });
   }
    return (
        <div>
           <div className="flex justify-evenly my-10">
           <h2 className=" text-4xl">Total Items:{data?.length}</h2>
           <h2 className="text-4xl ">Total price:{totalPrice} </h2>
        {data?.length ?<Link  to={'/dashboard/payment'}>  <button  className="btn btn-primary">Pay</button></Link> :<><button  className="btn btn-primary" disabled>Pay</button></>}
           </div>
           <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Item name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data?.map(item=> <tr key={item._id}>
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
        <td>{item.price}</td>
        <th>
          <button className="btn btn-ghost btn-lg text-orange-400"
          onClick={()=>handleDelete(item._id)}
          ><FaTrash></FaTrash></button>
        </th>
      </tr>
      )}
     
      
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Cart;