import { useMemo } from "react";
import { expenditureRows } from "../data/expenditure";

function ExpenditurePage() {
  const total = useMemo(
    () => expenditureRows.reduce((sum, row) => sum + row.amount, 0),
    []
  );

  function handlePrint() {
    window.print();
  }

  return (
    <section className="py-5 bg-body expenditure-page">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 no-print">
          <div>
            <h1 className="h2 fw-bold text-dark mb-0">Expenditure</h1>
            <p className="text-secondary small mb-0 mt-1">Internal statement</p>
          </div>
          <button
            type="button"
            className="btn btn-dark rounded-pill px-4"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>

        <div className="expenditure-print-header print-only">
          <h1>Equbal Industries &amp; Car Services</h1>
          <p>Expenditure Statement</p>
        </div>

        <div className="table-responsive shadow-sm rounded-3 border bg-white">
          <table className="table table-hover align-middle mb-0 expenditure-table">
            <thead className="table-light">
              <tr>
                <th>Sr No.</th>
                <th>Date</th>
                <th>Description</th>
                <th className="col-amount">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {expenditureRows.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.date}</td>
                  <td>{row.description}</td>
                  <td className="col-amount">{row.amount.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="expenditure-total-row">
                <td colSpan={3} className="total-label">
                  Total Amount
                </td>
                <td className="col-amount total-amount">
                  ₹ {total.toLocaleString("en-IN")}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ExpenditurePage;
