import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function BlogIndexPage() {
  return (
    <section className="bg-body">
      <div className="equbal-page-hero text-white py-5 mb-0">
        <div className="container py-2">
          <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
            Insights
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">Blog</h1>
          <p className="lead text-white-50 mb-0" style={{ maxWidth: "36rem" }}>
            Practical notes from our workshop, field teams, and events crew —
            not marketing fluff.
          </p>
        </div>
      </div>
      <div className="container pb-5 pt-4">
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="text-decoration-none text-reset d-block h-100"
              >
                <article className="card h-100 border-0 shadow-sm equbal-blog-card overflow-hidden">
                  <div className="ratio ratio-16x9 bg-light">
                    <img
                      src={post.imagePath}
                      alt=""
                      className="object-fit-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge bg-primary bg-opacity-10 text-primary align-self-start mb-2">
                      {post.tag}
                    </span>
                    <h2 className="h5 card-title fw-bold text-dark">
                      {post.title}
                    </h2>
                    <p className="card-text text-secondary small flex-grow-1">
                      {post.excerpt}
                    </p>
                    <span className="text-primary small fw-semibold">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogIndexPage;
