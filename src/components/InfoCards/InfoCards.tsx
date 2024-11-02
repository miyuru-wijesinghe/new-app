import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import phoneIcon from '../../assets/icons/phone-icon.png';
import './InfoCards.scss';


const InfoCards = () => {
  return (
    <section className="cards grid grid-cols-1 md:grid-cols-4 p-8 text-white">
      <div className="card card-1 bg-green-400 p-4 shadow-md text-left">
        <h3 className="font-bold text-lg mb-8 mt-2">Working Time</h3>
        <div className="space-y-1 flex flex-col gap-5">
          <p className="flex justify-between border-b border-[#003020]"><span>Monday - Friday</span> <span>09:00 - 17:00</span></p>
          <p className="flex justify-between border-b border-[#003020]"><span>Saturday</span> <span>09:00 - 14:00</span></p>
          <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
        </div>
      </div>
      <div className="card card-2 bg-green-500 p-4 shadow-md text-center">
        <h3 className="font-bold text-lg mb-8 mt-2">Appointment</h3>
        <p className="mb-4">An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
        <button className="border border-white text-white px-4 py-2 mt-4">Make an Appointment</button>
      </div>
      <div className="card card-3 bg-green-600 p-4 shadow-md text-center">
        <h3 className="font-bold text-lg mb-8 mt-2">BMI Checker</h3>
        <p className="mb-4">An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
        <button className="border border-white text-white px-4 py-2 mt-4">BMI Calculator</button>
      </div>
      <div className="card card-4 bg-green-700 p-4 shadow-md text-center">
        <h3 className="font-bold text-lg mb-8 mt-2">Emergency Cases</h3>
        <a className="tel flex justify-center mt-8 mb-8" href="tel:1-800-123-4560">
          <img src={phoneIcon} className='pr-2' alt="Phone Icon" />
          <span>1-800-123-4560</span>
        </a>
        <p>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
      </div>
    </section>
  );
};

export default InfoCards;
