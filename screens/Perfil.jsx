import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import UsuarioIcono from './../assets/usuario.png'; 

const Perfil = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

<Image source={UsuarioIcono} style={styles.usuarioIcono} />
      <View style={styles.header}>
        <Text style={styles.titulo}>ALIMENTAR SOFT</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Nombre:</Text>
          <Text style={styles.valorCasilla}>Luisa María Sánchez Tovar</Text>
        </View>

        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Unidad de Servicio:</Text>
          <Text style={styles.valorCasilla}>Huellitas</Text>
        </View>

        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Operador:</Text>
          <Text style={styles.valorCasilla}>Corhuellas</Text>
        </View>

        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Teléfono: </Text>
          <Text style={styles.valorCasilla}>3133203071</Text>
        </View>

        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Documento de identidad: </Text>
          <Text style={styles.valorCasilla}>1084331824</Text>
        </View>

        <View style={styles.casilla}>
          <Text style={styles.tituloCasilla}>Número de contrato: </Text>
          <Text style={styles.valorCasilla}>41002712022</Text>
        </View>
      </View>


      <TouchableOpacity style={styles.volverButton} onPress={() => navigation.navigate('Start')}>
        <Text style={styles.volverButtonText}>Volver</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 5,
  },

 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  usuarioIcono: {
    width: 80,
    height: 80,
    marginRight: 10,
  },

  titulo: {
    fontSize: 24,
    textAlign:'center',
  },

  infoContainer: {
    marginBottom: 20,
    textAlign:'center',
  },

  casilla: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center', 
  },

  valorCasilla: {
    alignItems:'center',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0.5, 
    borderColor: 'black',
    borderRadius: 40,
    textAlign: 'center',
    width: '80%',
    height: 30,
  },

  volverButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#750404',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },

  volverButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    alignItems:'center',
  },
});

export default Perfil;
