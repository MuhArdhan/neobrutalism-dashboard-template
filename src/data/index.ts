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
