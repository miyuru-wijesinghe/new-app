import '@fontsource/pt-sans/700.css';
import '@fontsource/roboto/400.css';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="cover bg-green-700 text-white p-8 flex flex-col items-start">
      <h2 className="text-lg mb-2">Welcome To Our Clinic</h2>
      <h1 className="text-4xl font-bold">Take Care Of Your Health</h1>
      <p className="mt-4 max-w-md">
        Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem
      </p>
      <div className="buttons mt-6 flex space-x-4">
        <button className="bg-green-500 px-4 py-2 rounded text-white">Book Appointment</button>
        <button className="border border-white px-4 py-2 rounded text-white">BMI Calculator</button>
      </div>
    </section>
  );
};

export default Hero;
