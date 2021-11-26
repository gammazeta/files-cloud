export const FileDetail = () => import('../../components/FileDetail.vue' /* webpackChunkName: "components/file-detail" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const Top = () => import('../../components/Top.vue' /* webpackChunkName: "components/top" */).then(c => wrapFunctional(c.default || c))
export const HomeConnect = () => import('../../components/Home/Connect.vue' /* webpackChunkName: "components/home-connect" */).then(c => wrapFunctional(c.default || c))
export const HomeListConnect = () => import('../../components/Home/ListConnect.vue' /* webpackChunkName: "components/home-list-connect" */).then(c => wrapFunctional(c.default || c))
export const HomeMyId = () => import('../../components/Home/MyId.vue' /* webpackChunkName: "components/home-my-id" */).then(c => wrapFunctional(c.default || c))
export const HomeNotification = () => import('../../components/Home/Notification.vue' /* webpackChunkName: "components/home-notification" */).then(c => wrapFunctional(c.default || c))
export const HomeReceiveFiles = () => import('../../components/Home/ReceiveFiles.vue' /* webpackChunkName: "components/home-receive-files" */).then(c => wrapFunctional(c.default || c))
export const HomeSendFiles = () => import('../../components/Home/SendFiles.vue' /* webpackChunkName: "components/home-send-files" */).then(c => wrapFunctional(c.default || c))

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
