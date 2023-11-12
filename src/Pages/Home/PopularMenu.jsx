
import Title from "../../Shared/Title";
import MenuItemCard from "../../Shared/MenuItemCard";
import useLoad from "../../Hooks/useLoad";


const PopularMenu = () => {
   
    const [menu]=useLoad()
    const popularMenu=menu.filter(menu=>menu.category==='popular')
    return (
        <div className="mb-20">
           <Title subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></Title> 
           <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-3">
            {
                popularMenu.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
            }
           </div>
           <button className="btn btn-outline mx-auto my-10 block">View the full menu</button>
        </div>
    );
};

export default PopularMenu;