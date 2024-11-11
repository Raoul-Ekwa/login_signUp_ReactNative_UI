import { StyleSheet, Text, Image, View, Alert, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const seConnecter = () => {
  return alert('ok');
};

const iconClick = (iconName) => {
  Alert.alert(` L'icone de ${iconName}  a été cliquée!`);
};

const SignUpScreen = () => {
  const navigation = useNavigation(); // Utilisation du hook de navigation

  const goToSignUp = () => {
    navigation.navigate('SignUp'); // Redirige vers l'écran SignUp (ici il remplace SignUpScreen comme défini dans le Navigator stack)
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/images/topVector2.png')} style={styles.topImage} />
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Creez un compte</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Utilisateur" placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Mot de passe" placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="mobile-phone" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Téléphone" placeholderTextColor="#9A9A9A" />
      </View>

      <TouchableOpacity style={styles.signInButtonContainer} onPress={seConnecter}>
        <Text style={styles.signIn}>Créer</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
          <FontAwesome6 name="arrow-right" size={35} color="white" style={styles.singnInIcon} />
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.footerContainer} onPress={goToSignUp}>
        <Text style={styles.footerText}>Ou créer un compte en utilisant les réseaux sociaux </Text>

        <View style={styles.socialMediaContainer}>
          
         {/* Facebook Icon */}
        <TouchableOpacity  onPress={() => iconClick('Facebook')}>
        <Entypo name="facebook-with-circle" size={45} color="#1877F2" style={styles.socialIcon} />
        </TouchableOpacity>

        {/* Google Icon */}
        <TouchableOpacity  onPress={() => iconClick('Google')}>
          <AntDesign name="google" size={45} color="#DB4437" style={styles.socialIcon}/>
        </TouchableOpacity>
    
        </View>

      </View>

      

      <View style={styles.leftFooterContainer}>
        <ImageBackground source={require('../assets/images/leftFooterVecto.png')} style={styles.leftFooterImage} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    position: 'relative',
  },
  topImageContainer: {
    height: 1,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  createAccountContainer: {
    marginTop: 100,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40, // G et D
    marginVertical: 15, // H et B
    elevation: 10,
    alignItems: 'center',
    height: 70,
    gap: 10,
  },
  textInput: {
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
  },
  forgetPasswordContainer: {
    marginTop: 20,
    marginLeft: 220,
  },
  forgetPasswordText: {
    textAlign: 'right',
  },
  signInButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    marginHorizontal: 10,
  },
  signIn: {
    color: '#262626',
    fontWeight: 'bold',
    fontSize: 25,
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 45,
  },
  footerText: {
    fontSize: 17,
    textAlign: 'center',
    marginLeft: 40,
  },
  leftFooterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  leftFooterImage: {
    height: 250,
    width: 150,
  },
  socialMediaContainer: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 30,
  margin: 30
 
  },
  socialIcon: {
    backgroundColor: 'white',   
    elevation: 10,              // Ombre pour l'effet de profondeur
    margin: 10,                 // Espace entre les icônes
    padding: 10,                // Taille de l'icône
    borderRadius: 30,           
    overflow: 'hidden',         // Cache les parties de l'icône qui dépassent du cercle
  }
});
