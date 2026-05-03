import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { equipmentCategories, equipmentItems } from "../data/equipment";

const PAGE_SIZES = [10, 25, 50, 100];

function EquipmentPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return equipmentItems.filter((item) => {
      const catOk = category === "All" || item.category === category;
      if (!catOk) return false;
      if (!q) return true;
      const blob =
        `${item.name} ${item.description} ${item.category}`.toLowerCase();
      return blob.includes(q);
    });
  }, [query, category]);

  const totalPages =
    filtered.length === 0
      ? 0
      : Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [query, category, pageSize]);

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const pageButtons = useMemo(() => {
    if (totalPages <= 0) return [];
    const maxBtn = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxBtn - 1);
    start = Math.max(1, end - maxBtn + 1);
    const arr = [];
    for (let i = start; i <= end; i += 1) arr.push(i);
    return arr;
  }, [page, totalPages]);

  return (
    <section className="py-5 bg-body">
      <div className="container py-2">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-10 text-center">
            <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
              Workshop &amp; field
            </p>
            <h1 className="display-6 fw-bold text-dark mb-3">
              Equipment we provide
            </h1>
            <p
              className="text-secondary mb-0 mx-auto equbal-readability-text"
              style={{ maxWidth: "44rem" }}
            >
              Catalogue below lists tools and assets we work with. If you need
              specific equipment for a job, site, or workshop, tell us scope and
              timeline — we can supply, mobilise, or source as part of the
              engagement.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary btn-sm rounded-pill px-4 fw-semibold mt-3"
            >
              Request equipment / quote
            </Link>
          </div>
        </div>

        <div className="card border-0 shadow-sm equbal-equipment-filters-card mt-4 mb-3">
          <div className="card-body p-3 p-md-4">
            <div className="row g-3 align-items-end">
              <div className="col-md-4 col-lg-3">
                <label
                  htmlFor="equipment-category"
                  className="form-label small fw-semibold mb-1"
                >
                  Category
                </label>
                <select
                  id="equipment-category"
                  className="form-select shadow-sm equbal-equipment-filter-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {equipmentCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 col-lg-3">
                <label
                  htmlFor="equipment-page-size"
                  className="form-label small fw-semibold mb-1"
                >
                  Rows per page
                </label>
                <select
                  id="equipment-page-size"
                  className="form-select shadow-sm equbal-equipment-filter-select"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {PAGE_SIZES.map((n) => (
                    <option key={n} value={n}>
                      {n} per page
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 col-lg-6">
                <label
                  htmlFor="equipment-search"
                  className="form-label small fw-semibold mb-1"
                >
                  Search catalogue
                </label>
                <input
                  id="equipment-search"
                  type="search"
                  className="form-control shadow-sm"
                  placeholder="Name, category, description…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3 equbal-equipment-toolbar">
          <p className="text-secondary small mb-0 equbal-readability-text">
            {filtered.length === 0 ? (
              <>No matches.</>
            ) : (
              <>
                Showing{" "}
                <strong>
                  {(page - 1) * pageSize + 1}–
                  {Math.min(page * pageSize, filtered.length)}
                </strong>{" "}
                of <strong>{filtered.length}</strong>
              </>
            )}
          </p>
        </div>

        <div className="table-responsive rounded-3 border bg-white shadow-sm equbal-equipment-table-wrap">
          <table className="table table-hover align-middle mb-0 equbal-equipment-table">
            <thead className="table-light">
              <tr>
                <th scope="col" style={{ width: "96px" }}>
                  Photo
                </th>
                <th scope="col">Name</th>
                <th scope="col" className="d-none d-md-table-cell">
                  Category
                </th>
                <th scope="col" className="d-none d-lg-table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button
                      type="button"
                      className="btn p-0 border-0 bg-transparent equbal-equipment-thumb"
                      onClick={() => setLightbox(item)}
                      aria-label={`Enlarge photo: ${item.name}`}
                    >
                      <img
                        src={item.imagePath}
                        alt=""
                        width={72}
                        height={54}
                        className="rounded-2 object-fit-cover d-block"
                        loading="lazy"
                      />
                    </button>
                  </td>
                  <td>
                    <span className="fw-semibold text-dark d-block">
                      {item.name}
                    </span>
                    <span className="small text-muted d-md-none">
                      {item.category}
                    </span>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      {item.category}
                    </span>
                  </td>
                  <td className="d-none d-lg-table-cell small text-secondary">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-5 text-secondary">
            <p className="mb-2">No equipment matches your filters.</p>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm rounded-pill"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : null}

        {totalPages > 1 ? (
          <nav
            className="mt-4 d-flex flex-wrap justify-content-center gap-2"
            aria-label="Equipment pagination"
          >
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            {pageButtons.map((n) => (
              <button
                key={n}
                type="button"
                className={`btn btn-sm rounded-pill px-3 ${
                  n === page ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </nav>
        ) : null}

        {lightbox ? (
          <div
            className="equbal-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="equbal-lightbox-title"
            onClick={() => setLightbox(null)}
          >
            <div
              className="equbal-lightbox-dialog rounded-4 overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-white border-bottom">
                <h2
                  id="equbal-lightbox-title"
                  className="h6 fw-bold mb-0 text-truncate pe-2"
                >
                  {lightbox.name}
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setLightbox(null)}
                />
              </div>
              <div className="bg-dark d-flex align-items-center justify-content-center p-2">
                <img
                  src={lightbox.imagePath}
                  alt=""
                  className="img-fluid object-fit-contain"
                  style={{ maxHeight: "min(78vh, 720px)" }}
                />
              </div>
              <div className="small text-secondary px-3 py-2 bg-white">
                <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                  {lightbox.category}
                </span>
                {lightbox.description}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default EquipmentPage;
