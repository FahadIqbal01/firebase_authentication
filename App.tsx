/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from './src/components/InputField';
import PrimaryButton from './src/components/PrimaryButton';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <InputField label='Email' placeholder='Enter your email' />
        <InputField label='Password' placeholder='Enter your password' isPassword isErrorMessage/>
        <PrimaryButton text='Login' onPress={()=>console.log('Primary Button Press')} loading={false}/>
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
