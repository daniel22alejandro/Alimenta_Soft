import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from './../assets/menu.png'; 
import UserIcon from './../assets/UserBlanco.png'; 
import BasketIcon from './../assets/mercado.png'; 


const Start = () => {
  const navigation = useNavigation();

  const goToMenuScreen = () => {
    navigation.navigate('Menu');
  };

  const goToProfileScreen = () => {
    navigation.navigate('Perfil');
  };

  const goToListScreen = () => {
    navigation.navigate('List');
  };


  return (
    <View style={styles.container}>
   <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
    <View style={styles.overlay}>
      <TouchableOpacity onPress={goToMenuScreen} style={styles.menu}>
        <Image source={MenuIcon} style={styles.icon} />
      </TouchableOpacity>


      <Text style={styles.title}>ALIMENTAR SOFT</Text>

      <TouchableOpacity onPress={goToProfileScreen} style={styles.usuario}>
        <Image source={UserIcon} style={styles.icon} />
      </TouchableOpacity>


      <TouchableOpacity onPress={goToListScreen} style={styles.basketButton}>
        <Text style={styles.buttonText}>Lista de mercado</Text>
        <Image source={BasketIcon} style={styles.mercado} />
      </TouchableOpacity>


      <Text style={styles.description}>
        En la lista de mercado encontrará cada alimento entregado para así confirmar su entrega.
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    left: 20,
  },
  usuario: {
    position: 'absolute',
    right: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 20,
    color:'#fff',
  },
  icon: {
    width: 30,
    height: 30,
  },
  basketButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  mercado: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
  },
});

export default Start;
