import { extendTheme, UseToastOptions } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const toastOptions: UseToastOptions = {
  position: 'top-right',
  duration: 1000,
  status: 'success',
};

const colorModeInLocalStorage =
  typeof window !== 'undefined'
    ? window.localStorage.getItem('chakra-ui-color-mode')
    : 'system';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: colorModeInLocalStorage === 'system',
};

const colors = {
  yellowAlpha: {
    50: 'rgba(236, 201, 75, 0.04)',
    100: 'rgba(236, 201, 75, 0.06)',
    200: 'rgba(236, 201, 75, 0.08)',
    300: 'rgba(236, 201, 75, 0.16)',
    400: 'rgba(236, 201, 75, 0.24)',
    500: 'rgba(236, 201, 75, 0.36)',
    600: 'rgba(236, 201, 75, 0.48)',
    700: 'rgba(236, 201, 75, 0.64)',
    800: 'rgba(236, 201, 75, 0.80)',
    900: 'rgba(236, 201, 75, 0.92)',
  },
};

const mapboxPopupCloseButtonSize = '16px';

const styles = {
  global: (props: any) => ({
    '.some-global-class': {
      paddingY: 2,
    },

    a: {
      // Fix issue links wrap outside of button have ugly sharp corners
      borderRadius: 'md',
    },

    // Override the react-map-box styles
    '.mapboxgl-popup-content': {
      backgroundColor: mode('white', 'gray.800')(props),
      padding: '12px 17px 12px 12px',
    },
    '.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': {
      borderTopColor: mode('white', 'gray.800')(props),
    },
    '.mapboxgl-popup-close-button': {
      borderRadius: '3px',
      width: mapboxPopupCloseButtonSize,
      height: mapboxPopupCloseButtonSize,
      lineHeight: mapboxPopupCloseButtonSize,
      top: '1px',
      right: '1px',
      outline: 'none',

      '&:hover': {
        color: 'red.400',
      },
    },
  }),
};

const components = {
  Input: {
    variants: {
      expanding: () => ({
        field: {
          // Merge default styles
          // ...mode('light')(props).field,
          // ...mode('dark')(props).field,
          background: 'transperant',
          width: '50%',
          transition: 'width 0.3s',
          _focus: {
            width: '100%',
          },
        },
      }),
    },
  },
};

export const theme = extendTheme({ config, colors, components, styles });
