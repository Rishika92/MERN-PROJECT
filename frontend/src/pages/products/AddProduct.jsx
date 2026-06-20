import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import ResourceForm from '../../components/ResourceForm'
import { productResource, productsInitialForm } from '../../resources/products'

const AddProduct = () => {
  const [formValues, setFormValues] = useState(productsInitialForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      await api.post(productResource.endpoint, {
        ...formValues,
        price: Number(formValues.price),
      })
      navigate('/products')
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to save product')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Add Product</h1>
        <p className="mt-2 text-slate-600">Enter product details and save to the catalog.</p>
      </div>
      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <ResourceForm
        title={productResource.title}
        fields={productResource.fields}
        values={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        saving={saving}
      />
    </div>
  )
}

export default AddProduct
