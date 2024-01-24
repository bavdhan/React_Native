
import React,{useState,Component} from 'react';
import { View, StyleSheet,Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { ActivityIndicator,Dimensions } from 'react-native';

const App  = () => {

  const [visible ,setvisible] =useState(false);
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;



  return (
    <View style={styles.container}>


     
      <WebView
        source={{ uri: 'https://tanveerdesigner.com/' }} 
        style={styles.webview}
        onLoadStart={()=>setvisible(true)}
        onLoadEnd={()=>setvisible(false)}

        onNavigationStateChange={(navState) => {
          // Listen to WebView navigation state changes
          if (navState.canGoBack) {
            navigation.setParams({ canGoBack: true });
          } else {
            navigation.setParams({ canGoBack: false });
          }
        }}
      />
    

      {visible && (
         <ActivityIndicator
         size={'large'}
         color={"red"}
         style={{
           position:'absolute',
          top:height/2,
          left:width/2
         }}
         />
      )}



    </View>
   
  );

};


WebViewScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => {
    if (navigation.state.params && navigation.state.params.canGoBack) {
      return (
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      );
    }
    return null;
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
