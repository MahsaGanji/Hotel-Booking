/** @format */

import { assets } from "../../assets/assets";
import Title from "../Title";

const ExclusiveOffers = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Title
          align={"left"}
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <btton className='flex itemes-center gap-4 '>
          View All Offers
          <img
            src={assets.arrowIcon}
            alt='arrow-icon'
            className='group-hover:tarnslate-x-1 transition-all'
          />
        </btton>
      </div>
    </div>
  );
};
export default ExclusiveOffers;
