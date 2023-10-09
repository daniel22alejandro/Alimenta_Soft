import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from './../assets/LogoBlanco.png';

const Code = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const navigation = useNavigation();

  const handleConfirm = () => {
    const correctConfirmationCode = '1234';

    if (confirmationCode === correctConfirmationCode) {
      navigation.navigate('Password');
    } else {
      alert('Código de confirmación incorrecto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Image source={Logo} style={styles.logo} />
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>


        <Text style={styles.title}>Restablecer Contraseña</Text>

        <View style={styles.infoContainer}>
          <MaterialIcons name="info" size={24} color="#fff" />
          <Text style={styles.infoText}>
            Hemos enviado un código de confirmación{'\n'}
             a tu teléfono para la recuperación {'\n'}
            de la contraseña.
          </Text>
        </View>


        <Text style={styles.infoText}>Tu numero de teléfono:{'\n'}</Text>
        <TextInput
          placeholder="Número de Teléfono"
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />


        <Text style={styles.infoText}>Código de confirmación:{'\n'}</Text>
        <TextInput
          placeholder="Código de Confirmación"
          style={styles.circle}
          value={confirmationCode}
          onChangeText={(text) => setConfirmationCode(text)}
        />

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    backgroundColor: 'rgba(0,0,0,0.3)', // Fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 250,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
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
    backgroundColor: 'rgba(245,245,245,0.3)',
  },
  circle:{width: '70%',
  height: 40,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 80,
  marginBottom: 10,
  paddingLeft: 5,
  textDecorationLine: 'underline',
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

export default Code;