import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
const List = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [groceryList] = useState([
    { id: '1', name: 'Manzanas', units: 3, weight: '2.5 kg' },
    { id: '2', name: 'Plátanos', units: 5, weight: '1.2 kg' },
    { id: '3', name: 'Leche', units: 2, weight: '1 L' },
    { id: '4', name: 'Papas', units: 3, weight: '2.5 kg' },
    { id: '5', name: 'Café', units: 5, weight: '1.2 kg' },
    { id: '6', name: 'Avena', units: 2, weight: '1 L' },
    { id: '7', name: 'Avichuela', units: 3, weight: '2.5 kg' },
    { id: '8', name: 'Papaya', units: 5, weight: '1.2 kg' },
    { id: '9', name: 'Zanahoria', units: 2, weight: '1 L' },
    { id: '10', name: 'Sandía', units: 3, weight: '2.5 kg' },
    { id: '11', name: 'Carne de res', units: 5, weight: '1.2 kg' },
    { id: '12', name: 'Arroz', units: 2, weight: '1 L' },
    { id: '13', name: 'Lenteja', units: 2, weight: '1 L' },
    { id: '14', name: 'Fríjol', units: 3, weight: '2.5 kg' },
    { id: '15', name: 'Pera', units: 5, weight: '1.2 kg' },
    { id: '16', name: 'Carne de cerdo', units: 2, weight: '1 L' },
  ]);

  const filteredList = groceryList.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const handlePasswordReset = () => {
    navigation.navigate('Confirmacion');
  };

  return (
    <View style={styles.container}>
        <Image source={require('./../assets/fondoMovil.png')} style={styles.backgroundImage} />
    <View style={styles.overlay}>

      <Text style={styles.title}>LISTA DE MERCADO</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>{`${item.units} unidades - ${item.weight}`}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handlePasswordReset}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
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
      },
  container: {
    flex: 1,
    padding: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:'center',
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    paddingHorizontal: 10,
    fontFamily: 'Poppins_400Regular',
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  itemName: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default List;
