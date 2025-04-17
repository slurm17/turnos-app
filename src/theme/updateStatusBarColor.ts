// Función para actualizar el theme-color
export function updateStatusBarColor(color: string) {
  const metaTag = document.querySelector('meta[name="theme-color"]') || document.createElement('meta')
  metaTag.setAttribute('name', 'theme-color')
  metaTag.setAttribute('content', color)
  document.head.appendChild(metaTag)
}