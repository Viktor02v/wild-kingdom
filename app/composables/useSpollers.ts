import { onMounted, onBeforeUnmount } from 'vue'

export function useSpollers() {
  const cleanups: (() => void)[] = []

  const initSpollers = () => {
    const spollers = document.querySelectorAll<HTMLElement>('[data-spollers]')

    spollers.forEach((spoller) => {
      const attr = spoller.dataset.spollers
      if (!attr) return
      const [breakpoint, type] = attr.split(',')
      if (!breakpoint || !type) return

      const bp = Number(breakpoint)
      const detailsList = spoller.querySelectorAll<HTMLDetailsElement>('details')

      const toggleDetails = (event: Event) => {
        const clicked = event.currentTarget as HTMLDetailsElement
        detailsList.forEach((d) => {
          if (d !== clicked) d.removeAttribute('open')
        })
      }

      const handler = () => {
        const isActive =
          (type === 'max' && window.innerWidth <= bp) ||
          (type === 'min' && window.innerWidth >= bp)

        detailsList.forEach((d) => {
          if (isActive) {
            d.removeAttribute('open')
            d.addEventListener('click', toggleDetails)
          } else {
            d.setAttribute('open', '')
            d.removeEventListener('click', toggleDetails)
          }
        })
      }

      handler()
      window.addEventListener('resize', handler)
      cleanups.push(() => window.removeEventListener('resize', handler))
    })
  }

  onMounted(() => {
    initSpollers()
  })

  onBeforeUnmount(() => {
    cleanups.forEach((c) => c())
  })
}
