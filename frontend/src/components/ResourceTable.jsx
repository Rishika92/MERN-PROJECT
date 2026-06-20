const ResourceTable = ({ title, columns, data, loading, onRefresh, onDelete, renderRow, error }) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-200"
        >
          Refresh
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="overflow-hidden rounded-3xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 text-sm font-semibold text-slate-700">
                  {column}
                </th>
              ))}
              <th className="px-4 py-3 text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {loading ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-6 text-center text-sm text-slate-500">
                  Loading {title.toLowerCase()}...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-6 text-center text-sm text-slate-500">
                  No {title.toLowerCase()} available.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  {renderRow(item).map((value, index) => (
                    <td key={index} className="px-4 py-4 text-sm text-slate-900">
                      {value}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-sm text-slate-600">
                    <button
                      type="button"
                      onClick={() => onDelete(item._id)}
                      className="rounded-2xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ResourceTable
