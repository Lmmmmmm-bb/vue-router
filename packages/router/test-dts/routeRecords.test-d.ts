import { describe, it } from 'vitest'
import type { RouteLocationNormalized, RouteRecordRaw } from './index'
import { defineComponent } from 'vue'

const component = defineComponent({})
const components = { default: component }

const routes: RouteRecordRaw[] = []

describe('RouteRecords', () => {
  // TODO: split into multiple tests
  it('works', () => {
    routes.push({ path: '/', redirect: '/foo' })

    // @ts-expect-error cannot have components and component at the same time
    routes.push({ path: '/', components, component })

    // a redirect record with children to point to a child
    routes.push({
      path: '/',
      redirect: '/foo',
      children: [
        {
          path: 'foo',
          component,
        },
      ],
    })

    // same but with a nested route
    routes.push({
      path: '/',
      component,
      redirect: '/foo',
      children: [
        {
          path: 'foo',
          component,
        },
      ],
    })

    routes.push({ path: '/a/b', component, props: true })
    routes.push({
      path: '/a/b',
      component,
      props: (to: RouteLocationNormalized<'/[id]+'>) => to.params.id,
    })
    // @ts-expect-error: props should be an object
    routes.push({ path: '/a/b', components, props: to => to.params.id })
    routes.push({
      path: '/a/b',
      components,
      props: {
        default: (to: RouteLocationNormalized<'/[id]+'>) => to.params.id,
      },
    })
    routes.push({ path: '/', components, props: true })

    // let r: RouteRecordRaw = {
    //   path: '/',
    //   component,
    //   components,
    // }

    function filterNestedChildren(children: RouteRecordRaw[]) {
      return children.filter(r => {
        if (r.redirect) {
          r.children?.map(() => {})
        }
        if (r.children) {
          r.children = filterNestedChildren(r.children)
        }
      })
    }
    filterNestedChildren(routes)
  })
})
