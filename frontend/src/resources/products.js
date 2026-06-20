export const productResource = {
  title: 'Products',
  endpoint: '/api/products',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'price', label: 'Price', type: 'number', required: true },
  ],
  columns: ['Name', 'Category', 'Price'],
  renderRow: (item) => [item.name, item.category || '—', `$${Number(item.price || 0).toFixed(2)}`],
}

export const productsInitialForm = {
  name: '',
  description: '',
  category: '',
  price: '',
}
