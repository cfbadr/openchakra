import Composer from './composer'

type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

export const buildBreadcrumb = (parent: string): ComposedComponent => {
  const composer = new Composer()

  const nodeId = composer.addNode({ type: 'Breadcrumb', parent })
  const itemId = composer.addNode({ type: 'BreadcrumbItem', parent: nodeId })
  composer.addNode({ type: 'BreadcrumbLink', parent: itemId })

  const secondItemId = composer.addNode({
    type: 'BreadcrumbItem',
    parent: nodeId,
  })
  composer.addNode({ type: 'BreadcrumbLink', parent: secondItemId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildFormControl = (parent: string): ComposedComponent => {
  const composer = new Composer()

  const nodeId = composer.addNode({ type: 'FormControl', parent })

  composer.addNode({ type: 'FormLabel', parent: nodeId })
  composer.addNode({ type: 'Input', parent: nodeId, rootParentType: 'Input' })
  composer.addNode({ type: 'FormHelperText', parent: nodeId })
  composer.addNode({ type: 'FormErrorMessage', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildList = (parent: string): ComposedComponent => {
  const composer = new Composer('List')

  const nodeId = composer.addNode({ type: 'List', parent })
  composer.addNode({ type: 'ListItem', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildInputGroup = (parent: string): ComposedComponent => {
  const composer = new Composer('Input')

  const nodeId = composer.addNode({ type: 'InputGroup', parent })
  composer.addNode({
    type: 'InputLeftAddon',
    parent: nodeId,
    props: { children: 'Email' },
  })
  composer.addNode({ type: 'Input', parent: nodeId })

  const elementId = composer.addNode({
    type: 'InputRightElement',
    parent: nodeId,
  })
  composer.addNode({
    type: 'Icon',
    parent: elementId,
    props: { name: 'email' },
  })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

type BuilderFn = (parent: string) => ComposedComponent

type ComposerBuilders = {
  [k: string]: BuilderFn
}

const builders: ComposerBuilders = {
  FormControlMeta: buildFormControl,
  ListMeta: buildList,
  InputGroupMeta: buildInputGroup,
  BreadcrumbMeta: buildBreadcrumb,
}

export default builders
