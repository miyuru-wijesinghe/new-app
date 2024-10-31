import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import InfoCards from '../components/InfoCards/InfoCards';
import ConsultationScheduler from '../components/ConsultationScheduler/ConsultationScheduler';
import Testimonials from '../components/Testimonials/Testimonials';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import DoctorProfile from '../components/DoctorProfile/DoctorProfile';
import MedicalServices from '../components/MedicalServices/MedicalServices';
import MedicalSolutions from '../components/MedicalSolutions/MedicalSolutions';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InfoCards />
      <DoctorProfile />
      <MedicalServices />
      <ConsultationScheduler />
      <MedicalSolutions />
      <AppointmentForm />
      <BlogCarousel />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
