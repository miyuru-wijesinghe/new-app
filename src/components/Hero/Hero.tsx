import '@fontsource/pt-sans/700.css';
import '@fontsource/roboto/400.css';
import './Hero.scss';

const Hero = () => (
    <section className="cover p-8 flex flex-col items-start">
        <h2 className="hero-subtitle">Welcome To Our Clinic</h2>
        <h1 className="hero-title">Take Care Of <br /> Your Health</h1>
        <p className="hero-description">
            Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem
        </p>
        <div className="buttons">
            <button className="primary-button">Book Appointment</button>
            <button className="secondary-button">BMI Calculator</button>
        </div>
    </section>
);

export default Hero;
