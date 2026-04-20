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
    <section className="section expenditure-page">
      <div className="container">
        <div className="expenditure-toolbar no-print">
          <h2 className="page-title">Expenditure</h2>
          <button type="button" className="btn-print" onClick={handlePrint}>
            Print
          </button>
        </div>

        <div className="expenditure-print-header print-only">
          <h1>Equbal Industry and Car Services</h1>
          <p>Expenditure Statement</p>
        </div>

        <div className="expenditure-table-wrap">
          <table className="expenditure-table">
            <thead>
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
