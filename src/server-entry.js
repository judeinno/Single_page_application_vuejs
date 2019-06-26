import { app, router, store } from './app'

export default context => {
  router.push(context.url)
  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.asyncData) {
      component.asyncData(store, router.currentRoute)
    }
  })).then(() => {
    context.initalState = store.state
    return app
  })
}
