export function updateThemeColor(color: string) {
  const metaTag = document.querySelector('meta[name="theme-color"]') || document.createElement('meta')
  metaTag.setAttribute('name', 'theme-color')
  metaTag.setAttribute('content', color)
  if (!document.head.contains(metaTag)) {
    document.head.appendChild(metaTag)
  }
}
