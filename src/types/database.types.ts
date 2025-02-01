export interface Restaurant {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  restaurant_id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  restaurant_id: string;
  customer_name: string;
  customer_phone?: string;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  total: number;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  notes?: string;
  created_at: string;
}