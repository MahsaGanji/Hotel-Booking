/** @format */

import { assets, exclusiveOffers } from "../../assets/assets";
import Container from "../Container";
import Title from "../Title";
import CardOffers from "./components/card";

const ExclusiveViewOffers = () => {
  return (
    <Container>
      <div className='flex flex-col md:flex-row justify-between items-center w-full'>
        <Title
          align={"left"}
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <btton className=' group flex items-center gap-2  font-medium cursor-pointer max-md:mt-12'>
          View All Offers
          <img
            src={assets.arrowIcon}
            alt='arrow-icon'
            className='group-hover:translate-x-1 transition-all'
          />
        </btton>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-4'>
        {exclusiveOffers.map((item) => (
          <CardOffers key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};
export default ExclusiveViewOffers;
