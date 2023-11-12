import Title from "../../Shared/Title";

import img from '../../assets/home/featured.jpg'
import '../../../src/Styles/Featured.css'
const Featured = () => {
    return (
        <div className=" hero featured   my-20 bg-fixed bg-opacity-50">
           <div className="hero-overlay bg-opacity-60 h-full"></div>
            <div className="">   
            <Title  subHeading={'---Check it out---' } heading={'FROM OUR MENU'}></Title>
            <div className="md:flex justify-center items-center pb-20 pt-10 px-36 gap-10 text-white ">
                <div><img src={img} alt="" /></div>
                <div>
                    <p>March 20, 2023 </p>
                    <p>WHERE CAN I GET SOME?</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-8 text-white">Read more</button>
                </div>
            </div>
            </div> 
            
        </div>
    );
};

export default Featured;