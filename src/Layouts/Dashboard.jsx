import { FaBook, FaCalendar, FaHome, FaJediOrder, FaList, FaShoppingCart, FaStreetView, FaUsers, FaUtensilSpoon, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [data]=useCart()
  const [isAdmin]=useAdmin()
  
  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <ul className="menu">
         {isAdmin ? <>
         {/* Admin exits */}
          <li>
            <NavLink to={"/dashboard/adminHome"}>
              
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/dashboard/addItems"}>
              {" "}
              <FaUtensilSpoon></FaUtensilSpoon>Add items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageItems"}>
              {" "}
              <FaList></FaList>Manage items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageBookings"}>
              {" "}
             <FaStreetView></FaStreetView>Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allUsers"}>
              {" "}
             <FaUsers></FaUsers>All users
            </NavLink>
          </li>
         </> :
        //  Admin does not exits
         <>

         <li>
            <NavLink to={"/dashboard/userHome"}>
              
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>
              {" "}
              <FaCalendar></FaCalendar>Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaShoppingCart></FaShoppingCart>My cart ({data?.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              {" "}
             <FaStreetView></FaStreetView>Add review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myBookings"}>
              {" "}
             <FaBook></FaBook>My Bookings
            </NavLink>
          </li></>}

          {/* common links */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              {" "}
             <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
             <FaJediOrder></FaJediOrder>Order
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
            <FaVoicemail></FaVoicemail>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashborad */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
