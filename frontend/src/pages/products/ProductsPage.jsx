import ResourcePage from '../../components/ResourcePage'
import { productResource, productsInitialForm } from '../../resources/products'

const ProductsPage = () => {
  return <ResourcePage resource={productResource} initialForm={productsInitialForm} />
}

export default ProductsPage
