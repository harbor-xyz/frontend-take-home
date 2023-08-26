export const theme = {
  color: {
    white: '#FFF',
    grey111: '#111111',
    grey222: '#222222',
    greyAAA: '#AAAAAA',
    grey666: '#666666',
    grey999: '#999999',
    greyDDD: '#DDDDDD',
    grey555: '#555555',
    greyF0: '#F0F0F0',
    greyF6: '#F6F6F6',
    greyE5: '#E5E5E5',
    black: '#222',
    blue: '#2F80ED',
    green: '#509900',
    greyLight: '#D2D5DB',
    orange: '#DB9000',
    purple: '#7B61FF',
    red: '#CD3A4C',
    background: {
      light: '#F9FAFB'
    }
  },
  text: {
    title1: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '-0.2px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28px',
      fontFamily: 'Work Sans, sans-serif'
    },
    title3: {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '18px',
      letterSpacing: '-0.2px'
    },
    body1: {
      // text variant medium
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.2px',
      fontFamily: 'Work Sans, sans-serif'
    },
    body2: {
      // text variant semiBold
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '-0.2px',
      fontFamily: 'Work Sans, sans-serif'
    }
  },
  space: {
    page: 20
  }
};

export type Theme = typeof theme;
