import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import coverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

import useLoad from '../../Hooks/useLoad';
import OrdterTabs from './OrdterTabs';
import { useParams } from 'react-router-dom';
const OrderFood = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams()
    const indexOfCategory=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(indexOfCategory)
    const [menu]=useLoad()
    
    const desserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const pizza=menu.filter(item=>item.category==='pizza')
    const salad=menu.filter(item=>item.category==='salad')
    const drinks=menu.filter(item=>item.category==='drinks')
    
    return (
        <div>
            <Helmet >
            <title>Bistro-Boss |Order</title>
            </Helmet>
            <Cover img={coverImg} des={'Would you like to try a dish?'} title={'OUR SHOP'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
    {
      salad.map(items=><Card item={items} key={items._id}></Card>)

    }
    </div> */}
    <OrdterTabs cardItems={salad}></OrdterTabs>
  </TabPanel>
  <TabPanel><OrdterTabs cardItems={pizza}></OrdterTabs></TabPanel>
  <TabPanel><OrdterTabs cardItems={soup}></OrdterTabs></TabPanel>
  <TabPanel><OrdterTabs cardItems={desserts}></OrdterTabs></TabPanel>
  <TabPanel><OrdterTabs cardItems={drinks}></OrdterTabs></TabPanel>
  
</Tabs>
        </div>
    );
};

export default OrderFood;