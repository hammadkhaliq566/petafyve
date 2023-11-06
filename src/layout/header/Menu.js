import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
import { services } from "@/public/data/services";
import { blogPosts } from "@/public/data/blog";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo" style={{ marginBlock: "10px" }}>
            <Link href="/">
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li>
              <Link href="/" onClick={() => active("home")}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/services" onClick={() => active("services")}>
                services
              </Link>
              <ul style={activeSubMenu("services")}>
                {services.map(({ title, slug }, ind) => (
                  <li key={ind}>
                    <Link href={`/service-details?slug=${slug}`}>{title}</Link>
                  </li>
                ))}
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <Link href="/blog" onClick={() => active("blog")}>
                Blog
              </Link>
              <ul style={activeSubMenu("blog")}>
                {blogPosts.map(({ category, slug }, ind) => (
                  <li key={ind}>
                    <Link href={`/blog-details?slug=${slug}`}>{category}</Link>
                  </li>
                ))}
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <Link href="/" onClick={() => active("pages")}>
                Other pages
              </Link>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link href="/services">services</Link>
            <ul>
              {services.map(({ title, slug }, ind) => (
                <li key={ind}>
                  <Link href={`/service-details?slug=${slug}`}>{title}</Link>
                </li>
              ))}
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <Link href="/blog">blog</Link>
            <ul>
              {blogPosts.map(({ category, slug }, ind) => (
                <li key={ind}>
                  <Link href={`/blog-details?slug=${slug}`}>{category}</Link>
                </li>
              ))}
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          {/* <li className="dropdown">
            <Link href="/">pages</Link>
            <ul>
              <li>
                <Link href="about">About us</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          <li className="">
            <Link href="/about">About Us</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
