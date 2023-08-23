import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex-1 flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-xl text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-xl text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
