import '@fontsource/work-sans';
import '@fontsource/roboto';
import footer from '../../assets/footer.png';
import './Footer.scss';

const Footer = () => {
  return (
      <footer className="bg-cover bg-no-repeat footerBackground">
        <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* About Section */}
          <div className="about card md:mb-0">
            <h2 className="mb-6">Aloy Mukherjee</h2>
            <p className="leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="company-sec card md:mb-0">
            <h3 className="mb-6">Company</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">How to work?</li>
              <li className="hover:text-white cursor-pointer">Popular Story</li>
              <li className="hover:text-white cursor-pointer">Service</li>
            </ul>
          </div>

          {/* Courses Links */}
          <div className="courses-sec card md:mb-0">
            <h3 className="mb-6">Courses</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">Offline Writing</li>
              <li className="hover:text-white cursor-pointer">Storyboard</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="support-sec card md:mb-0">
            <h3 className="mb-6">Support</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Career</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-sec card md:mb-0">
            <h3 className="mb-6">Contact Info</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">+91 99999-99999</li>
              <li className="hover:text-white cursor-pointer">info@aloymukherjee.com</li>
              <li className="hover:text-white cursor-pointer">4th Floor, Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-wrapper border-t border-white text-xs text-center mt-8 pt-4">
          <p>Copyright 2024 All Rights Reserved by Aloymukherjee.com</p>
          <p>Designed and developed by <img src={footer} alt="Footer Logo" className="footer-logo" /></p>
        </div>
      </footer>
  );
};

export default Footer;
