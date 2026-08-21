/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { KeyboardAvoidingView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from './src/components/Toast';
// import Checkbox from './src/components/Checkbox';
// import { COLOR_PALETTE } from './src/constants/theme';
// import LinkText from './src/components/LinkText';
// import InputField from './src/components/InputField';
// import PrimaryButton from './src/components/PrimaryButton';
// import SecondaryButton from './src/components/SecondaryButton';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        {/* <Checkbox>
          <Text style={{ color: COLOR_PALETTE.PRIMARY.Hex }}>Terms & Privacy Policy</Text>
        </Checkbox> */}
        <Toast />
      </KeyboardAvoidingView>
    </SafeAreaView >
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
