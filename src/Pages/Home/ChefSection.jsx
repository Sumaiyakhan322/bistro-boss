import img from '../../assets/home/chef-service.jpg'

const ChefSection = () => {
    return (
        <div style={{backgroundImage:`url(${img})`}} className='py-20 text-black'>
            <div className="bg-white text-center w-1/2 mx-auto p-20 ">
                <h2>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            
        </div>
    );
};

export default ChefSection;