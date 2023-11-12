import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import MenuItemCard from "../../Shared/MenuItemCard";


const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const favMenu=data.filter(menu=>menu.category==='popular')
         setMenu(favMenu)
        })
    },[])
    return (
        <div className="mb-20">
           <Title subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></Title> 
           <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-3">
            {
                menu.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
            }
           </div>
        </div>
    );
};

export default PopularMenu;