import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

import choice from "../public/assets/images/about/icons/choice.png";
import reliable from "../public/assets/images/about/icons/reliable.png";
import easy from "../public/assets/images/about/icons/easy.png";
import Image from "next/image";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-five1.jpg" alt="About" />
                <img src="assets/images/about/about-five2.jpg" alt="About" />
                <div className="experience-years">
                  <span className="years">25</span>
                  <h4>Years Of ExperienceIT Solutions</h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Exceptional Talent, Competitive Pricing, Incredible IT
                    Service
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-12">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-mission" />
                      </div>
                      <h4>Social Responsibility</h4>
                      <p>
                        At our company, we believe in making a positive impact
                        on society. We are committed to social responsibility
                        and actively engage in initiatives that benefit our
                        local communities and the environment. Through various
                        philanthropic efforts, we strive to contribute to the
                        well-being and betterment of society as a whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            {[
              {
                title: "Simplicity and User-Focused Approach",
                description:
                  "Simplicity is at the core of our company philosophy. We understand that complexity can hinder productivity and user experience. Therefore, we design our products and services with a focus on simplicity, ensuring intuitive interfaces, streamlined processes, and user-friendly experiences. Our aim is to make technology accessible and easy to use for all.",
                image: {
                  type: true,
                  logo: "flaticon-agile",
                },
              },
              {
                title: "Trusted and Reliable",
                description:
                  "Trust is the foundation of our business. We have earned a solid reputation for delivering high-quality products and services, consistently exceeding customer expectations. Our commitment to transparency, integrity, and confidentiality has helped us establish long-term relationships with our clients. They trust us to deliver reliable solutions that address their unique needs and drive their success.",
                image: {
                  type: true,
                  logo: "flaticon-mission-1",
                },
              },
              {
                title: "Customer-Centric Approach",
                description:
                  "Our customers are at the heart of everything we do. We prioritize their satisfaction and success above all else. Our dedicated team of professionals goes above and beyond to understand our customers' requirements, provide personalized support, and deliver tailored solutions. We listen to their feedback, adapt to their evolving needs, and continuously strive to exceed their expectations.",
                image: { logo: choice },
              },
            ].map(({ title, description, image: { type, logo } }, ind) => (
              <div className="col-lg-4 col-md-6" key={ind}>
                <div className="service-item-six wow fadeInUp delay-0-2s">
                  <div className="icon">
                    {type ? <i className={logo} /> : <Image src={logo} />}
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      {title}
                    </Link>
                  </h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
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
                  <div className="col-xl-3 col-small col-6">
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
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="98.9"
                      >
                        <Counter end={98.9} decimals="1" />
                      </span>
                      <span className="counter-title">Clinets Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="28"
                      >
                        <Counter end={28} decimals="1" />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text k-plus"
                        data-speed={0}
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
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Team Area start */}
      <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>B.Zaman</h4>
                <span className="designation">
                  Infrastructure & Cloud Architect
                </span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>S.Mustafa</h4>
                <span className="designation">RedHat Architect</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>M.Bilal</h4>
                <span className="designation">Ethical Hacker</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>N.Khan</h4>
                <span className="designation">OpenSource Expert</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>A.Ahmad</h4>
                <span className="designation">OpenShift Administrator</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>H.Khaliq</h4>
                <span className="designation">DevOps Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>A.Khaliq</h4>
                <span className="designation">Cyber Security Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>M.Zain</h4>
                <span className="designation">Full Stack Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Team Area end */}

      {/* Partners Area start */}
    </Layout>
  );
};
export default About;
