import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import HeaderApp from '../_components/headerApp';


export default function HomeScreen() {

  return (
   <View style={styles.homeSection}>
      <HeaderApp />
      <View style={styles.homeContainer}>
          <Text style={{color: '#fff', fontSize: 30} }>Para Você</Text>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  homeSection: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  homeContainer: {
    padding: 20
  },
});
