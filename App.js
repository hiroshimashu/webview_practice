import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  onMessage = (event) => {
     const { data } = event.nativeEvent;
     if (data === 'clicked') {
        console.log('js is working')
     } else if (data === 'NG') {
       alert('NG');
     } else {
       console.log('js is working');
     } 
  }

  render() {
    return (
      <WebView
        source={{uri:'https://www.google.co.jp/imghp?hl=ja'}}
        style={{marginTop: 20}}
        injectedJavaScript = {js}
      />
    );
  }
}

const js = `
    window.postMessage('clicked');
`

export default MyWeb;