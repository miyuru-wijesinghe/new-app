import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';
import blog4 from '../../assets/blog-4.png';
import './BlogCarousel.scss';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

const blogs: Blog[] = [
  { id: 1, title: 'How Bariatric Surgery Can Help Manage Diabetes?', description: 'Bariatric surgery has emerged...', image: blog1 },
  { id: 2, title: 'Thyroid Health', description: 'An article about thyroid health...', image: blog2 },
  { id: 3, title: 'Gut Health', description: 'Understanding gut health...', image: blog3 },
  { id: 4, title: 'Heart Health', description: 'A closer look at cardiovascular health...', image: blog4 },
];

const BlogCarousel: React.FC = () => {
  return (
    <div className="blog-carousel-container">
      <h2 className="carousel-title">
        Blog's <span className="title-underline"></span>
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiper-container"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="overlay">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <a href="#" className="learn-more-link">Learn more</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
