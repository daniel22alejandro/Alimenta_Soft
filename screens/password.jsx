import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import Logo from './../assets/logo2.png';

const Password = () => {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#750404" />
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>Restablecer Contraseña</Text>

      <View style={styles.infoContainer}>
        <MaterialIcons name="info" size={24} color="#750404" />
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
  );
};

const styles = StyleSheet.create({
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
  },
  infoText: {
    fontFamily: 'Poppins_400Regular',
    marginLeft: 10,
    fontSize: 16,
    textAlign:'left',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
  },
  infoText: {
    marginBottom: 5,
    fontFamily: 'Poppins_400Regular',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    marginBottom: 20,
    paddingLeft: 10,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  confirmButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#750404',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});

export default Password;
