import medicalProblem from '../../assets/medical-problems.png';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import './MedicalSolutions.scss';

const MedicalSolutions = () => {
  return (
      <section className="container medical-solutions py-16 px-8 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section: Text Content */}
        <div className="text-content lg:w-1/2 lg:mr-12 mb-8 lg:mb-0">
          <p className="uppercase mb-2">Highest Quality Care</p>
          <h2 className="mb-6">Solutions to Complex Medical Problems</h2>
          <ul className="list-disc pl-4 space-y-4">
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
          </ul>
        </div>

        {/* Right Section: Image with Play Button */}
        <div className="image-container relative lg:w-1/2">
          <img
              src={medicalProblem}
              alt="Healthcare providers assisting a patient"
              className="rounded-lg w-full"
          />
          {/* Play Button */}
          <div className="play-button absolute inset-0 flex items-center justify-center">
            <button className="p-4 rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <g clipPath="url(#clip0)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.8971 15.8667C18.9872 15.1098 19.2525 14.3844 19.6721 13.7481C20.0917 13.1117 20.6539 12.5821 21.3141 12.2012C21.9743 11.8203 22.7142 11.5986 23.4751 11.5539C24.236 11.5091 24.9968 11.6425 25.6971 11.9434C29.2371 13.4567 37.1705 17.0534 47.2371 22.8634C57.3071 28.6767 64.3905 33.7534 67.4671 36.0567C70.0938 38.0267 70.1005 41.9334 67.4705 43.91C64.4238 46.2 57.4271 51.21 47.2371 57.0967C37.0371 62.9834 29.1971 66.5367 25.6905 68.03C22.6705 69.32 19.2905 67.3634 18.8971 64.1067C18.4371 60.3 17.5771 51.6567 17.5771 39.9834C17.5771 28.3167 18.4338 19.6767 18.8971 15.8667Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>
  );
};

export default MedicalSolutions;
