import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <section class="map-clean">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">Location </h2>
            <p class="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
            </p>
          </div>
        </div>
        <img className="map" />
      </section>
      <section class="contact-clean">
        <form method="post">
          <h2 class="text-center">Contact us</h2>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              placeholder="Message"
              rows="14"
            ></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              send{" "}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
