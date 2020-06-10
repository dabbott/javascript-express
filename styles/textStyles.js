import colors from './colors'
import mediaQuery from '../utils/mediaQuery'

export default {
  title: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: '100',
    color: colors.text,
    [mediaQuery.small]: {
      fontSize: '36px',
    },
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '300',
    paddingTop: '10px',
    color: colors.text,
  },
  header: {
    fontSize: '24px',
    fontWeight: '300',
    color: colors.text,
  },
  subheader: {
    fontSize: '16px',
    fontWeight: '500',
    color: colors.text,
    lineHeight: '22px',
  },
  body: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '22px',
  },
}
