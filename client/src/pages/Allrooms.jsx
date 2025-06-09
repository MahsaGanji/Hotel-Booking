/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import Title from "../components/Title";
import StarRating from "../components/StartRating";
import { assets } from "../assets/assets";

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const handleNavigate = ({ id }) => {
    navigate(`/rooms/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img
              onClick={(id) => handleNavigate(id)}
              src={room.images[0]}
              alt='image-rooms'
              title='View Room Details'
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
            />
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500 '>{room.hotel.city}</p>
              <p
                className='text-gray-800 text-3xl font-playfair cursor-pointer'
                onClick={(id) => handleNavigate(id)}>
                {room.hotel.name}
              </p>
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt='loaction-icon' />
                <span>{room.hotel.address}</span>
              </div>
              {/* //Room Amenities */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                  <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className='w-5 h-5 '
                    />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>
              {/* Room Price per Night */}
              <p className='text-xl font-medium text-gray-700'>
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* //Filter */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
        <div
          className={`flex justify-between items-center px-5 py-2.5 min-lg:boder-b border-gray-300 ${
            openFilter && "border-b"
          }`}>
          <p className='text-base font-medium text-gray-800'>FILTER</p>
          <div className='text-xs cursor-pointer'>
            <span
              className='lg:hidden'
              onClick={() => setOpenFilter((perv) => !perv)}>
              {openFilter ? "HIDE" : "SHOW"}
            </span>
            <span className='hidden lg:block'>CLEAR</span>
          </div>
        </div>
        <div
          className={`${
            openFilter ? "h-auto " : "h-0 lg:h-auto"
          } overflow-hidden transtion-all duration-700`}></div>
      </div>
    </div>
  );
};
export default AllRooms;
