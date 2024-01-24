import React, {Component} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Alert,
  BackHandler,
} from 'react-native';
import {WebView} from 'react-native-webview';
import WebsiteChanges from './changes/WebsiteChanges';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
    this.state = {
      visible: false,
      canGoBack: false
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {  
   if (this.state.canGoBack) {
    this.WEBVIEW_REF.current.goBack();
    return true;
  }
  };

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  displayError() {
    Alert.alert(
      'No Internet',
      'Please Check Internet Connection',
      [
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
            return true;
          },
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={WebsiteChanges.statusBarColor}
          barStyle="dark-content"
        />
        <WebView
          source={{uri: WebsiteChanges.url}}
          onError={() => this.displayError()}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoadStart={syntheticEvent => {
            this.setState({visible: true});
          }}
          onLoadEnd={syntheticEvent => {
            this.setState({visible: false});
          }}
          style={{marginTop: 0.5, flex: 1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
        {this.state.visible && (
          <View style={{flex: 10, backgroundColor: 'white'}}>
            <ActivityIndicator
              color={WebsiteChanges.pageLoadIndicator}
              size={80}
              style={styles.IndicatorStyle}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IndicatorStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
