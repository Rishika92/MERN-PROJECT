export const orderResource = {
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
}

export const ordersInitialForm = {
  customerName: '',
  productName: '',
  quantity: '',
  status: '',
}
