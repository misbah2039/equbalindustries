import { useCallback, useState } from "react";
import { companyDocuments } from "../data/companyDocuments";

function placeholderBlob(title) {
  const body = `${title}\n\nAdd the matching PDF under public/certs/ (see companyDocuments.js).\n`;
  return new Blob([body], { type: "text/plain;charset=utf-8" });
}

function CompanyDocumentsPage() {
  const [status, setStatus] = useState(null);

  const handleDownload = useCallback(async (doc) => {
    setStatus(null);
    try {
      const res = await fetch(doc.file, { method: "HEAD" });
      if (res.ok) {
        const a = document.createElement("a");
        a.href = doc.file;
        a.download = `${doc.id}.pdf`;
        a.rel = "noreferrer";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setStatus({ id: doc.id, ok: true, msg: "Download started." });
        return;
      }
    } catch {
      /* fall through to placeholder */
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(placeholderBlob(doc.title));
    a.download = `${doc.id}-placeholder.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus({
      id: doc.id,
      ok: false,
      msg: "PDF not on server yet — saved a text note instead. Add the file under public/certs/.",
    });
  }, []);

  return (
    <section className="py-5 bg-body">
      <div className="container py-2" style={{ maxWidth: "960px" }}>
        <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
          Admin only
        </p>
        <h1 className="display-6 fw-bold text-dark mb-2">Company documents</h1>
        <p className="text-secondary mb-2 equbal-readability-text">
          Download certificates and registrations for tenders and records. Drop
          real PDFs in <code className="user-select-all">public/certs/</code>{" "}
          (see <code>src/data/companyDocuments.js</code>).
        </p>
        {status ? (
          <p
            className={`small mb-4 ${status.ok ? "text-success" : "text-warning"}`}
            role="status"
          >
            {status.msg}
          </p>
        ) : null}
        <div className="row g-3">
          {companyDocuments.map((doc) => (
            <div className="col-md-6" key={doc.id}>
              <article className="card border-0 shadow-sm h-100 equbal-doc-card">
                <div className="card-body p-4">
                  <h2 className="h6 fw-bold text-dark mb-2">{doc.title}</h2>
                  <p className="small text-secondary mb-3 equbal-readability-text">
                    {doc.short}
                  </p>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                      onClick={() => handleDownload(doc)}
                    >
                      Download
                    </button>
                    <a
                      className="small fw-semibold"
                      href={doc.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in browser →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyDocumentsPage;
