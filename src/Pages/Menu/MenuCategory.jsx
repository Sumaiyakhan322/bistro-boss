import Cover from "../../Shared/Cover";
import MenuItemCard from "../../Shared/MenuItemCard";


const MenuCategory = ({items,title,coverImg,des}) => {
    return (
        <div>
      {title && <Cover img={coverImg} title={title} des={des}></Cover> }  
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-3 my-10">
        {
            items.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
        }
       </div>
       </div>
    );
};

export default MenuCategory;