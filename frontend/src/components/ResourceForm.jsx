const ResourceForm = ({ fields, values, onChange, onSubmit, saving, title }) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-slate-900">Create {title.slice(0, -1)}</h2>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-slate-700">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={values[field.name]}
                onChange={onChange}
                rows="3"
                className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={values[field.name]}
                onChange={onChange}
                className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {saving ? 'Saving...' : `Create ${title.slice(0, -1)}`}
        </button>
      </form>
    </section>
  )
}

export default ResourceForm
