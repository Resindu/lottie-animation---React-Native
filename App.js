// import 'react-native-gesture-handler';
// import React in our code
import React, {useState, useEffect, useRef} from 'react';

import { View,Text,StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
       <LottieView source={require('./assets/a.json')} autoPlay loop  style={{width:200,height:200,alignSelf:'center',marginTop:40}}/>
      <Text style={{color:'gray',fontSize:18,alignSelf:'center',marginTop:40}}>Forgot password?</Text>
      <Text style={{color:'black',fontSize:12,alignSelf:'center',marginTop:10}}>Enter your email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TouchableOpacity style={{backgroundColor:'red',padding:20,alignItems:"center",marginTop:20}}>
        <Text style={{color:'white'}}>Send Reset Email</Text>
      </TouchableOpacity>
    </View>
    
     

  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    height: 40,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;