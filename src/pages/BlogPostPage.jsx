import { Link, Navigate, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../data/blogPosts";

function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="py-5 bg-body">
      <div className="container py-2" style={{ maxWidth: "720px" }}>
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className="breadcrumb-item active text-truncate"
              aria-current="page"
            >
              {post.title}
            </li>
          </ol>
        </nav>

        <header className="mb-4">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
            {post.tag}
          </span>
          <h1 className="display-6 fw-bold text-dark mb-3">{post.title}</h1>
          <div className="d-flex flex-wrap gap-3 text-secondary small">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm mb-5 bg-light">
          <img src={post.imagePath} alt="" className="object-fit-cover" />
        </div>

        <div className="article-body text-secondary lh-lg fs-6 d-grid gap-4">
          {post.paragraphs.map((p, i) => (
            <p key={i} className="mb-0">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-3 justify-content-between align-items-center">
          <Link
            to="/blog"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            ← All posts
          </Link>
          <Link to="/contact" className="btn btn-primary rounded-pill px-4">
            Talk to us
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogPostPage;
