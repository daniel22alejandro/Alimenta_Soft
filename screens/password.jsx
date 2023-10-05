import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Logo from './../assets/Logo.png';

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
      


<TouchableOpacity style={styles.backButton}>
  <MaterialIcons name="arrow-back" size={24} color="#750404" />
</TouchableOpacity>

<Image source={Logo} style={styles.logo} />
<Text style={styles.Title}>ALIMENTAR SOFT</Text>


<Text style={styles.title}>Restablecer Contraseña</Text>

    
      <Text style={styles.infoText}>Contraseña:</Text>
      <TextInput
        placeholder="Nueva Contraseña"
        style={styles.input}
        secureTextEntry
        value={Password}
        onChangeText={text => setPassword(text)}
      />

      
      <Text style={styles.infoText}>Confirmar Contraseña:</Text>
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
  logo:{
    width: 130,
    height: 130,
  },
  
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#750404',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    marginBottom: 10,
    paddingLeft: 10,
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
    fontWeight: 'bold',
  },
});

export default Password;