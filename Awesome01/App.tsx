import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{color: 'white'}}>Hello World!</Text>
        <Button title="Click Me" accessibilityLabel="Click this button" />
      </View>
    </SafeAreaView>
  );
}

export default App;
