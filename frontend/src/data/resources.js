export const resources = {
  products: {
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
  },
  customers: {
    title: 'Customers',
    endpoint: '/api/customers',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'address', label: 'Address', type: 'textarea' },
    ],
    columns: ['Name', 'Email', 'Phone'],
    renderRow: (item) => [item.name, item.email || '—', item.phone || '—'],
  },
  orders: {
    title: 'Orders',
    endpoint: '/api/orders',
    fields: [
      { name: 'customerName', label: 'Customer Name', type: 'text', required: true },
      { name: 'productName', label: 'Product Name', type: 'text', required: true },
      { name: 'quantity', label: 'Quantity', type: 'number', required: true },
      { name: 'status', label: 'Status', type: 'text' },
    ],
    columns: ['Customer', 'Product', 'Quantity'],
    renderRow: (item) => [item.customerName, item.productName, item.quantity ?? 0],
  },
}

export const initialForms = {
  products: { name: '', description: '', category: '', price: '' },
  customers: { name: '', email: '', phone: '', address: '' },
  orders: { customerName: '', productName: '', quantity: '', status: '' },
}
