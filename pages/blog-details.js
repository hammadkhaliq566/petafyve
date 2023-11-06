import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import parse from "html-react-parser";
import { blogPosts } from "@/public/data/blog";
import { services } from "@/public/data/services";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();

  const postContent = blogPosts.filter(
    (post) => post.slug == router.query.slug
  )[0];

  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} pageTitle={postContent?.title} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            {postContent && (
              <div className="prose prose-sm max-w-md">
                {parse(postContent.content)}
              </div>
            )}
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">More Blogs</h4>
                  <ul>
                    {blogPosts.map(({ title, slug }) => (
                      <li>
                        <Link
                          legacyBehavior
                          href={`/blog-details?slug=${slug}`}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
