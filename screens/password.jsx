import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Logo from './../assets/LogoBlanco.png';

const Password = () => {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  
  const handlePasswordReset = () => {
    console.log(`Contraseña: ${Password}`);
    console.log(`Confirmar Contraseña: ${confirmPassword}`);

    if (Password === confirmPassword) {
      alert('Restablecimiento exitoso');
      navigation.navigate('Home');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>Restablecer Contraseña</Text>

      <View style={styles.infoContainer}>
        <MaterialIcons name="info" size={24} color="#fff" />
        <Text style={styles.infoText}>Introduce tu nueva contraseña</Text>
      </View>

      <Text style={styles.infoText}>Nueva contraseña:</Text>
      <TextInput
        placeholder="Nueva Contraseña"
        style={styles.input}
        secureTextEntry
        value={Password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.infoText}>Introduce nuevamente tu nueva contraseña:</Text>
      <TextInput
        placeholder="Confirmar Contraseña"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={handlePasswordReset}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
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

  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    height: 50,
    width: 250,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
  },
  infoText: {
    fontFamily: 'Poppins_400Regular',
    marginLeft: 10,
    fontSize: 16,
    textAlign:'left',
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
  },
  infoText: {
    marginBottom: 5,
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    marginBottom: 10,
    paddingLeft: 5,
    fontFamily: 'Poppins_400Regular',
    textAlign:'center',
    backgroundColor: 'rgba(245,245,245,0.3)',
  },
  confirmButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#750404',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});

export default Password;
