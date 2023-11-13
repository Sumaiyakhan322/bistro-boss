import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItemCard from "../../Shared/MenuItemCard";


const MenuCategory = ({items,title,coverImg,des,category}) => {
    return (
        <div>
      {title && <Cover img={coverImg} title={title} des={des}></Cover> }  
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-3 my-10">
        {
            items.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
        }
       </div>
       <Link to={`/order/${category}`}><button className="btn btn-outline border-0 border-b-4 mt-8 text-white block mx-auto my-10">Order now</button></Link>
       </div>
    );
};

export default MenuCategory;