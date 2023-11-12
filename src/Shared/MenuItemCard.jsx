

const MenuItemCard = ({item}) => {
    const {image,recipe,name,price}=item
    return (
        <div>
            <img className="w-[120px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div className="flex items-center space-x-4">
                <div><h2 className="uppercase">{name}---</h2>
                <p >{recipe}</p>
                </div>
                <p className="text-yellow-600">{price}</p>
            </div>
            
        </div>
    );
};

export default MenuItemCard;