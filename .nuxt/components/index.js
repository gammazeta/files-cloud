export { default as FileDetail } from '../../components/FileDetail.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as Top } from '../../components/Top.vue'
export { default as HomeConnect } from '../../components/Home/Connect.vue'
export { default as HomeListConnect } from '../../components/Home/ListConnect.vue'
export { default as HomeMyId } from '../../components/Home/MyId.vue'
export { default as HomeNotification } from '../../components/Home/Notification.vue'
export { default as HomeReceiveFiles } from '../../components/Home/ReceiveFiles.vue'
export { default as HomeSendFiles } from '../../components/Home/SendFiles.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
