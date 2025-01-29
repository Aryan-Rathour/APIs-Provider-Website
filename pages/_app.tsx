// pages/_app.js
import React from 'react';
import '../styles/globals.css';  // if you're using global styles

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
