export function SpecTable({ rows, caption }: { rows: { label: string; value: string; note?: string }[]; caption?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-border">
      {caption && (
        <div className="bg-secondary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white">
          {caption}
        </div>
      )}
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-border bg-card">
          {rows.map((r) => (
            <tr key={r.label}>
              <th className="w-1/2 px-6 py-4 font-medium text-secondary">{r.label}</th>
              <td className="px-6 py-4">
                <span className="font-display text-lg text-primary-deep">{r.value}</span>
                {r.note && <span className="ml-2 text-xs text-muted-foreground">{r.note}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
