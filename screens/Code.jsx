import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from './../assets/logo2.png';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const Code = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const navigation = useNavigation();

  const handleConfirm = () => {
    const correctConfirmationCode = '123456';

    
    if (confirmationCode === correctConfirmationCode) {
    
      navigation.navigate('Password');
    } else {
      
    alert( 'Código de confirmación incorrecto. Por favor, inténtalo de nuevo.');
    }
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


      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#750404" />
      </TouchableOpacity>



      {/* Título "Restablecer Contraseña" */}
      <Text style={styles.title}>Restablecer Contraseña</Text>

      {/* Icono de información y texto */}
      <View style={styles.infoContainer}>
        <MaterialIcons name="info" size={24} color="#750404" />
        <Text style={styles.infoText}>
          Hemos enviado un código de confirmación {'\n'}
          a tu teléfono para la recuperación {'\n'}
          de la contraseña.
        </Text>     
      </View>

      {/* Campo para insertar el número de teléfono */}
      <Text style={styles.infoText}>Tu numero de teléfono:{'\n'}</Text>
      <TextInput
        placeholder="Número de Teléfono"
        style={styles.input}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      {/* Campo para insertar el código de confirmación */}
      <Text style={styles.infoText}>Código de corfirmacion:{'\n'}</Text>
      <TextInput
        placeholder="Código de Confirmación"
        style={styles.input}
        value={confirmationCode}
        onChangeText={text => setConfirmationCode(text)}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
height:50,
width: 250,
    },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#750404',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins_400Regular',
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

export default Code;

