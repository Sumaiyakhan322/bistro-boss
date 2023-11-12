import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import ChefSection from "./ChefSection";
import ContactUs from "./ContactUs";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
              <Helmet>
          <title>Bistro-Boss | Home</title>
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ChefSection></ChefSection>
           <PopularMenu></PopularMenu>
           <ContactUs></ContactUs>
           <Featured></Featured>
           <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;