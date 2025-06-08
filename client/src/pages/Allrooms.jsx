/** @format */

import Container from "../components/Container";
import Title from "../components/Title";

const AllRooms = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div>
          <Title
            align='left'
            title='Hotel Rooms'
            subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
          />
        </div>

        {room}
      </div>

      {/* //Filter */}
      <div></div>
    </div>
  );
};
export default AllRooms;
