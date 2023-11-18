import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  let count = 1;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (_id) => {
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
        axiosSecure.delete(`/users/${_id}`).then((res) => {
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
  };
const handleMakeAdmin=(_id)=>{
  axiosSecure.patch(`/users/admin/${_id}`)
  .then(res=>{
    
    if(res.data.modifiedCount>0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${_id} is an admin`,
        showConfirmButton: false,
        timer: 1500
      });
      refetch()
    }
  })
}
  return (
    <div>
      <h2 className="text-4xl text-center">Total Users:{users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <th>{count++}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user.role ==='admin'? 'Admin' :<button
                    className="btn btn-ghost btn-lg text-orange-400"
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    <FaUser></FaUser>
                  </button>}
                </th>
                <th>
                  <button
                    className="btn btn-ghost btn-lg text-orange-400"
                    onClick={() => handleDelete(user._id)}
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
