import { useState } from 'react';
import phoneIcon from '../../assets/icons/phone-icon.png';
import facebookIcon from '../../assets/icons/facebook-icon.png';
import instagramIcon from '../../assets/icons/instagram-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import youtubeIcon from '../../assets/icons/youtube-icon.png';
import '@fontsource/roboto/500.css';
import '@fontsource/pt-sans';
import './Header.scss';

type MenuItem = {
  title: string;
  submenu?: { label: string; link: string }[];
};

const MENU_ITEMS: MenuItem[] = [
  { title: 'Home', submenu: [{ label: 'Welcome', link: '#' }, { label: 'Services', link: '#' }] },
  { title: 'About-us', submenu: [{ label: 'Our Team', link: '#' }, { label: 'Our Mission', link: '#' }] },
  { title: 'Surgeries', submenu: [{ label: 'Surgery 1', link: '#' }, { label: 'Surgery 2', link: '#' }] },
  { title: 'Testimonials', submenu: [{ label: 'Client Testimonials', link: '#' }, { label: 'Success Stories', link: '#' }] },
  { title: 'Gallery', submenu: [{ label: 'Photos', link: '#' }, { label: 'Videos', link: '#' }] },
];

const DropdownMenu = ({ title, submenu, isOpen, toggleDropdown }: {
  title: string;
  submenu?: { label: string; link: string }[];
  isOpen: boolean;
  toggleDropdown: () => void;
}) => (
  <div className="relative">
    <button onClick={toggleDropdown} className="flex items-center hover:text-teal-500">
      {title}
      <svg width="24" height="24"
        className={`ml-3 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M13.0599 16.06C12.7787 16.3409 12.3974 16.4987 11.9999 16.4987C11.6024 16.4987 11.2212 16.3409 10.9399 16.06L5.2819 10.404C5.00064 10.1226 4.84268 9.74102 4.84277 9.34316C4.84287 8.9453 5.00101 8.56377 5.2824 8.28251C5.56379 8.00125 5.9454 7.84329 6.34325 7.84338C6.74111 7.84348 7.12264 8.00162 7.4039 8.28301L11.9999 12.879L16.5959 8.28301C16.8787 8.00964 17.2575 7.85827 17.6508 7.8615C18.0441 7.86473 18.4204 8.0223 18.6986 8.30028C18.9769 8.57827 19.1348 8.95441 19.1384 9.34771C19.142 9.741 18.991 10.12 18.7179 10.403L13.0609 16.061L13.0599 16.06Z" fill="black" />

      </svg>
    </button>
    {isOpen && submenu && (
      <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg z-10">
        {submenu.map((item) => (
          <a key={item.label} href={item.link} className="block px-4 py-2 hover:bg-teal-500 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (title: string) => setActiveDropdown(activeDropdown === title ? null : title);

  return (
    <header className="text-white font-sans">
      {/* Top Bar */}
      <div className="top-bar flex justify-between items-center px-4 py-2 text-sm">
        <div className="phone">
          <a className="flex" href="tel:+919810532834">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 98105 32834</span>
          </a>
        </div>
        <div className="flex space-x-4">
          {[facebookIcon, instagramIcon, linkedinIcon, youtubeIcon].map((icon, index) => (
            <a key={index} href="#" className="hover:opacity-80">
              <img src={icon} alt="Social Icon" />
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="navigation bg-white text-black shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Centered Desktop Menu */}
          <nav className="hidden md:flex space-x-6 flex-grow justify-center">
            {MENU_ITEMS.map(({ title, submenu }) => (
              <DropdownMenu
                key={title}
                title={title}
                submenu={submenu}
                isOpen={activeDropdown === title}
                toggleDropdown={() => toggleDropdown(title)}
              />
            ))}
          </nav>

          {/* BMI Calculator Button on the Right */}
          <a
            href="#"
            className="bmi-btn hidden md:block ml-auto px-4 py-2 border rounded-full hover:bg-teal-500 hover:text-white transition-colors"
          >
            BMI Calculator
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden flex items-center text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4">
            <nav className="flex flex-col space-y-2">
              {MENU_ITEMS.map(({ title, submenu }) => (
                <DropdownMenu
                  key={title}
                  title={title}
                  submenu={submenu}
                  isOpen={activeDropdown === title}
                  toggleDropdown={() => toggleDropdown(title)}
                />
              ))}
            </nav>
            <a
              href="#"
              className="mt-4 block px-4 py-2 text-center text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              BMI Calculator
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
