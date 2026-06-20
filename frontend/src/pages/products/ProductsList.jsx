import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import { productResource } from '../../resources/products'

const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await api.get(productResource.endpoint)
      setProducts(response.data.data || [])
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to load products')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return
    try {
      await api.delete(`${productResource.endpoint}/${id}`)
      fetchProducts()
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to delete product')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Products</h1>
          <p className="mt-2 text-slate-600">Create, edit, and manage your product catalog.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/products/add')}
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Add Product
        </button>
      </div>

      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              {productResource.columns.map((column) => (
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
                <td colSpan={productResource.columns.length + 1} className="px-4 py-6 text-center text-sm text-slate-500">
                  Loading products...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={productResource.columns.length + 1} className="px-4 py-6 text-center text-sm text-slate-500">
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id}>
                  <td className="px-4 py-4 text-sm text-slate-900">{product.name}</td>
                  <td className="px-4 py-4 text-sm text-slate-900">{product.category || '—'}</td>
                  <td className="px-4 py-4 text-sm text-slate-900">${Number(product.price || 0).toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 space-x-2">
                    <button
                      type="button"
                      onClick={() => navigate(`/products/edit/${product._id}`)}
                      className="rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
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
    </div>
  )
}

export default ProductsList
