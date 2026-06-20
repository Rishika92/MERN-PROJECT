import ResourcePage from '../../components/ResourcePage'
import { customerResource, customersInitialForm } from '../../resources/customers'

const CustomersPage = () => {
  return <ResourcePage resource={customerResource} initialForm={customersInitialForm} />
}

export default CustomersPage
