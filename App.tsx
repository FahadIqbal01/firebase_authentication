/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from './src/components/InputField';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        {/* <InputField label='Email' placeholder='Enter your email' /> */}
        <InputField label='Password' placeholder='Enter your password' isPassword isErrorMessage/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardAvoidingView: {
    height: '100%'
  }
});

export default App;
