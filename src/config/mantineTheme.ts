import { DEFAULT_THEME, DefaultMantineColor, MantineColorsTuple, createTheme, em, mergeMantineTheme, MantineThemeOverride } from '@mantine/core';

type ExtendedColors = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "tertiary" | DefaultMantineColor;

declare module "@mantine/core" {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedColors, MantineColorsTuple>;
	}
}

export const mantineColor:Record<ExtendedColors, MantineColorsTuple> = {
  primary:[ "#ebf8ff", "#d6eefa", "#a8dcf7", "#57baf4", "#3dabf4", "#2484c3", "#016699", "#01496e", "#013a57", "#01293d" ],
  secondary: [ "#fff5e0", "#ffe9cb", "#ffd399", "#ffbb65", "#fda637", "#f59d2f", "#fd991a", "#e27e00", "#ca6f00", "#b05f00" ],
  danger: [ "#ffe9e9", "#ffd3d3", "#f6a5a6", "#ef7476", "#e94c4d", "#e63132", "#e52224", "#cb1418", "#b60c14", "#9f000e" ],
  success: [ "#e7fef1", "#d5f8e5", "#aceeca", "#80e5ad", "#5bdd94", "#44d884", "#35d67c", "#26bd69", "#1aa85d", "#00914d" ],
  warning: [ "#fff4e0", "#ffe6cb", "#ffcc99", "#ffb063", "#ff9836", "#ff8918", "#ff8105", "#e46e00", "#cb6200", "#b15200" ],
  info: [ "#e0ffff", "#ccfbff", "#9cf4ff", "#68eefe", "#44e8fe", "#30e5fd", "#1ee5fe", "#00cae3", "#00b5ca", "#009db1" ],
  tertiary: [ "#eef4ff", "#e1e7ee", "#c6ccd5", "#a8afbc", "#8e97a7", "#7d889a", "#748094", "#616e81", "#546276", "#45546a" ],
  dark: [ "#C1C2C5", "#A6A7AB", "#909296", "#5C5F66", "#373A40", "#2C2E33", "#25262B", "#1A1B1E", "#141517", "#101113" ],
  gray: [ "#F8F9FA", "#F1F3F5", "#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD", "#868E96", "#495057", "#343A40", "#212529" ],
  red: [ "#FFF5F5", "#FFE3E3", "#FFC9C9", "#FFA8A8", "#FF8787", "#FF6B6B", "#FA5252", "#F03E3E", "#E03131", "#C92A2A" ],
  pink: [ "#FFF0F6", "#FFDEEB", "#FCC2D7", "#FAA2C1", "#F783AC", "#F06595", "#E64980", "#D6336C", "#C2255C", "#A61E4D" ],
  grape: [ "#F8F0FC", "#F3D9FA", "#EEBEFA", "#E599F7", "#DA77F2", "#CC5DE8", "#BE4BDB", "#AE3EC9", "#9C36B5", "#862E9C" ],
  violet: [ "#F3F0FF", "#E5DBFF", "#D0BFFF", "#B197FC", "#9775FA", "#845EF7", "#7950F2", "#7048E8", "#6741D9", "#5F3DC4" ],
  indigo: [ "#EDF2FF", "#DBE4FF", "#BAC8FF", "#91A7FF", "#748FFC", "#5C7CFA", "#4C6EF5", "#4263EB", "#3B5BDB", "#364FC7" ],
  blue: [ "#E7F5FF", "#D0EBFF", "#A5D8FF", "#74C0FC", "#4DABF7", "#339AF0", "#228BE6", "#1C7ED6", "#1971C2", "#1864AB" ],
  cyan: [ "#E3FAFC", "#C5F6FA", "#99E9F2", "#66D9E8", "#3BC9DB", "#22B8CF", "#15AABF", "#1098AD", "#0C8599", "#0B7285" ],
  teal: [ "#E6FCF5", "#C3FAE8", "#96F2D7", "#63E6BE", "#38D9A9", "#20C997", "#12B886", "#0CA678", "#099268", "#087F5B" ],
  green: [ "#EBFBEE", "#D3F9D8", "#B2F2BB", "#8CE99A", "#69DB7C", "#51CF66", "#40C057", "#37B24D", "#2F9E44", "#2B8A3E" ],
  lime: [ "#F4FCE3", "#E9FAC8", "#D8F5A2", "#C0EB75", "#A9E34B", "#94D82D", "#82C91E", "#74B816", "#66A80F", "#5C940D" ],
  yellow: [ "#FFF9DB", "#FFF3BF", "#FFEC99", "#FFE066", "#FFD43B", "#FCC419", "#FAB005", "#F59F00", "#F08C00", "#E67700" ],
  orange: [ "#FFF4E6", "#FFE8CC", "#FFD8A8", "#FFC078", "#FFA94D", "#FF922B", "#FD7E14", "#F76707", "#E8590C", "#D9480F" ]
}

const themeOverride:MantineThemeOverride = createTheme({
  fontFamily: 'Poppins, Roboto, Nunito Sans, sans-serif',
  fontFamilyMonospace: 'Poppins, Roboto, Nunito Sans, sans-serif',
	lineHeights: {
    xs: '1.4',
    sm: '1.4',
    md: '1.4',
    lg: '1.6',
    xl: '1.65',
  },
  primaryShade: 6,
  black: "#0d0d0d",
  white: "#fff",
  colors: mantineColor,
	breakpoints: {
		xs: em(0),
		mobile: em(480),
		sm: em(576),
		md: em(768),
		lg: em(992),
		xl: em(1200),
		'2xl': em(1400),
	},
  components: {
    Card: {
      defaultProps: {
        shadow:"md",
        radius:"sm",
        withBorder: true,
        p: "sm",
      }
    },
    Checkbox: {
			styles: () => ({
				label: {
					// fontWeight: 500,
					// fontSize: 16,
				},
			}),
		},
    Modal: {
			styles: () => ({
        title: {
					fontWeight: 700,
        },
      })
    },
    Table: {
			styles: (theme: any) => ({
        borderColor: theme.colors.gray[8]
      })
    }
  }
  
})

export const mainTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export default mainTheme