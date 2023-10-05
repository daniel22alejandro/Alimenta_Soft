// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from './../assets/Logo.png';

const Loading = ({ navigation }) => {
  useEffect(() => {
    //simulador
    setTimeout(() => {
      navigation.replace('Home'); 
    }, 3000); 
  }, []);

  return (
    
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.tittle}>ALIMENTAR SOFT</Text>
      <Text>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#750404'
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 130,
    height: 130,
  },
});

export default Loading;
