import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { blogPosts } from "@/public/data/blog";
import Link from "next/link";
import parse from "html-react-parser";
import { services } from "@/public/data/services";

const Blog = () => {
  return (
    <Layout>
      <PageBanner pageName={"PetaFive's Blogs"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                {blogPosts.map(
                  ({ title, slug, category, content, description }, ind) => (
                    <div
                      className="blog-standard-item wow fadeInUp delay-0-2s"
                      key={ind}
                    >
                      <div className="image">
                        <img
                          src={`assets/images/blog/blog-standard${ind + 1}.jpg`}
                          alt="Blog"
                        />
                      </div>
                      <div className="content">
                        <div className="blog-meta-two mb-5">
                          <span className="tag hover:text-white transition-all">
                            {category}
                          </span>
                        </div>
                        <h4 className="line-clamp-1">
                          <Link
                            legacyBehavior
                            href={`blog-details?slug=${slug}`}
                          >
                            {title}
                          </Link>
                        </h4>

                        <p className="line-clamp-1">{description}</p>

                        <hr />
                        <Link
                          legacyBehavior
                          href={`/blog-details?slug=${slug}`}
                        >
                          <a className="read-more">
                            Read More <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    {services.map(({ title, slug }) => (
                      <li>
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

                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <h4>PetaFive - Expert IT Consultants</h4>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn bg-white">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <img src="assets/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="assets/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="assets/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
