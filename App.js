import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View,TextInput,Button,TouchableOpacity,} from 'react-native';

export default function App() {

const [Km,setKm] = useState('');
const [Combu,setCombu] = useState('');

function CalculoCombustivel(){
  const resultado = Km / Combu 
  alert('O consumo por litro do seu carro é '+resultado);
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Consumo de combustivel
      </Text>
      
      
      <TextInput
      style={styles.input}
        placeholder="Digite os Km percorridos"
        placeholderTextColor='#fff'
        placeholderFontWeight= '900'
        keyboardType="numeric"
        onChangeText={(Km)=>setKm(Km)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite a Quantidade de Combustivel"
        placeholderTextColor='#fff'
        keyboardType="numeric"
        onChangeText={(Combu)=>setCombu(Combu)}
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
      <Text style={styles.textbtn}>Calcular o Consumo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#7bddea',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
  btn:{
    marginTop:300,
    alignItems:'center',
    backgroundColor:'#1d9eaf',
    padding:15,
    borderRadius:15,
    margin:20,
  },
  textbtn:{
    fontSize:30,
    color:"#fff",
    fontWeight:'900',
  },
  input:{
    fontSize:20,
    padding:10,
    backgroundColor:'#1d9eaf',
    margin:10,
    borderRadius:10,
    width:350,
  }
});
