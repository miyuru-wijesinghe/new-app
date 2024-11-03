import doctor from '../../assets/doctor-2.png';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/pt-sans/700.css';
import phoneIcon from '../../assets/icons/phone-icon.png';

import './Contact.scss';

const Contact = () => {
  return (
      <section className="contact flex justify-center items-center min-h-screen">
        <div className="flex items-center backgroundPattern mx-4 shadow-lg">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
                src={doctor}
                alt="Profile"
                className="m-4 profileImage"
            />
          </div>

          {/* Contact Information */}
          <div className="p-6 text-white">
            <h2 className="mb-4">Contact - Us</h2>
            <h6 className="mb-8">Please feel free to contact us for emergency case.</h6>
            <p className="leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem <br /> Ipsum has been the industry's standard dummy a type specimen book.
            </p>
            <div className="phone mt-2">
              <a className="flex" href="tel:+919810532834">
                <img src={phoneIcon} alt="Phone Icon" />
                <span>+91 98105 32834</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
