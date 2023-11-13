import Card from "../../Shared/Card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const OrdterTabs = ({cardItems}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    }
    return (
        <div>
              <div >
 
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
      cardItems.map(items=><Card item={items} key={items._id}></Card>)

    }
            </div>
     
        </SwiperSlide>
        
      </Swiper>
    </div>
        </div>
    );
};

export default OrdterTabs;