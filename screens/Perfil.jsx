import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import UsuarioIcono from './../assets/UserBlanco.png'; 
import * as SplashScreen from 'expo-splash-screen';


const Perfil = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.overlay}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloCasilla:{
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
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
    borderColor: 'white',
    borderRadius: 40,
    textAlign: 'center',
    width: '120%',
    height: 30,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: 'rgba(245,245,245,0.3)',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  usuarioIcono: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
  },
  infoContainer: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
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
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
});

export default Perfil;
