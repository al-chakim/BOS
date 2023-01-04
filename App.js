import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
        source={{ uri: 'https://marketplace.matchingfund.id' }}
      />
  );
}

export default App;