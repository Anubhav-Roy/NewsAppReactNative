import React, { Component } from 'react'; 
import { WebView } from 'react-native-webview';

// ...
export default class InAppBrowser extends Component {


  render() {
    return <WebView source={{ uri: this.props.route.params.articleLink }} />;
  }
}