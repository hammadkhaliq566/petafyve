import Link from "next/link";
import { Fragment } from "react";
import HiddenSidebar from "../HiddenSidebar";
import Menu from "./Menu";

const Header = () => {
  return (
    <Fragment>
      <header className="main-header header-four">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                        className="logo-img"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-auto clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}

              {/* Menu Button */}
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <HiddenSidebar />
    </Fragment>
  );
};
export default Header;
