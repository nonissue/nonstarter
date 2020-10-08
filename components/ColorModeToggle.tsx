import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/core';
import { Moon, Sun } from 'heroicons-react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeToggle = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Sun, Moon);

  return (
    <IconButton
      size='sm'
      // fontSize='md'
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon width='20px' height='20px' viewBox='0 0 24 24' />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
