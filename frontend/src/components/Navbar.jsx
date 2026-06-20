import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/products', label: 'Products' },
  { to: '/orders', label: 'Orders' },
  { to: '/users', label: 'Users' },
]

const Navbar = () => {
  return (
    <nav className="mb-8 flex flex-wrap gap-3">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
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
  )
}

export default Navbar
