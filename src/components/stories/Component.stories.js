// src/stories/CompositionAPI.stories.js
import { ref } from 'vue'
import MyComponent from '../Component.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/CompositionAPI',
  component: MyComponent
}

const Template = (args) => ({
  components: { MyComponent },
  setup() {
    const state = ref(args.initialState)

    return { state, onClick: action('clicked') }
  },
  template: '<MyComponent :state="state" @click="onClick" />'
})

export const UsingCompositionAPI = Template.bind({})
UsingCompositionAPI.args = {
  initialState: 'State from Composition API',
  label: 'Click me'
}
