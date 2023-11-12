import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import imgMenu from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
           <Helmet>
          <title>Bistro-Boss |Menu</title>
      </Helmet> 
      <Cover img={imgMenu} title={'OUR MENU'} des={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default Menu;