import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.co.jp/imghp?hl=ja'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default MyWeb;