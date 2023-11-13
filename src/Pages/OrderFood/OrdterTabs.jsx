import Card from "../../Shared/Card";


const OrdterTabs = ({cardItems}) => {
    return (
        <div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
    {
      cardItems.map(items=><Card item={items} key={items._id}></Card>)

    }
    </div>
        </div>
    );
};

export default OrdterTabs;