export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>

export const menuItems: MenuItems = {
  Box: {},
  Button: {},
  Checkbox: {},
  CircularProgress: {},
  Code: {},
  Flex: {},
  Icon: {},
  IconButton: {},
  Image: {},
  Input: {},
  Link: {},
  NumberInput: {},
  Progress: {},
  SimpleGrid: {},
  Spinner: {},
  Select: {},
  Switch: {},
  Tag: {},
  Text: {},
  Textarea: {},
}

export const componentsList: ComponentType[] = [
  'Box',
  'Button',
  'Checkbox',
  'CircularProgress',
  'CloseButton',
  'Code',
  'Container',
  'Divider',
  'Editable',
  'Flex',
  'FormControl',
  'FormErrorMessage',
  'FormHelperText',
  'FormLabel',
  'Grid',
  'Heading',
  'Icon',
  'IconButton',
  'Image',
  'Input',
  'InputGroup',
  'InputLeftAddon',
  'InputLeftElement',
  'InputRightAddon',
  'InputRightElement',
  'Link',
  'List',
  'ListIcon',
  'ListItem',
  'Menu',
  'NumberInput',
  'Progress',
  'Radio',
  'RadioGroup',
  'Select',
  'SimpleGrid',
  'Spinner',
  'Stack',
  'Switch',
  'Tab',
  'TabList',
  'TabPanel',
  'TabPanels',
  'Tabs',
  'Tag',
  'Text',
  'Textarea',
]
