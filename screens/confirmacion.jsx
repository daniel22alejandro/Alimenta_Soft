import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Confirmacion = () => {
  const navigation = useNavigation();
  const [observation, setObservation] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [acceptance, setAcceptance] = useState(false);

  const handleConfirmation = () => {
    if (!observation) {
      Alert.alert('Advertencia', 'La casilla de observaciones es obligatoria. Por favor, ingresa tus observaciones.');
    } else if (!acceptance) {
      Alert.alert('Advertencia', 'Debes aceptar la información ingresada antes de continuar.');
    } else {
      setConfirmationMessage('¡Confirmación exitosa!');
      navigation.navigate('Finish'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>OBSERVACIONES:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setObservation(text)}
          value={observation}
          placeholder="Escribe aquí tus observaciones"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}><Icon name="information-circle" size={17} color="#fff" />
            Esta casilla es obligatoria para poder continuar. Si no hay ninguna observación, escribe "ninguna".
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setAcceptance(!acceptance)}
          >
            {acceptance && <Icon name="checkmark-circle" size={24} color="#fff" />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            Acepto toda la información ingresada anteriormente.
          </Text>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>

        {confirmationMessage ? <Text>{confirmationMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 130,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    marginBottom: 10,
    paddingLeft: 5,
    fontFamily: 'Poppins_400Regular',
    textAlign:'center',
    backgroundColor: 'rgba(245,245,245,0.3)',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:'center',
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    textAlign:'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxText: {
    color: '#fff',
    flex: 1,
    fontFamily: 'Poppins_400Regular',
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
    backgroundColor: 'rgba(0,0,0,0.3)', 
    justifyContent: 'center',
    alignItems:'center',
  },
  confirmButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#750404',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});

export default Confirmacion;