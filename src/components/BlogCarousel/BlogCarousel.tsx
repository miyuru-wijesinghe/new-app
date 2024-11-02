import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';
import blog4 from '../../assets/blog-4.png';
import blog5 from '../../assets/blog-5.png';
import '@fontsource/roboto';
import './BlogCarousel.scss';

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
}

const blogs: Blog[] = [
    { id: 1, title: 'Gut Health', description: 'Understanding gut health...', image: blog1 },
    { id: 2, title: 'Bariatric Surgery for Diabetes', description: 'Bariatric surgery has emerged as a powerful treatment...', image: blog2 },
    { id: 3, title: 'Thyroid Health', description: 'An article about thyroid health...', image: blog3 },
    { id: 4, title: 'Heart Health', description: 'A closer look at cardiovascular health...', image: blog4 },
    { id: 5, title: 'Cardiovascular Health Tips', description: 'Latest in heart health and preventive measures...', image: blog5 },
];

const BlogCarousel = () => {
    return (
        <div className="container blog-carousel-container">
            <h2 className="carousel-title">
                Blog's <span className="title-underline"></span>
            </h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                pagination={{ clickable: true }}
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
                                <a href="#" className="learn-more-link">
                                    <span>Learn more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.0604 10.9401C16.3413 11.2213 16.4991 11.6026 16.4991 12.0001C16.4991 12.3976 16.3413 12.7788 16.0604 13.0601L10.4044 18.7181C10.123 18.9994 9.74138 19.1573 9.34352 19.1572C8.94567 19.1571 8.56414 18.999 8.28288 18.7176C8.00162 18.4362 7.84366 18.0546 7.84375 17.6567C7.84384 17.2589 8.00198 16.8774 8.28338 16.5961L12.8794 12.0001L8.28338 7.4041C8.01 7.12132 7.85863 6.74249 7.86186 6.34919C7.86509 5.9559 8.02267 5.5796 8.30065 5.30136C8.57863 5.02311 8.95478 4.86518 9.34807 4.86158C9.74137 4.85798 10.1203 5.00899 10.4034 5.2821L16.0614 10.9391L16.0604 10.9401Z" fill="#EAFFF8"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogCarousel;
