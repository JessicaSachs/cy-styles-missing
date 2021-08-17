import App from './App.vue'
import { mount } from '@cypress/vue'

it('renders the app', () => {
  mount(() => <App />)
})