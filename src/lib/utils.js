import { site } from '../data/siteConfig'

export const waNumber = () => {
  let n = site.whatsapp.replace(/\D/g, '')
  if (n.startsWith('0')) n = '92' + n.slice(1)
  return n
}
export const waLink = (text) =>
  `https://wa.me/${waNumber()}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const telLink = () => `tel:+${waNumber()}`
export const money = (n) => 'Rs. ' + Number(n).toLocaleString('en-US')
export const cn = (...a) => a.filter(Boolean).join(' ')
export const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
