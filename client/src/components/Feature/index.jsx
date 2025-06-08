/** @format */

import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../../assets/assets";
import HotelCard from "../HotelCard";
import Title from "../Title";
import Container from "../Container";

const Feature = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/rooms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container backgroundColor='slate'>
      <Title
        title='Featured Hotels'
        subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences'
      />
      <div className='flex flex-wrap items-center justify-center gap-5  mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <button
          onClick={handleNavigate}
          className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transtion-all cursor-pointer'>
          View All Hotels
        </button>
      </div>
    </Container>
  );
};
export default Feature;
