import { mount } from '@vue/test-utils'
import ExampleComponent from '../../ExampleComponent.vue'

describe('ExampleComponent', () => {
  it('renders props.message when passed', () => {
    const message = 'Hello, world!'
    const wrapper = mount(ExampleComponent, {
      props: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
