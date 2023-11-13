const Card = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-10 top-5 bg-black text-white p-3 rounded-md">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title flex flex-col items-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 mt-8  hover:text-yellow-600 bg-base-200 block mx-auto border-yellow-600 text-yellow-600">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
