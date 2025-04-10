import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ViaCep from './component/ViaCep';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ViaCep></ViaCep>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#381a43',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_titulo:{
    color: '#0bdf4e',
  },
});
