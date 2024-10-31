import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import char1 from '../../assets/char-1.png';
import char2 from '../../assets/char-2.png';
import char3 from '../../assets/char-3.png';
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
];

const Testimonials = () => {
  return (
    <section className="testimonials bg-green-50 py-12 px-6">
      <div className="title mb-8">
        <h2 className="text-4xl font-bold text-green-800 inline-block relative">
          Testimonials
        </h2>
      </div>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation
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
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={testimonial.image}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
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
