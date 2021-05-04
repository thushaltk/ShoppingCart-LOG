import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button ">
      <div className="container">
        <a className="navbar-brand" href="#">
          LOGShop
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact is
              </a>
            </li>
          </ul>
          <span className="navbar-text actions">
            <a className="btn btn-primary login" href="#">
              Log In
            </a>
            <a className="btn btn-success action-button" role="button" href="#">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
