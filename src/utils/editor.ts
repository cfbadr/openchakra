const ALERT_COMPONENTS: (ComponentType | MetaComponentType)[] = [
  //   'Alert',
  //   'AlertDescription',
  //   'AlertIcon',
  //   'AlertTitle',
]

export const COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Box',
  'Button',
  'Checkbox',
  'CircularProgress',
  'Divider',
  'Flex',
  'Grid',
  'Heading',
  'Icon',
  'IconButton',
  'Image',
  'Input',
  'Link',
  'Progress',
  'Radio',
  'SimpleGrid',
  'Spinner',
  'Text',
  'NumberInput',
]

export const AccordionWhitelist: (
  | ComponentType
  | MetaComponentType
)[] = COMPONENTS.filter(name => !ALERT_COMPONENTS.includes(name))

export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![
        'AlertIcon',
        'AlertDescription',
        'AlertTitle',
        'AvatarBadge',
        'AccordionButton',
        'AccordionPanel',
        'AccordionIcon',
        'BreadcrumbItem',
        'BreadcrumbLink',
      ].includes(name),
  )
