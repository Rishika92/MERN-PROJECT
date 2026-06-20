import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { key: 'products', label: 'Products' },
  { key: 'customers', label: 'Customers' },
  { key: 'orders', label: 'Orders' },
]

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">E-Commerce Admin</h1>
          <p className="mt-3 text-slate-600">
           
          </p>
        </header>

        <nav className="mb-8 flex flex-wrap gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={`/${item.key}`}
              className={({ isActive }) =>
                `rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Outlet />
      </div>
    </div>
  )
}

export default Layout
