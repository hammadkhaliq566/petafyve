import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { services } from "@/public/data/services";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceDetails = () => {
  const router = useRouter();

  const postContent = services.filter(
    (post) => post.slug == router.query.slug
  )[0];

  return (
    <Layout>
      <PageBanner pageName={"Service Details"} pageTitle={postContent?.title} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className=" prose prose-sm prose-h1:mb-8">
                {postContent && parse(postContent.content)}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    {services.map(({ title, slug }, ind) => (
                      <li key={ind}>
                        <Link
                          legacyBehavior
                          href={`/service-details?slug=${slug}`}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <span className="h5">Let's Work Together</span>
                  <h2>PetaFyve</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+971558742281" className="number">
                    <i className="fas fa-phone" /> +971 55 874 2281
                  </a>
                  <img
                    className="bg-shape"
                    src="assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Area end */}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { title: "My Title" } };
};
export default ServiceDetails;
