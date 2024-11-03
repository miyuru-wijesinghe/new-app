import './DoctorProfile.scss';
import '@fontsource/roboto';
import '@fontsource/pt-sans';
import '@fontsource/pt-sans/700.css';
import doctor from '../../assets/doctor.png';

const DoctorProfile = () => {
  return (
    <section className="doctor-profile rounded-lg shadow-lg overflow-hidden flex bg-light-green">
      {/* Image Section */}
      <div className="image-section w-1/2">
        <img
          src={doctor}
          alt="Doctor in a hospital"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="info-section w-1/2 p-8 relative flex flex-col justify-center">
        <h3 className="mb-10">About</h3>
        <h2 className="mb-8">Dr Aloy J Mukherjee</h2>
        <ul className="text-base space-y-3 ml-4 mb-6">
          <li>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</li>
          <li>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</li>
          <li>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4 mt-2">
          <button className="consult-btn px-6 py-2 rounded-full">
            Online Consultation
          </button>
          <button className="appointment-btn border-2 px-6 py-2 rounded-full">
            Make an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
