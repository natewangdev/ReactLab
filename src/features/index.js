import * as UseStateExample from './hooks/useState'
import * as UseEffectExample from './hooks/useEffect'
import * as UseContextExample from './hooks/useContext'
import * as ComponentsExample from './basics/components'
import * as PropsExample from './basics/props'
import * as RefsExample from './advanced/refs'
import * as HocExample from './advanced/hoc'

const features = {
  basics: {
    name: '基础概念',
    items: {
      components: ComponentsExample,
      props: PropsExample,
    },
  },
  hooks: {
    name: 'Hooks',
    items: {
      useState: UseStateExample,
      useEffect: UseEffectExample,
      useContext: UseContextExample,
    },
  },
  advanced: {
    name: '高级特性',
    items: {
      refs: RefsExample,
      hoc: HocExample,
    },
  },
}

export default features
