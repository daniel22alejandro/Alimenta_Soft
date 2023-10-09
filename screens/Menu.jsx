import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UsuarioIcono from './../assets/UserBlanco.png';

const Menu = ({ navigation }) => {

    const handleLogout = () => {
      navigation.navigate('Home');
    };
    
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
    <View style={styles.overlay}>

        <Image source={UsuarioIcono} style={styles.usuarioIcono} />

        <Text style={styles.nombre}>Luisa Sánchez</Text>
        <Text style={styles.rol}>Madre Comunitaria</Text>

        <TouchableOpacity style={styles.boton} onPress={handleLogout}>
          <Text style={styles.botonTexto}>Cerrar Sesión</Text>
          
        </TouchableOpacity>
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    usuarioIcono: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    nombre: {
      fontSize: 24,
      marginBottom: 10,
      color:'#fff',
      fontFamily: 'Poppins_400Regular',
    },
    rol: {
      fontSize: 18,
      marginBottom: 20,
      color:'#fff',
      fontFamily: 'Poppins_400Regular',
    },
    boton: {
            width: '60%',
            height: 50,
            backgroundColor: '#750404',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            marginTop: 10,
    },
    botonTexto: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Poppins_400Regular',
    },
  });
  
  export default Menu;


 