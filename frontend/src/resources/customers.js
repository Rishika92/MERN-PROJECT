export const customerResource = {
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
}

export const customersInitialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
}
