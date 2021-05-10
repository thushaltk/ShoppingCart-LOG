import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 style={{ paddingTop: "50px" }}>About and Team Section</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab
        nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda
        aspernatur facere ipsam nemo ratione cumque magnam enim fugiat
        reprehenderit expedita.
      </p>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="my-4">Our Team</h2>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4 text-center">
          <img className="rounded-circle img-fluid d-block mx-auto tk" />
          <h3 className="m-0">Thushal Kulatilake</h3>
          <h5 className="my-1">3rd Year SE Undergraduate</h5>
          <p>
            <a href="https://www.facebook.com/thushal.kulatilake/" className="links">
              <i class="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/thushaltk/" className="links">
              <i class="icon ion-social-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/thushaltk/" className="links">
              <i class="icon ion-social-instagram"></i>
            </a>
            
          </p>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4 text-center">
          <img className="rounded-circle img-fluid d-block mx-auto kishen" />
          <h3 className="m-0">Kishen Deemud</h3>
          <h5 className="my-1">3rd Year SE Undergraduate</h5>
          <a href="https://www.facebook.com/kishen.deemud" className="links">
              <i class="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/kishen-deemud-02532684/" className="links">
              <i class="icon ion-social-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/kish_deemu/" className="links">
              <i class="icon ion-social-instagram"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4 text-center">
          <img className="rounded-circle img-fluid d-block mx-auto eishan" />
          <h3 className="m-0">Eishan Dinuka</h3>
          <h5 className="my-1">3rd Year SE Undergraduate</h5>
          <a href="https://www.facebook.com/eishandinuka.weerasinghe.12" className="links">
              <i class="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/w-h-a-eishan-dinuka-08a2b8199/" className="links">
              <i class="icon ion-social-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/eishan_dinuka/" className="links">
              <i class="icon ion-social-instagram"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4 text-center">
          <img className="rounded-circle img-fluid d-block mx-auto rusira" />
          <h3 className="m-0">Rusira Liyanage</h3>
          <h5 className="my-1">3rd Year SE Undergraduate</h5>
          <a href="https://www.facebook.com/rusira.liyanage" className="links">
              <i class="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/rusira-senath-l-08871110a/" className="links">
              <i class="icon ion-social-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/rusira_liyanage/" className="links">
              <i class="icon ion-social-instagram"></i>
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
