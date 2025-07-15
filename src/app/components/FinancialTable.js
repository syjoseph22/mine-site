


export default function FinancialTable() {
  const columns = ['2025', '2026', '2027', '2028'];

  const rows = [
    { label: 'Revenues', values: ['$26.9M', '$161.4M', '$275M', '$275M'] },
    { label: 'EBITDA', values: ['$13.2M', '$115.8M', '$208.9M', '$208.9M'], striped: false },
    { label: 'Gold Price / oz', values: ['$2,750', '$2,750', '$2,750', '$2,750'], striped: true },
    { label: 'Direct Mining Cost / oz', values: ['$352', '$187', '$155', '$155'], striped: false },
    { label: 'All Costs / oz', values: ['$1,045', '$590', '$506', '$506'], striped: true },
    { label: 'Net Profit / oz', values: ['$1,353', '$1,973', '$2,089', '$2,089'], striped: false },
    { label: 'Gold Produced (oz)', values: ['9,780', '58,679', '100,000', '100,000'], striped: true },
  ];

  return (
    <section className="bg-white text-[#0b1d2a] px-6 py-16">
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <h2 className="text-3xl font-bold mb-8">Financial Projections (2025–2028)</h2>
        <table className="min-w-full text-left border border-gray-300 rounded-xl overflow-hidden">
          <TableHeaderRow columns={columns} />
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, idx) => (
              <TableRow key={idx} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


export function TableHeaderRow({ columns }) {
  return (
    <thead className="bg-[#d4af37] text-white">
      <tr>
        <th className="px-4 py-3"></th>
        {columns.map((col, idx) => (
          <th key={idx} className="px-4 py-3 font-semibold">{col}</th>
        ))}
      </tr>
    </thead>
  );
}

export function TableRow({ label, values = [], striped = false }) {
  return (
    <tr className={striped ? 'bg-gray-100' : ''}>
      <td className="px-4 py-2 font-medium">{label}</td>
      {values.map((val, idx) => (
        <td key={idx} className="px-4 py-2">{val}</td>
      ))}
    </tr>
  );
}
