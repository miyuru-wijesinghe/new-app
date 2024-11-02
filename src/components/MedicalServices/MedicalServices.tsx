import icon1 from '../../assets/Gastric.png';
import icon2 from '../../assets/Endoscopic.png';
import icon3 from '../../assets/Varicocelectomy.png';
import icon4 from '../../assets/Appendix.png';
import icon5 from '../../assets/Gallbladder.png';

import './MedicalServices.scss';

const services = [
  {
    icon: icon1,
    title: 'Gastric Bypass Surgery',
    description: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
  },
  {
    icon: icon2,
    title: 'Endoscopic Anorectal Surgery',
    description: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
  },
  {
    icon: icon3,
    title: 'Varicocelectomy Surgery',
    description: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
  },
  {
    icon: icon4,
    title: 'Appendix Surgery',
    description: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
  },
  {
    icon: icon5,
    title: 'Gallbladder Stone Surgery',
    description: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat',
  },
];

const MedicalServices = () => {
  return (
    <section className="container medical-services bg-light-green py-16 px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-dark-green">Our Medical Services</h2>
        <p className="text-lg text-green mt-2">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br></br> at tempus, blandit posuere ligula varius congue cursus porta feugiat
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service, index) => (
          <div key={index} className="service-card bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={service.icon} alt={`${service.title} icon`} className="mx-auto mb-4 h-16 w-16" />
            <h3 className="text-xl font-semibold text-dark-green mb-2">{service.title}</h3>
            <p className="text-green text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalServices;
