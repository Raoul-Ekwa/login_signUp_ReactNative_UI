import { StyleSheet, 
         Text, 
         Image, 
         View, 
         TextInput, 
         Button, 
         TouchableOpacity, 
         ImageBackground 
        } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import SignUpScreen from './SignUpScreen';


const testForgetPassword = () => {
    return alert('ok');
};

const seConnecter = () => {
  return alert('ok');
};

const LoginScreen = () => {

  const navigation = useNavigation(); // Utilisation du hook de navigation

  const goToSignUp = () => {
    navigation.navigate('SignUp'); // Redirige vers l'écran SignUp(ici il remplace SignUpScreen comme defini dans le Navigator stack) 
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/images/topVector.png')} style={styles.topImage} />
      </View>

      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>

      <View>
        <Text style={styles.signText}>Connectez-vous à votre compte</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} 
                   placeholder="Email" 
                   placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} 
                   placeholder="Mot de passe" 
                   placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.forgetPasswordContainer}>
        <Button title="Mot de passe oublié?" 
                style={styles.forgetPasswordText} 
                onPress={testForgetPassword} color="#9A9A9A" 
        />
      </View>

      <TouchableOpacity style={styles.signInButtonContainer} onPress={seConnecter}>
        <Text style={styles.signIn}>Se connecter</Text>
        {/* pour appliquer un fond dégradé, ce qui peut améliorer l'apparence visuelle et l'attrait de l'interface utilisateur.*/}
        <LinearGradient colors={['#F97794','#623AA2']} style={styles.linearGradient}>
            <FontAwesome6 name="arrow-right" size={35} color="white" style={styles.singnInIcon} />
        </LinearGradient>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.footerContainer} onPress={goToSignUp}>
        <Text style={styles.footerText}>vous n'avez pas de compte ?  
          <Text style={{textDecorationLine:'underline'}}>Créez-en un</Text>
        </Text>
      </TouchableOpacity>


      <View style={styles.leftFooterContainer}>
        <ImageBackground source={require('../assets/images/leftFooterVecto.png')} 
                         style={styles.leftFooterImage}
        />
      </View>
      
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    position: 'relative'
  },
  topImageContainer: {
    height: 50,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  helloContainer: {
    marginTop: 80,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
  },
  signText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40, //G et D
    marginVertical: 20, // H  et B
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
    marginTop: 70,
    marginHorizontal: 10
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
  //textAlign: 'center',
  marginTop: 120,
  //backgroundColor:'#aaa'
  },
  footerText: {
   fontSize: 18,
   textAlign: 'center',
   marginLeft: 30
  },
  leftFooterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  leftFooterImage: {
    height: 250,
    width: 150
  }
});
