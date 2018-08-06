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
       fetch(data).then((result) => console.log(result));
     } 
  }

  render() {
    return (
      <WebView
        source={{uri:'https://www.google.co.jp/imghp?hl=ja'}}
        style={{marginTop: 20}}
        injectedJavaScript = {js}
        onMessage = {this.onMessage}
      />
    );
  }
}

const js = `
    const prefix = "https://www.google.co.jp";
    let images = document.getElementsByClassName('rg_l');
    let imageURL = images[0].getAttribute('href');
    window.postMessage(prefix + imageURL);
`

export default MyWeb;