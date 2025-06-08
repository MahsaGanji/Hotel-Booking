/** @format */

import { testimonials } from "../../assets/assets";
import Container from "../Container";
import Title from "../Title";
import TestimonialCard from "./components/TestimonialCard";

const Testimonial = () => {
  return (
    <Container backgroundColor='slate'>
      <Title
        title='What Our Guests Say'
        subTitle='Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.'
      />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20 '>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
};
export default Testimonial;
