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
  {
    id: 1,
    user: 'John Doe',
    action: 'purchased',
    target: 'Neo-Brutalism UI Kit',
    time: '2 mins ago',
    type: 'purchase',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'subscribed to',
    target: 'Pro Plan',
    time: '15 mins ago',
    type: 'subscription',
  },
  {
    id: 3,
    user: 'System',
    action: 'deployed',
    target: 'v1.4.2 update',
    time: '1 hour ago',
    type: 'system',
  },
  {
    id: 4,
    user: 'Alex Kim',
    action: 'refunded',
    target: 'Vintage Poster Set',
    time: '3 hours ago',
    type: 'refund',
  },
  {
    id: 5,
    user: 'Sarah Lee',
    action: 'commented on',
    target: 'Q3 Report',
    time: '5 hours ago',
    type: 'comment',
  },
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
    },
  ],
}

export const products = [
  {
    id: 'PRD-001',
    name: 'Neo-Brutalism UI Kit',
    category: 'Design',
    price: '$49.00',
    stock: 120,
    status: 'Active',
  },
  {
    id: 'PRD-002',
    name: 'Vintage Poster Set',
    category: 'Print',
    price: '$24.00',
    stock: 15,
    status: 'Low Stock',
  },
  {
    id: 'PRD-003',
    name: 'Retro Typeface',
    category: 'Typography',
    price: '$29.00',
    stock: 450,
    status: 'Active',
  },
  {
    id: 'PRD-004',
    name: 'Dark Mode Theme',
    category: 'Design',
    price: '$19.00',
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: 'PRD-005',
    name: 'Abstract Icons',
    category: 'Design',
    price: '$15.00',
    stock: 200,
    status: 'Active',
  },
  {
    id: 'PRD-006',
    name: 'Minimalist Wireframes',
    category: 'Design',
    price: '$39.00',
    stock: 85,
    status: 'Active',
  },
  {
    id: 'PRD-007',
    name: '3D Shapes Pack',
    category: 'Assets',
    price: '$44.00',
    stock: 42,
    status: 'Active',
  },
  {
    id: 'PRD-008',
    name: 'Gradient Backgrounds',
    category: 'Assets',
    price: '$12.00',
    stock: 5,
    status: 'Low Stock',
  },
  {
    id: 'PRD-009',
    name: 'Brutalism Web Template',
    category: 'Code',
    price: '$59.00',
    stock: 0,
    status: 'Draft',
  },
  {
    id: 'PRD-010',
    name: 'Cyberpunk Font',
    category: 'Typography',
    price: '$25.00',
    stock: 320,
    status: 'Active',
  },
]

export const ordersData = [
  { id: 'ORD-1001', customer: 'John Doe', total: '$145.00', items: 3, date: '2026-08-10', status: 'Pending' },
  { id: 'ORD-1002', customer: 'Jane Smith', total: '$89.00', items: 1, date: '2026-08-11', status: 'Processing' },
  { id: 'ORD-1003', customer: 'Alex Kim', total: '$210.50', items: 5, date: '2026-08-09', status: 'Shipped' },
  { id: 'ORD-1004', customer: 'Sarah Lee', total: '$45.00', items: 2, date: '2026-08-05', status: 'Delivered' },
  { id: 'ORD-1005', customer: 'Michael Chen', total: '$320.00', items: 4, date: '2026-08-12', status: 'Pending' },
  { id: 'ORD-1006', customer: 'Emily Wang', total: '$65.00', items: 1, date: '2026-08-11', status: 'Processing' },
  { id: 'ORD-1007', customer: 'David Brown', total: '$120.00', items: 2, date: '2026-08-08', status: 'Shipped' },
  { id: 'ORD-1008', customer: 'Lisa Taylor', total: '$95.00', items: 3, date: '2026-08-07', status: 'Delivered' },
  { id: 'ORD-1009', customer: 'Robert Garcia', total: '$450.00', items: 8, date: '2026-08-12', status: 'Pending' },
  { id: 'ORD-1010', customer: 'Amanda Martinez', total: '$29.99', items: 1, date: '2026-08-10', status: 'Delivered' },
  { id: 'ORD-1011', customer: 'William Davis', total: '$199.50', items: 4, date: '2026-08-11', status: 'Shipped' },
  { id: 'ORD-1012', customer: 'Sophia Rodriguez', total: '$75.25', items: 2, date: '2026-08-09', status: 'Processing' },
]

export const customersData = [
  { id: 'CUST-001', name: 'John Doe', email: 'john.doe@example.com', orders: 12, spent: 1450.00, joinDate: '2025-01-15', status: 'VIP' },
  { id: 'CUST-002', name: 'Jane Smith', email: 'jane.smith@example.com', orders: 4, spent: 345.50, joinDate: '2025-06-22', status: 'Active' },
  { id: 'CUST-003', name: 'Alex Kim', email: 'alex.kim@example.com', orders: 1, spent: 89.00, joinDate: '2026-08-01', status: 'New' },
  { id: 'CUST-004', name: 'Sarah Lee', email: 'sarah.lee@example.com', orders: 8, spent: 920.00, joinDate: '2025-11-11', status: 'Active' },
  { id: 'CUST-005', name: 'Michael Chen', email: 'michael.chen@example.com', orders: 24, spent: 3200.00, joinDate: '2024-03-05', status: 'VIP' },
  { id: 'CUST-006', name: 'Emily Wang', email: 'emily.wang@example.com', orders: 0, spent: 0, joinDate: '2026-08-10', status: 'Inactive' },
  { id: 'CUST-007', name: 'Robert Garcia', email: 'robert.g@example.com', orders: 15, spent: 2100.50, joinDate: '2024-08-19', status: 'VIP' },
  { id: 'CUST-008', name: 'Amanda Martinez', email: 'amanda.m@example.com', orders: 2, spent: 120.99, joinDate: '2026-05-14', status: 'Active' },
  { id: 'CUST-009', name: 'William Davis', email: 'will.davis@example.com', orders: 6, spent: 650.00, joinDate: '2025-09-03', status: 'Active' },
  { id: 'CUST-010', name: 'Sophia Rodriguez', email: 'sophia.r@example.com', orders: 1, spent: 75.25, joinDate: '2026-08-09', status: 'New' },
]

export const couponsData = [
  { id: 'CPN-001', code: 'NEO2026', type: 'Percentage', value: 20, minPurchase: '$50.00', usage: '145 / 500', expiry: '2026-12-31', status: 'Active' },
  { id: 'CPN-002', code: 'WELCOME10', type: 'Fixed Amount', value: 10, minPurchase: '$0.00', usage: '89 / ∞', expiry: 'No Expiry', status: 'Active' },
  { id: 'CPN-003', code: 'SUMMERFLASH', type: 'Percentage', value: 50, minPurchase: '$100.00', usage: '200 / 200', expiry: '2026-07-31', status: 'Expired' },
  { id: 'CPN-004', code: 'BLACKFRIDAY', type: 'Fixed Amount', value: 30, minPurchase: '$150.00', usage: '0 / 1000', expiry: '2026-11-25', status: 'Scheduled' },
  { id: 'CPN-005', code: 'VIPONLY', type: 'Percentage', value: 25, minPurchase: '$200.00', usage: '42 / 100', expiry: '2027-01-01', status: 'Active' },
  { id: 'CPN-006', code: 'FREESHIP', type: 'Fixed Amount', value: 15, minPurchase: '$30.00', usage: '892 / ∞', expiry: '2026-12-31', status: 'Active' },
]

export const flashSalesData = [
  { 
    id: 'FS-001', 
    name: 'Neo Summer Clearance', 
    products: 12, 
    status: 'Active',
    // Mock an end time that is slightly in the future to show live countdown
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 5 + 1000 * 60 * 30).toISOString(), // ~5h 30m from now
    startTime: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // started 1h ago
  },
  { 
    id: 'FS-002', 
    name: 'Black Friday Super Drops', 
    products: 50, 
    status: 'Upcoming',
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 + 1000 * 60 * 60 * 12).toISOString(), // ~30.5 days
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(), 
  },
  { 
    id: 'FS-003', 
    name: 'Weekend Flash Deals', 
    products: 5, 
    status: 'Past',
    endTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), 
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), 
  },
]
