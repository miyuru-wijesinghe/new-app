import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import char1 from '../../assets/char-1.png';
import char2 from '../../assets/char-2.png';
import char3 from '../../assets/char-3.png';
import char4 from '../../assets/char-4.png';
import '@fontsource/roboto';
import '@fontsource/pt-sans/700.css';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    image: char1,
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
    rating: 4,
  },
  {
    id: 2,
    image: char2,
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
    rating: 5,
  },
  {
    id: 3,
    image: char3,
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
    rating: 4,
  },
  {
    id: 4,
    image: char4,
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <section className="container testimonials py-12 px-6">
      <div className="title mb-8">
        <h2 className="inline-block relative">
          Testimonials
        </h2>
      </div>

        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mx-auto"
        >
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="swiper-div rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 mx-auto">
                      <img
                          src={testimonial.image}
                          alt="User"
                          className="w-24 h-24 rounded-full mb-6"
                      />
                    </div>
                    <p className="testimonial-txt mb-4">{testimonial.text}</p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                          <span key={i}>
                    {i < testimonial.rating ? '★' : '☆'}
                </span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>

            ))}
        </Swiper>

    </section>
  );
};

export default Testimonials;
