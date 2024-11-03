import appointment from "../../assets/appointment.png";
import "@fontsource/pt-sans/";
import "@fontsource/pt-sans/700.css";
import "./AppointmentForm.scss";

const AppointmentForm = () => {
  return (
      <section className="appointment-section container flex justify-center items-center min-h-screen p-4">
        <div className="appointment-wrapper flex flex-col md:flex-row items-center rounded-lg overflow-hidden w-full">

          {/* Left Image Section */}
          <div className="image-container w-full">
            <img
                src={appointment}
                alt="Doctor and patient"
                className="object-cover w-full h-full"
            />
          </div>

          {/* Right Form Section */}
          <div className="appointment-form p-8 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Make an Appointment</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Id</label>
                <input type="email" className="form-input w-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Appointment Date</label>
                  <input type="date" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input w-full" rows={4} />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>
  );
};

export default AppointmentForm;
