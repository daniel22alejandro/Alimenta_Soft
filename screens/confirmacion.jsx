import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const Confirmacion = () => {
  const [observation, setObservation] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleConfirmation = () => {
    FingerprintScanner.authenticate({ title: 'Autenticación de huella digital' })
      .then(() => {
        setConfirmationMessage('Confirmación exitosa');
        Alert.alert('Éxito', 'Confirmación exitosa', [{ text: 'OK', onPress: () => setConfirmationMessage('') }]);
      })
      .catch((error) => {
        setConfirmationMessage(`Error de autenticación: ${error.message}`);
      });
  };
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Escribe tus observaciones:</Text>
      <TextInput
        style={{ 
        width: '80%', 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 20 }}
        onChangeText={(text) => setObservation(text)}
        value={observation}
        placeholder="Escribe aquí tus observaciones"
      />
      <Button title="Confirmar con huella" onPress={handleConfirmation} />
      {confirmationMessage ? <Text>{confirmationMessage}</Text> : null}

      <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />

    </View>
    
  );
};
const styles = StyleSheet.create(
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    }),
export default Confirmacion;
