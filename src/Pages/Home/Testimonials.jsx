import Title from "../../Shared/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
    const [reviews,setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="my-20">
            <Title subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></Title>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=>
      <SwiperSlide key={review._id}>
        <div className="my-24 flex items-center flex-col gap-6">
        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            <p>{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
      </SwiperSlide>
            )
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;