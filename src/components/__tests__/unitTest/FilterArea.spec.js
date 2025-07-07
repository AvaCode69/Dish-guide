import { mount } from '@vue/test-utils'
import FilterArea from '../../layout/navbar/FilterArea.vue'

describe('FilterArea.vue', () => {
  it('renders list items for each area', async () => {
    const areas = [{ strArea: 'Area 1' }, { strArea: 'Area 2' }, { strArea: 'Area 3' }]

    const wrapper = mount(FilterArea, {
      data() {
        return {
          areas
        }
      }
    })

    await wrapper.vm.$nextTick()

    const listItems = wrapper.findAll('.item-link')

    expect(listItems).toHaveLength(areas.length)

    listItems.forEach((item, index) => {
      expect(item.text()).toContain(areas[index].strArea)
    })
  })

  it('calls getAreasList method on mounted hook', () => {
    const getAreasList = jest.fn()
    mount(FilterArea, {
      setup() {
        return {
          getAreasList
        }
      }
    })

    expect(getAreasList).toHaveBeenCalled()
  })
})
