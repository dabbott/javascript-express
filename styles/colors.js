const colors = {
  text: 'rgb(38, 48, 83)',
  textMuted: 'rgb(85, 85, 85)',
  divider: 'rgba(220, 220, 220, 0.5)',
  primary: 'rgb(255, 223, 67)',
  neutralBackground: '#DEDFE8',
  banner: {
    top: 'rgba(104, 43, 255, 0.1)',
    bottom: 'rgba(104, 43, 255, 0.02)',
  },
  button: {
    primaryText: 'black',
    secondaryText: 'white',
    get primaryBackground() {
      return colors.primary
    },
    secondaryBackground: 'rgb(160,160,160)',
  },
}

export default colors
