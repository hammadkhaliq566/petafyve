import Layout from "@/layout";
import ProgressBar from "@/src/components/ProgressBar";
import Hero4Slider from "@/src/components/slider/Hero4Slider";
import { projectThreeActive, servicesFiveActive } from "@/src/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import illustration from "../public/assets/images/svg/api.svg";

import RedHat from "../public/assets/images/partners/redhat.png";
import AWS from "../public/assets/images/partners/aws.png";
import GoogleCloud from "../public/assets/images/partners/googlecloud.png";
import MicroSoft from "../public/assets/images/partners/microsoft.png";
import Oracle from "../public/assets/images/partners/oracle.png";

import InfraStructure from "../public/assets/images/icons/infrastructure.png";
import Consultant from "../public/assets/images/icons/consultant.png";
import Cloud from "../public/assets/images/icons/cloud.png";
import CyberSecurity from "../public/assets/images/icons/cybersecurity.png";

// Digital Core Services Section Images
import InfraStructureAutomation from "../public/assets/images/icons/infrastructure-automation.png";
import ApplicationDev from "../public/assets/images/icons/applicationdev.png";
import Consultancy from "../public/assets/images/icons/consultancy.png";
import DesignDeploy from "../public/assets/images/icons/designanddeploy.png";
import ManagedServices from "../public/assets/images/icons/managed-services.png";
import Migration from "../public/assets/images/icons/migration.png";

const Index4 = () => {
  return (
    <Layout>
      {/* Slider Section Start */}
      <Hero4Slider />
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <Image src={InfraStructure} alt="icon" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Infrastrcture
                  </Link>
                </h4>
                <p>
                  Leveraging 26 years of extensive industry expertise and backed
                  by a dedicated team of over 20 highly skilled professionals,
                  Flexion is a leading provider of robust and reliable
                  infrastructure solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three wow fadeInDown delay-0-2s">
                <div className="icon">
                  <Image src={Cloud} alt="icon" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Cloud & DevOps
                  </Link>
                </h4>
                <p>
                  Drawing upon a decade of invaluable industry experience and
                  fueled by a talented workforce of seven plus exceptional
                  professionals, our company stands at the forefront of
                  delivering cutting-edge cloud and DevOps solutions.
                </p>

                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-45 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <Image src={CyberSecurity} alt="icon" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Cyber Security
                  </Link>
                </h4>
                <p>
                  Harnessing a wealth of seven years' experience in the field,
                  complemented by a dedicated team of three plus highly skilled
                  professionals, we specialize in providing top-tier
                  cybersecurity solutions.
                </p>

                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInDown delay-0-2s">
                <div className="icon">
                  <Image src={Consultant} alt="icon" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    IT Consulting
                  </Link>
                </h4>
                <p>
                  With an impressive track record spanning over two decades, and
                  bolstered by a dynamic team of twelve plus accomplished
                  professionals, our organization excels in delivering
                  comprehensive and strategic IT consultancy services.{" "}
                </p>

                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* About Area start */}
      <section className="about-area-four pt-25 rpt-0 rel z-2">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image src={illustration} alt="illustration" />
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span className="sub-title mb-15">About Company</span>
                  <h3>
                    Exceptional Talent, Competitive Pricing, Incredible IT
                    Service
                  </h3>
                  <span className="bg-text">About</span>
                </div>
                <Tab.Container defaultActiveKey={"about-tap1"}>
                  <Nav as={"ul"} className="nav nav-pills nav-fill mb-35">
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap1"
                        eventKey="about-tap1"
                      >
                        Introduction
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap2"
                        eventKey="about-tap2"
                      >
                        Unmatched Expertise
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap3"
                        eventKey="about-tap3"
                      >
                        Tailored Global Solutions
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap1">
                      <p>
                        Welcome to PetaFyve, a global leader in providing
                        cutting-edge Digital solutions. With a strong presence
                        in international markets, we have built a reputation for
                        excellence and innovation. Our mission is to empower
                        businesses worldwide with transformative Digital Service
                        services to achieve their strategic goals.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap2">
                      <p>
                        At PetaFyve, we pride ourselves on our unrivaled
                        expertise in the IT industry. Our team consists of
                        highly skilled professionals who possess a deep
                        understanding of global market dynamics and
                        technological advancements. With a proven track record
                        of success, we have helped businesses across diverse
                        industries navigate complex challenges and achieve
                        remarkable outcomes.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap3">
                      <p>
                        We recognize that every business is unique and requires
                        tailored solutions to thrive in the international
                        market. At PetaFyve, we go above and beyond to
                        understand your specific requirements, market dynamics,
                        and cultural nuances. Leveraging our extensive
                        experience and global insights, we develop comprehensive
                        strategies and implement scalable solutions that drive
                        sustainable growth, enhance operational efficiency, and
                        mitigate risks in the international landscape.
                        <br />
                        Partner with PetaFyve to unlock your global potential,
                        gain a competitive edge, and expand your business
                        horizons. Our unwavering commitment to excellence and
                        customer satisfaction ensures that we deliver results
                        that exceed expectations in the dynamic international
                        market.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Five Start */}
      <section className="services-area-five pt-65 rpt-35 pb-130 rpb-100 rel z-2">
        <div className="container-fluid">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services</h2>
            <span className="bg-text">Service</span>
          </div>
          <Slider {...servicesFiveActive} className="services-five-active">
            {[
              {
                title: "Infrastructure Automation",
                description:
                  "Use Infrastructure as Code to build and deploy your hardware, cloud or hybrid environment. Build minimal-touch deployment processes integrated with full security measures.",
                imageUrl: "assets/images/services/service-five1.jpg",
                icon: InfraStructureAutomation,
              },
              {
                title: "Design & Deploy of your OpenShift Environment",
                description:
                  "From PoC to production HA multi-cluster across hybrid environments with management and security. Including platform migrations and related training to ensure smooth transition.",
                imageUrl: "assets/images/services/service-five2.jpg",
                icon: DesignDeploy,
              },
              {
                title: "Legacy Migration to Cloud-ready",
                description:
                  "Delivering successful migration of business-critical legacy applications to suit your business needs. Optimization of current applications to hypervisor or cloud environments.",
                imageUrl: "assets/images/services/service-five3.jpg",
                icon: Migration,
              },
              {
                title: "Application Development & microservice architecture",
                description:
                  "Design and build applications for today and the future using Cloud-ready/Native frameworks. Full lifecycle management through advanced CICD pipeline automation.",
                imageUrl: "assets/images/services/features-bg.jpg",
                icon: ApplicationDev,
              },
              {
                title: "Operational OpenShift Managed Services",
                description:
                  "Dedicated engineers working 24/7/365 across Europe and the US to manage your unique environment including OnPrem, Cloud or Hybrid covering Infrastructure, Kubernetes platform and applications tier.",
                imageUrl: "assets/images/services/cunsultancy.jpg",
                icon: ManagedServices,
              },
              {
                title: "Consultancy",
                description:
                  "Our modernization assessment is designed to examine your current infrastructure, automation, platform or applications and determine their suitability to your business needs and recommended.",
                imageUrl: "assets/images/services/managed-service.jpg",
                icon: Consultancy,
              },
            ].map(({ title, description, imageUrl, icon }, ind) => (
              <div
                key={ind}
                className="service-item-five wow fadeInUp delay-0-2s"
              >
                <img src={imageUrl} alt="Services" />
                <div className="content">
                  <div className="icon-title">
                    <div className="icon">
                      <Image src={icon} alt="" />
                    </div>
                    <h4 className="text-white">{title}</h4>
                  </div>
                  <div className="bottom-part">
                    <p>{description}</p>
                  </div>
                </div>
                <span className="bg-text">Service</span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Services Area Five End */}
      {/* Skills Area start */}
      <section className="skills-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="skills-content mt-60 mb-70 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="section-title mb-55">
                      <span className="sub-title mb-15">
                        Skills &amp; Experience
                      </span>
                      <h2>Small Enough to Care Big Enough to Success</h2>
                      <span className="bg-text">Skills</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-secondary text-white">
                      <div className="progress-content one">
                        <ProgressBar
                          value={97}
                          color="#ffff"
                          emptyFill={"#3d404c"}
                        />
                      </div>
                      <h4>Red Hat Consultancy</h4>
                      <p>
                        Unlock the full potential of your business with RedHat
                        Consultancy - Empowering you with innovative open-source
                        solutions and expert guidance.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-black text-white">
                      <div className="progress-content two">
                        <ProgressBar
                          value={89}
                          color="#ffff"
                          emptyFill={"#3d404c"}
                        />
                      </div>
                      <h4>Cloud & DevOps</h4>
                      <p>
                        Accelerate your digital transformation with Cloud and
                        DevOps solutions - Streamline operations, enhance
                        scalability, and maximize efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bg-white">
                      <div className="progress-content three">
                        <ProgressBar
                          value={83}
                          color="#cf2027"
                          emptyFill={"#e8e4fd"}
                        />
                      </div>
                      <h4>Cyber Security</h4>
                      <p>
                        Protect your digital assets with cutting-edge Cyber
                        Security solutions - Safeguarding your business against
                        evolving threats and ensuring peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="skills-bg"
          style={{
            backgroundImage: "url(assets/images/background/counter-bg.jpg)",
          }}
        />
      </section>
      {/* Skills Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area-two pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
          <span className="bg-text">Process</span>
        </div>
        <div className="work-process-line-two text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row gap-50 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-40 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process1.jpg"
                    alt="Work Process"
                  />
                  <div className="number">01</div>
                </div>
                <div className="content">
                  <h5>Discovery</h5>
                  <p>
                    Uncovering the essence of your business, we delve deep into
                    your objectives, challenges, and technology landscape,
                    conducting thorough assessments to identify improvement
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process2.jpg"
                    alt="Work Process"
                  />
                  <div className="number">02</div>
                </div>
                <div className="content">
                  <h5>Strategy</h5>
                  <p>
                    Unlocking your business potential, we create a customized IT
                    strategy aligned with your goals, collaborating closely to
                    outline a roadmap for optimal results and sustainable
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-20 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process3.jpg"
                    alt="Work Process"
                  />
                  <div className="number">03</div>
                </div>
                <div className="content">
                  <h5>Implementation</h5>
                  <p>
                    Efficiently executing the defined strategy, our meticulous
                    team leverages technical expertise and industry best
                    practices to ensure smooth implementation, seamless
                    transitions, and optimal resource utilization for minimal
                    disruptions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process4.jpg"
                    alt="Work Process"
                  />
                  <div className="number">04</div>
                </div>
                <div className="content">
                  <h5>Optimization</h5>
                  <p>
                    Continuously evolving, we proactively monitor, evaluate, and
                    optimize the implemented solutions to ensure your IT
                    infrastructure remains agile, scalable, and future-proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Project Area Four Start */}

      {/* Project Area Four End */}
      {/* Pricing Plan Area start */}

      {/* Pricing Plan Area end */}
      {/* Testimonial Area Four start */}
      <section className="testimonials-area-four rel z-1 mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 ms-lg-auto">
              <div className="testimonials-four-content py-65 rpt-0 rpb-35">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>What Our Client&apos;s Say About Our Company</h2>
                  <span className="bg-text">Says</span>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Professionalism and Dedication</h4>
                    </div>
                    <div className="testi-text">
                      We cannot speak highly enough of the professionalism and
                      dedication of PetaFyve. Their training programs have
                      upskilled our teams, empowering them with the knowledge
                      and skills needed to effectively leverage RedHat
                      technologies. It has been a transformative experience.
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Alex Rodriguez</h4>
                        <span className="designation">Head of IT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Protection</h4>
                    </div>
                    <div className="testi-text">
                      Their security and compliance services have been
                      instrumental in safeguarding our critical assets. With
                      PetaFyve's thorough assessments, robust security measures,
                      and proactive monitoring, we have achieved a heightened
                      level of protection against cyber threats.
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>David J.Malon</h4>
                        <span className="designation">IT Manager, Global</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author4.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Great consultancy</h4>
                    </div>
                    <div className="testi-text">
                      We engaged PetaFyve for their DevOps consultancy, and it
                      was a game-changer for our development process. Their
                      team's expertise in automation, continuous integration,
                      and deployment practices revolutionized our software
                      delivery, enabling faster time to market and higher
                      quality products.
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Mark Johnson</h4>
                        <span className="designation">
                          VP of Engineering, Acme Software Solutions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial-four-image"
          style={{
            backgroundImage:
              "url(assets/images/testimonials/testimonial-four.jpg)",
          }}
        />
      </section>
      {/* Testimonial Area Three end */}
      {/* Partners Area start */}
      <section className="partners-area-two bgc-gray-light pt-80 pb-50 mb-120 rel z-1">
        <div className="container">
          {" "}
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <h2 className="text-primary-cstm mb-15">Technology Partners</h2>
            <h5>
              PetaFyve collaborates seamlessly with all renowned cloud service
              providers.
            </h5>
            <span className="bg-text">Partners</span>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            {[
              {
                icon: RedHat,
                title: "Red Hat",
                href: "/",
              },
              {
                icon: AWS,
                title: "AWS",
                href: "/",
              },
              {
                icon: MicroSoft,
                title: "Microsoft",
                href: "/",
              },
              {
                icon: GoogleCloud,
                title: "Google Cloud",
                href: "/",
              },
              {
                icon: Oracle,
                title: "Oracle",
                href: "/",
              },
            ].map(({ title, icon, href }, ind) => (
              <div className="col" key={ind}>
                <Link legacyBehavior href={`/${href}`}>
                  <a className="partner-item wow fadeInUp delay-0-3s">
                    <Image src={icon} />
                    <h4>{title}</h4>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="partners-shapes">
          <img
            className="left-shape"
            src="assets/images/partners/partner-shape-left.png"
            alt="Shape"
          />
          <img
            className="right-shape"
            src="assets/images/partners/partner-shape-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Partners Area end */}
      {/* Blog Area Four start */}
    </Layout>
  );
};
export default Index4;
