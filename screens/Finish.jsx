import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Finish = () => {
  const navigation = useNavigation();

  const handleVolverAlInicio = () => {
    navigation.navigate('Start'); 
  };

  return (
    <View style={styles.container}>
        <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
      <Text style={styles.title}>¡Confirmación exitosa!</Text>
      <TouchableOpacity style={styles.button} onPress={handleVolverAlInicio}>
        <Text style={styles.buttonText}>Volver al Inicio</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  button: {
        width: '60%',
        height: 50,
        backgroundColor: '#750404',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 10,
        alignSelf: 'center',    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
});

export default Finish;