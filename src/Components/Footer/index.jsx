import {Link, Outlet} from "react-router-dom"
import footerHomeLogo from "/footer-home-logo.png";

export const Footer = ({page}) => {


  return (
    <>
      <div className="footer-container center-alignment">
        <Link to="/Home" className="footer-link">
          {page == "home" ? (
            <img
              src={footerHomeLogo}
              alt="Home text in graffiti style"
              className="footer-home-logo"
            />
          ) : (
            <div className="footer-link-not-home-page-container center-alignment">
              <span className="material-symbols-outlined">home</span>
            </div>
          )}
        </Link>
      </div>
      <Outlet />
    </>
  );
};
