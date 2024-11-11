import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Importation de LottieView
import { useNavigation } from '@react-navigation/native';  // Importation du hook de navigation
import LoginScreen from '@/screens/LoginScreen'; // Tu peux conserver l'import si tu veux le rediriger vers ce composant

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();  // Hook de navigation

  useEffect(() => {
    // Simuler le chargement des données pendant 3 secondes
    setTimeout(() => {
      setLoading(false);
      // Naviguer vers l'écran Login une fois le chargement terminé
      navigation.replace('Login');  // Utilise "replace" pour ne pas revenir à l'écran de loader
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        // Animation Lottie pour loader
        <LottieView
          source={require('../../assets/images/Animation - Lottie.json')}  // Le fichier JSON Lottie
          autoPlay
          loop
          style={styles.lottie}
        />
      ) : (
        // Si ce n'était pas une animation, tu afficherais LoginScreen, mais la navigation se fait automatiquement
        <LoginScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  lottie: {
    width: 150,
    height: 150,
  },
});

export default Loader;
