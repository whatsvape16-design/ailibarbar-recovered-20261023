export type Order = {
  orderNumber: string;
  createdAt?: string;
  date?: string;
  lines: { slug?: string; name: string; qty: number; price: number }[];
  billing: { firstName?: string; lastName?: string; email: string; phone?: string; street?: string; suburb?: string; state?: string; postcode?: string };
  subtotal?: number;
  shipping?: number;
  total: number;
  paymentStatus?: string;
  fulfillmentStatus?: string;
  trackingNumber?: string;
  carrier?: string;
  adminNote?: string;
  paymentReceipt?: string;
  paymentReceiptName?: string;
  paymentMethod?: string;
};
export type Product = { slug: string; name: string; sku: string; price: number; stock: number | null; active: boolean; description?: string; image?: string };
export type Review = { id: string; name?: string; author?: string; title?: string; body?: string; rating?: number; slug?: string; status: string; createdAt?: string };
export type Lead = { id: string; status?: string; orderNumber?: string; updatedAt?: string; contact?: { firstName?: string; lastName?: string; email?: string; phone?: string }; subtotal?: number };
export type Customer = { id: string; email: string; displayName?: string; phone?: string; createdAt?: string };
export type Coupon = { code: string; amount: number; minDevices: number; active: boolean; expiresAt?: string | null };
export type Article = { id: string; title: string; content: string; updatedAt: string };
export type Message = { id: string; to: string; subject: string; text: string; orderNumber?: string; status: string; createdAt: string };
export type Summary = { orders: number; revenue: number; pending: number; unshipped: number; customers: number; leads: number; reviews: number };

export function storedKey() { return sessionStorage.getItem('local-admin-key') || localStorage.getItem('local-admin-key') || ''; }
export function setKey(key: string, remember: boolean) {
  sessionStorage.removeItem('local-admin-key'); localStorage.removeItem('local-admin-key');
  (remember ? localStorage : sessionStorage).setItem('local-admin-key', key);
}
export function clearKey() { sessionStorage.removeItem('local-admin-key'); localStorage.removeItem('local-admin-key'); }

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (storedKey()) headers.set('Authorization', `Bearer ${storedKey()}`);
  if (options.body && !(options.body instanceof FormData)) headers.set('Content-Type', 'application/json');
  const response = await fetch(path, { ...options, headers, cache: 'no-store' });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `请求失败（${response.status}）`);
  return data as T;
}
export const post = <T>(path: string, data: unknown) => api<T>(path, { method: 'POST', body: JSON.stringify(data) });
export const patch = <T>(path: string, data: unknown) => api<T>(path, { method: 'PATCH', body: JSON.stringify(data) });
export const remove = <T>(path: string) => api<T>(path, { method: 'DELETE' });
