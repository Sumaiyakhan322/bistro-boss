import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import imgMenu from '../../assets/menu/banner3.jpg'
import useLoad from '../../Hooks/useLoad';
import Title from '../../Shared/Title';

import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import drinksImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'

const Menu = () => {
    const [menu]=useLoad()
    const desserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const pizza=menu.filter(item=>item.category==='pizza')
    const salad=menu.filter(item=>item.category==='salad')
    const drinks=menu.filter(item=>item.category==='drinks')
    const offered=menu.filter(item=>item.category==='offered')
    return (

        <div>
           <Helmet>
          <title>Bistro-Boss |Menu</title>
      </Helmet> 
      <Cover img={imgMenu} title={'OUR MENU'} des={'Would you like to try a dish?'}></Cover>
      {/* Offered items */}
      <Title subHeading={'---Don`t miss---'} heading={`TODAY'S OFFER`}></Title>
       <MenuCategory items={offered}></MenuCategory>
       {/* Desserts items */}
       <MenuCategory category={'dessert'} items={desserts} title={'DESSERTS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={dessertImg}></MenuCategory>
       <MenuCategory category={'pizza'} items={pizza} title={'PIZZA'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={pizzaImg}></MenuCategory>
       <MenuCategory category={'soup'} items={soup} title={'Soup'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={soupImg}></MenuCategory>
       <MenuCategory category={'drinks'} items={drinks} title={'Drinks'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={drinksImg}></MenuCategory>
       <MenuCategory category={'salad'} items={salad} title={'SALAD'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={saladImg}></MenuCategory>
        </div>

    );
};

export default Menu;