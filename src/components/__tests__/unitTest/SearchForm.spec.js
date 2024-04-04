import { mount } from '@vue/test-utils'
import SearchForm from '../../layout/header/SearchForm.vue'

describe('SearchForm.vue', () => {
  /*

  it('emits input event when user types in search input', async () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['test'])
  })

  it('emits enter event when user presses Enter key in search input', async () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')
    await input.trigger('keydown.enter')

    expect(wrapper.emitted().enter).toBeTruthy()
    expect(wrapper.emitted().enter).toHaveLength(1)
  })


*/

  it('clears search query when clear button is clicked', async () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')

    const clearButton = wrapper.find('#search-Btn')
    await clearButton.trigger('click')

    expect(wrapper.vm.searchQuery).toBe('')
  })

  it('hides autocomplete list when input is blurred', async () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input[type="text"]')

    await input.trigger('focus')
    expect(wrapper.vm.autocompleteListVisible).toBe(true)

    await input.trigger('blur')
    expect(wrapper.vm.autocompleteListVisible).toBe(false)
  })
})
