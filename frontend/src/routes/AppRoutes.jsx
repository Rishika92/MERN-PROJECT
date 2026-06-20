import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import ProductsPage from '../pages/products/ProductsPage'
import CustomersPage from '../pages/customers/CustomersPage'
import OrdersPage from '../pages/orders/OrdersPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
