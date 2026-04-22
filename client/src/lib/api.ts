import type { ShoppingItem } from "@/types/shoppingItem"

const base =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") ||
  "http://localhost:3000"

async function handle(res: Response): Promise<void> {
  if (res.ok) return
  let msg = res.statusText
  try {
    const j = (await res.json()) as { error?: string; message?: string }
    if (typeof j?.error === "string") msg = j.error
    else if (typeof j?.message === "string") msg = j.message
  } catch {
    /* ignore */
  }
  throw new Error(msg || `HTTP ${res.status}`)
}

export async function getItems(): Promise<ShoppingItem[]> {
  const res = await fetch(`${base}/items`)
  await handle(res)
  return res.json() as Promise<ShoppingItem[]>
}

export async function createItem(name: string): Promise<ShoppingItem> {
  const res = await fetch(`${base}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  await handle(res)
  return res.json() as Promise<ShoppingItem>
}

export async function updateItemBought(
  id: string,
  bought: boolean
): Promise<ShoppingItem> {
  const res = await fetch(`${base}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bought }),
  })
  await handle(res)
  return res.json() as Promise<ShoppingItem>
}

export async function deleteItem(id: string): Promise<void> {
  const res = await fetch(`${base}/items/${id}`, { method: "DELETE" })
  if (res.status === 204) return
  await handle(res)
}
