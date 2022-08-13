import { StyleSheet, Text, View } from 'react-native';
import Media from './assets/components/Player';

export default function App() {
  return (
    <View style={styles.container}>
      <Media/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
