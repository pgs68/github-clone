import type { Theme } from 'theme-ui'

export const theme: Theme = {
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      backgroundColor: '#ffffff21'
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      color: '#fff'
    },
  },
  styles: {
    spinner: {
      color: 'white',
    },
  },
  buttons: {
    primary: {
      color: '#de4313',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      }
    }
  },
  forms: {
    input: {
    },
    label: {
      color: '#fff'
    }
  }
}