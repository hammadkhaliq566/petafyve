import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/assets/images/favicon.png";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="footer-cta-first section-title wow fadeInLeft delay-0-2s text-white">
              <span className="sub-title text-white">
                Need Any Consultations ?
              </span>
              <h2>
                Ignite Your IT Business Growth with PetaFyve&apos;s Experties
              </h2>
            </div>

            <div className="hotline wow fadeInRight delay-0-2s text-white">
              <i className="fas fa-phone" />
              <div className="content">
                <span className="text-white">Contact Number</span>
                <br />
                <a href="callto:+971558742281" className="text-white">
                 +971 55 874 2281
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-10">
                <Link legacyBehavior href="/">
                  <a>
                    <Image src={LogoImage} alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                Welcome to PetaFyve, a global leader in providing cutting-edge
                Digital solutions. With a strong presence in international
                markets, we have built a reputation for excellence and
                innovation. Our mission is to empower businesses worldwide with
                transformative Digital Service services to achieve their
                strategic goals.
              </p>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="row">
              <div className="col-md-3 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="about">{`About`}</Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="contact">{`Contact us`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">{`Blog & News`}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Red Hat Consultancy</h4>
                  <ul className="list-style-two">
                    {[
                      "Implementation and Deployment",
                      "System Administration",
                      "Virtualization",
                      "Integration and Middleware",
                      "Cloud Solutions ",
                      "Security and Compliance",
                      "Integration and Middleware",
                      "Containerization and Kubernetes",
                      "Support and Maintenance",
                      "Data Management and Analytics",
                      "Training and Certification",
                    ].map((text, ind) => (
                      <li key={ind} className="cursor-default">
                        {/* <Link legacyBehavior href="/"> */}
                        <a className="cursor-default hover:text-white">
                          {text}
                        </a>
                        {/* </Link> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Cloud & DevOps</h4>
                  <ul className="list-style-two">
                    {[
                      "Strategy and Planning",
                      "Migration and Deployment",
                      "Infrastructure Design and Optimization",
                      "Cloud Security and Compliance",
                      "Cloud Cost Optimization",
                      "Cloud Backup and Disaster Recovery",
                      "Cloud Performance Optimization",
                      "DevOps Implementation and Automation",
                      "Infrastructure as Code (IaC)",
                      "Containerization and Orchestration",
                      "DevSecOps Integration",
                      "DevOps Culture and Training",
                    ].map((item, ind) => (
                      <li key={ind} className="cursor-default">
                        {/* <Link legacyBehavior href="/"> */}
                        <a className="cursor-default">{item}</a>
                        {/* </Link> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <div className="copyright-text wow fadeInLeft delay-0-2s flex">
                <p className="text-center">
                  © 2023 PetaFyve. All rights reserved.
                </p>
                <div className="social-style-one">
                  <a href="https://web.facebook.com/petafive" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://twitter.com/petafive" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.instagram.com/petafive/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/petafive/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
export default Footer;
