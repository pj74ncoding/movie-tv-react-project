import { useRef } from "react";
import { NavOptions } from "../NavOptions";
import { NavBar } from "../NavBar";

export const NavSection = ({ page }) => {
  const hamburgerNavOptionsRef = useRef(null);

  return (
    <>
      <nav>
        <section className="nav-section">
          
          <NavBar
            pageClassName={page}
            hamburgerNavOptionsRef={hamburgerNavOptionsRef}
          />
        </section>
        <div
          className="Hamburger-nav-options hamburger-options-not-displayed"
          ref={hamburgerNavOptionsRef}
        >
          <NavOptions NavOptionsClassName="nav-options" pageClassName={page} />
        </div>
      </nav>
    </>
  );
};
