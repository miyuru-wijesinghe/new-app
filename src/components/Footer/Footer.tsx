import '@fontsource/work-sans';
import '@fontsource/roboto';
import footer from '../../assets/footer.png';
import './Footer.scss';


const Footer = () => {
  return (
    <footer className="bg-emerald-400 bg-[url('/path-to-wavy-pattern.svg')] bg-cover bg-no-repeat rounded-t-xl text-white p-8">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="mb-3">Aloy Mukherjee</h2>
          <p className="leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">How to work?</li>
            <li className="hover:text-white cursor-pointer">Popular Story</li>
            <li className="hover:text-white cursor-pointer">Service</li>
          </ul>
        </div>

        {/* Courses Links */}
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-3">Courses</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Offline Writing</li>
            <li className="hover:text-white cursor-pointer">Storyboard</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-3">Support</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Career</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-3">Contact Info</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">+91 99999-99999</li>
            <li className="hover:text-white cursor-pointer">info@aloymukherjee.com</li>
            <li className="hover:text-white cursor-pointer">4th Floor, Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-wrapper border-t border-white border-opacity-20 text-xs text-center mt-8 pt-4 text-gray-200">
        <p>Copyright 2024 All Rights Reserved by Aloymukherjee.com</p>
        <p>Designed and developed by <img src={footer} alt="" /></p>
      </div>
    </footer>
  );
};

export default Footer;