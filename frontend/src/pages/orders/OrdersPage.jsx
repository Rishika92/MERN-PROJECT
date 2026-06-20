import ResourcePage from '../../components/ResourcePage'
import { orderResource, ordersInitialForm } from '../../resources/orders'

const OrdersPage = () => {
  return <ResourcePage resource={orderResource} initialForm={ordersInitialForm} />
}

export default OrdersPage
