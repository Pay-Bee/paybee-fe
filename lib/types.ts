// Shared types (previously imported from the "shared" package)

export type Platform = "Windows" | "Xbox" | "PS" | "MacOS" | "Linux";

export type OrderStatus = "PENDING" | "CONFIRM" | "CANCELED" | "DONE";

export interface UserProfile {
  id: number;
  name: string | null;
  email: string;
  avatar: string | null;
  registration_type: "EMAIL" | "GOOGLE";
}

export interface CartItem {
  game_id: number;
  slug: string;
  title: string;
  cover_img_url: string | null;
  price_lkr: number;
  discount_percent: number;
  short_description?: string | null;
}

export interface GameListItem {
  id: number;
  slug: string;
  title: string;
  cover_img_url: string | null;
  price_lkr: number;
  discount_percent: number;
}

export interface Game {
  id: number;
  slug: string;
  title: string;
  cover_img_url: string | null;
  price_lkr: number;
  price_usd: number;
  fx_rate_used: number;
  discount_percent: number;
  short_description?: string | null;
  long_description?: string | null;
  developer?: string | null;
  publisher?: string | null;
  release_date?: string | null;
  genres?: string[];
  features?: string[];
  platforms?: Platform[];
  steam_app_id?: number | null;
  trailer_video_url?: string | null;
  screenshots?: string[];
}

export interface OrderItem {
  id: number;
  title: string;
  cover_img_url: string | null;
  price_lkr: number;
}

export interface Order {
  id: number;
  status: OrderStatus;
  created_at: string;
  items?: OrderItem[];
}

export interface OrdersListResponse {
  orders: Order[];
  total: number;
}

export const BOOKING_FEE_LKR = 500;
