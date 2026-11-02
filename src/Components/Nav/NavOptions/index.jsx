import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextForNav } from "../NavSection";
import home from "/home-logo.png";
import watchList from "/watchlist-logo.png";
import movies from "/movies-logo.png";
import tv from "/tv-logo.png";

export const NavOptions = ({ NavOptionsClassName }) => {
  const pageSelected = useContext(ContextForNav);
  return (
    <>
      <nav className={`${NavOptionsClassName} main-nav`}>
        <div className={`${NavOptionsClassName}-icon-container`}>
          <span
            style={{
              color: pageSelected == "home" ? "#ffde59" : null,
            }}
            className="material-symbols-outlined"
          >
            home
          </span>

          <Link
            className="nav-bar-options-icon-container-link home-link"
            to="/Home"
          >
            {pageSelected == "home" ? (
              <img
                src={home}
                alt="Home text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageSelected == "home" ? "orange" : null,
                }}
              >
                Home
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageSelected}`}
        >
          <span
            style={{ color: pageSelected == "watchlist" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            library_add
          </span>
          <Link
            className="nav-bar-options-icon-container-link watchlist-link"
            to="/Watchlist"
          >
            {pageSelected == "watchlist" ? (
              <img
                src={watchList}
                alt="Watchlist text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageSelected == "watchlist" ? "orange" : null,
                }}
              >
                Watchlist
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageSelected}`}
        >
          <span
            style={{ color: pageSelected == "movies" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            movie
          </span>
          <Link
            className="nav-bar-options-icon-container-link movies-link"
            to="/Movies"
          >
            {pageSelected == "movies" ? (
              <img
                src={movies}
                alt="Movies text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageSelected == "movies" ? "orange" : null,
                }}
              >
                Movies
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageSelected}`}
        >
          <span
            style={{ color: pageSelected == "tv" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            tv_gen
          </span>
          <Link
            className="nav-bar-options-icon-container-link tv-link"
            to="/TV"
          >
            {pageSelected == "tv" ? (
              <img
                src={tv}
                alt="TV text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageSelected == "tv" ? "orange" : null,
                }}
              >
                Tv
              </p>
            )}
          </Link>
        </div>
      </nav>

      {/*       Second nav bar below   Second nav bar below  */}
      {/*     For screen sizes between 500px and 768px  */}

      <nav className="second-nav-bar">
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Home">
            <span
              className={
                pageSelected == "home"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              home
            </span>
          </Link>
        </div>

        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Watchlist">
            <span
              className={
                pageSelected == "watchlist"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              library_add
            </span>
          </Link>
        </div>
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Movies">
            <span
              className={
                pageSelected == "movies"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              movie
            </span>
          </Link>
        </div>
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/TV">
            <span
              className={
                pageSelected == "tv"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              tv_gen
            </span>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
