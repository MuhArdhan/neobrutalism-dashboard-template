export const dashboardMetrics = [
  {
    id: 'total_revenue',
    title: 'Total Revenue',
    value: '$45,231.89',
    trend: '+20.1%',
    isPositive: true,
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    value: '+2,350',
    trend: '+180.1%',
    isPositive: true,
  },
  {
    id: 'sales',
    title: 'Sales',
    value: '+12,234',
    trend: '+19%',
    isPositive: true,
  },
  {
    id: 'active_now',
    title: 'Active Now',
    value: '+573',
    trend: '-201',
    isPositive: false,
  },
]

export const topProducts = [
  { id: '1', name: 'Neo-Brutalism UI Kit', sales: 453, revenue: '$12,400', status: 'In Stock' },
  { id: '2', name: 'Vintage Poster Set', sales: 322, revenue: '$4,830', status: 'Low Stock' },
  { id: '3', name: 'Retro Typeface', sales: 289, revenue: '$3,100', status: 'In Stock' },
  { id: '4', name: 'Dark Mode Theme', sales: 190, revenue: '$1,900', status: 'Out of Stock' },
  { id: '5', name: 'Abstract Icons', sales: 154, revenue: '$1,200', status: 'In Stock' },
]

export const activityFeed = [
  { id: 1, user: 'John Doe', action: 'purchased', target: 'Neo-Brutalism UI Kit', time: '2 mins ago', type: 'purchase' },
  { id: 2, user: 'Jane Smith', action: 'subscribed to', target: 'Pro Plan', time: '15 mins ago', type: 'subscription' },
  { id: 3, user: 'System', action: 'deployed', target: 'v1.4.2 update', time: '1 hour ago', type: 'system' },
  { id: 4, user: 'Alex Kim', action: 'refunded', target: 'Vintage Poster Set', time: '3 hours ago', type: 'refund' },
  { id: 5, user: 'Sarah Lee', action: 'commented on', target: 'Q3 Report', time: '5 hours ago', type: 'comment' },
]

export const salesChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#fde047', // yellow-300 to match primary concept
      borderColor: '#000000',
      borderWidth: 3,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Expenses',
      backgroundColor: '#f87171', // red-400
      borderColor: '#000000',
      borderWidth: 3,
      data: [28, 48, 40, 19, 86, 27, 90],
    }
  ]
}

export const products = [
  { id: 'PRD-001', name: 'Neo-Brutalism UI Kit', category: 'Design', price: '$49.00', stock: 120, status: 'Active' },
  { id: 'PRD-002', name: 'Vintage Poster Set', category: 'Print', price: '$24.00', stock: 15, status: 'Low Stock' },
  { id: 'PRD-003', name: 'Retro Typeface', category: 'Typography', price: '$29.00', stock: 450, status: 'Active' },
  { id: 'PRD-004', name: 'Dark Mode Theme', category: 'Design', price: '$19.00', stock: 0, status: 'Out of Stock' },
  { id: 'PRD-005', name: 'Abstract Icons', category: 'Design', price: '$15.00', stock: 200, status: 'Active' },
  { id: 'PRD-006', name: 'Minimalist Wireframes', category: 'Design', price: '$39.00', stock: 85, status: 'Active' },
  { id: 'PRD-007', name: '3D Shapes Pack', category: 'Assets', price: '$44.00', stock: 42, status: 'Active' },
  { id: 'PRD-008', name: 'Gradient Backgrounds', category: 'Assets', price: '$12.00', stock: 5, status: 'Low Stock' },
  { id: 'PRD-009', name: 'Brutalism Web Template', category: 'Code', price: '$59.00', stock: 0, status: 'Draft' },
  { id: 'PRD-010', name: 'Cyberpunk Font', category: 'Typography', price: '$25.00', stock: 320, status: 'Active' },
]
