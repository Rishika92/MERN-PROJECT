import { useEffect, useState } from 'react'
import ResourceForm from './ResourceForm'
import ResourceTable from './ResourceTable'

const ResourcePage = ({ resource, initialForm }) => {
  const [records, setRecords] = useState([])
  const [formValues, setFormValues] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setFormValues(initialForm)
    fetchRecords()
  }, [resource, initialForm])

  const fetchRecords = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(resource.endpoint)
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to load data')
      setRecords(result.data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')

    const payload = { ...formValues }
    if (resource.endpoint.includes('/products')) {
      payload.price = Number(payload.price)
    }
    if (resource.endpoint.includes('/orders')) {
      payload.quantity = Number(payload.quantity)
    }

    const missingField = resource.fields.find(
      (field) => field.required && !payload[field.name]
    )
    if (missingField) {
      setError(`Please enter ${missingField.label.toLowerCase()}.`)
      setSaving(false)
      return
    }

    try {
      const response = await fetch(resource.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to save record')
      setFormValues(initialForm)
      fetchRecords()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    setSaving(true)
    setError('')
    try {
      const response = await fetch(`${resource.endpoint}/${id}`, {
        method: 'DELETE',
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to delete record')
      fetchRecords()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
      <ResourceForm
        title={resource.title}
        fields={resource.fields}
        values={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        saving={saving}
      />
      <ResourceTable
        title={resource.title}
        columns={resource.columns}
        data={records}
        loading={loading}
        error={error}
        onRefresh={fetchRecords}
        onDelete={handleDelete}
        renderRow={resource.renderRow}
      />
    </div>
  )
}

export default ResourcePage
