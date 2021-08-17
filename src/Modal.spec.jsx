import Modal from './Modal.vue'
import { mount } from '@cypress/vue'
import { ref } from 'vue'

it('renders', () => {
  const show = ref(true)
  const close = () => show.value = false

  mount(() =>
    <div>
      <button onClick={ () => show.value = !show.value }>
        Toggle Modal
      </button>
      <Modal show={ show.value } onClose={ close }>
        <p data-testid="content">The content for the modal</p>
      </Modal>
    </div>)
})




































// it('renders and can be closed', () => {
//   const show = ref(true)
//   const close = () => show.value = false

//   mount(() => <Modal show={ show.value } onClose={ close }>
//     <p data-testid="content">The content for the modal</p>
//   </Modal>)
  
//     // .get('[data-testid=content]').should('be.visible')
//     // .get('[data-testid=closeButton]')
//     // .click()
//     // .get('[data-testid=content]').should('not.exist')
// })