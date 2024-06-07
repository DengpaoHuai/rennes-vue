import { action } from '@storybook/addon-actions'
import { fn } from '@storybook/test'
import Task from '../Task.vue'
export default {
  title: 'Task',
  tags: ['autodocs'],
  component: Task,
  excludeStories: /.*Data$/,
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'Task_INBOX',
      updated_at: new Date(2019, 0, 1, 9, 0)
    }
  }
}
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`

export const Default = {
  args: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX'
  }
}

// Etat épinglé d'une tâche
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        title: 'TASK_PINNED'
      })
    }
  },
  methods: actionsData
})
