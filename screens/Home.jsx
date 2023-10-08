import React from 'react';
import { TextInput } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Logo from './../assets/Logo.png';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const Home = () => {
  const navigation = useNavigation();

  const handleForgotPasswordPress = () => {
    navigation.navigate('Code');
  };

  const handleLoginPress = () => {
    navigation.navigate('Start');
  };
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.logo} />
      <Text style={styles.tittle}>ALIMENTAR SOFT</Text>


      <TextInput
        placeholder="Usuario"
        style={styles.input}
      />
      <View style={styles.line} />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />
      

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>


      <Text style={styles.forgotPassword} onPress={handleForgotPasswordPress}>
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    textDecorationLine: 'underline',
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    marginBottom: 20,
    color: '#750404'
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    marginBottom: 10,
    paddingLeft: 5,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins_400Regular',
    textAlign:'center',
  },
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#750404',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  logo:{
    width: 130,
    height: 130,
  },
});

export default Home;
