import { type NodePlopAPI } from 'plop'

const config = (plop: NodePlopAPI) => {
  plop.setGenerator('router', {
    description: 'Create new T3 Router',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'router name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/server/api/routers/{{name}}.router.ts',
        templateFile: 'templates/router.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/server/api/routers/{{name}}.router.e2e.spec.ts',
        templateFile: 'templates/router.e2e.spec.ts.hbs',
      },
    ],
  })
}

export default config
