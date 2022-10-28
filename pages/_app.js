import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'NotoSansThai-Black';
    src: url('/fonts/NotoSansThai-Black.ttf') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansThai-Thin';
    src: url('/fonts/NotoSansThai-Regular.ttf') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
