import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from './../assets/menu.png'; 
import UserIcon from './../assets/usuario.png'; 
import BasketIcon from './../assets/mercado.png'; 
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


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

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>
   
      <TouchableOpacity onPress={goToMenuScreen} style={styles.menu}>
        <Image source={MenuIcon} style={styles.icon} />
      </TouchableOpacity>


      <Text style={styles.title}>Alimentar Soft</Text>

      <TouchableOpacity onPress={goToProfileScreen} style={styles.usuario}>
        <Image source={UserIcon} style={styles.icon} />
      </TouchableOpacity>


      <TouchableOpacity onPress={goToListScreen} style={styles.basketButton}>
        <Image source={BasketIcon} style={styles.mercado} />
        <Text style={styles.buttonText}>Lista de mercado</Text>
      </TouchableOpacity>


      <Text style={styles.description}>
        En la lista de mercado encontrará cada alimento entregado para así confirmar su entrega.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Poppins_400Regular',
  },
});

export default Start;
