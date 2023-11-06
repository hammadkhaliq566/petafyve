import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

import InfraStructure from "../public/assets/images/icons/infrastructure.png";
import Consultant from "../public/assets/images/icons/consultant.png";
import Cloud from "../public/assets/images/icons/cloud.png";
import CyberSecurity from "../public/assets/images/icons/cybersecurity.png";
import Image from "next/image";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Service2 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} pageTitle="PetaFyve's Services" />
      <section className="services-area-three overflow-hidden pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Our Services</span>
                  <h2>
                    Exceptional Talent, Competitive Pricing, Incredible IT
                    Service
                  </h2>
                </div>
                <p>
                  At our company, we believe in making a positive impact on
                  society. We are committed to social responsibility and
                  actively engage in initiatives that benefit our local
                  communities and the environment. Through various philanthropic
                  efforts, we strive to contribute to the well-being and
                  betterment of society as a whole.
                </p>
                <ul className="list-style-one pt-5">
                  {[
                    "Expert guidance, tech solutions.",
                    "Streamlined workflows, seamless collaboration.",
                    "Safeguarding data, threat prevention.",
                    "Reliable systems, scalable foundations.",
                  ].map((item, ind) => (
                    <li key={ind}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <Image src={InfraStructure} alt="icon" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Infrastructure</h4>
                    </Link>
                    <p>
                      Leveraging 26 years of extensive industry expertise and
                      backed by a dedicated team of over 20 highly skilled
                      professionals, Flexion is a leading provider of robust and
                      reliable infrastructure solutions.
                    </p>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <Image src={Cloud} alt="icon" />
                    </div>
                    <h4>Cloud & DevOps</h4>
                    <p>
                      WDrawing upon a decade of invaluable industry experience
                      and fueled by a talented workforce of seven plus
                      exceptional professionals, our company stands at the
                      forefront of delivering cutting-edge cloud and DevOps
                      solutions.ith over 20 year of experience 850+ employees
                      flexion
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <Image src={CyberSecurity} alt="icon" />
                    </div>
                    <h4>Cyber Security</h4>
                    <p>
                      Harnessing a wealth of seven years' experience in the
                      field, complemented by a dedicated team of three plus
                      highly skilled professionals, we specialize in providing
                      top-tier cybersecurity solutions.
                    </p>
                  </div>
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <Image src={Consultant} alt="icon" />
                    </div>
                    <h4>IT Consulting</h4>
                    <p>
                      With an impressive track record spanning over two decades,
                      and bolstered by a dynamic team of twelve plus
                      accomplished professionals, our organization excels in
                      delivering comprehensive and strategic IT consultancy
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section
        className="statistics-area-four text-white bgs-cover pt-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/background/statistics-three.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Company Statistics</span>
                  <h2>Learn About Our Comapny Statistics</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-target" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={200}
                    >
                      <Counter end={200} />
                    </span>
                    <span className="counter-title">Project Complate</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-target-audience" />
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop="98.9"
                    >
                      <Counter end={98.9} decimals={1} />
                    </span>
                    <span className="counter-title">Clinets Happy</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-customer-experience" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="28"
                    >
                      <Counter end={28} />
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-medal" />
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={1}
                    >
                      <Counter end={1} />
                    </span>
                    <span className="counter-title">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Service2;
