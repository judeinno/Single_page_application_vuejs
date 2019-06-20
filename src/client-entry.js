import { app } from './app';

app.$mount("#app");

// Tell te hot reloading module to stop the hot reloading propagation
// And flag that everything is loaded correctly
if (module.hot) {
  module.hot.accept();
}
