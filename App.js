import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ethio-History</Text>

     <Image
       source={require('./assets/onboarding-hero.png')}
       style={styles.heroImage}
       /> 
      <Text style={styles.subtitle}>
        Explore Etiopia's Rich History{'\n'}
        Discover ancient kingdoms, iconic leaders and legendary artifacts.
      </Text>
      

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0, 
    paddingTop: 60,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold' ,
    color: '#FFD700',
    marginBottom: 32,
  },
  heroImage: {
    width: '95%',
    height: 350,
    resizeMode: 'cover',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 32,
    marginbottom: 40,
    lineHeight: 26,
    flexShrink: 1, 
  },
});
