import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import saveImage from './src/services/saveImage';
import { addInfo } from './src/services/add';

export default function App() {
  const [image, setImage] = useState('');
  const [userData, setUserData] = useState({});

  const onInputChange = (name, value) => {
    const newUserData = { ...userData, name: value };
    setUserData(newUserData);
  };

  const getQrCode = () => {
    const response = addInfo(...userData);
    setImage(response);
  };

  return (
    <>
      <StatusBar style="dark" backgroundColor="#ccc" translucent={true} />
      <View style={styles.container}>
        <Text style={styles.title}>QrCode Creator</Text>
        <View>
          <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              onChangeText={(e) => onInputChange('name', e)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Função:</Text>
            <TextInput
              onChangeText={(e) => onInputChange('funcao', e)}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Nif:</Text>
            <TextInput
              onChangeText={(e) => onInputChange('nif', e)}
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity onPress={getQrCode} style={styles.button}>
          <Text style={styles.textStyle}>Gerar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => saveImage(image)}
          style={styles.button}
        >
          <Text style={styles.textStyle}>Download</Text>
        </TouchableOpacity>

        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 26,
    marginBottom: 24,
  },
  image: {
    flex: 0.2,
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    backgroundColor: '#02475e',
    width: '100%',
    margin: 10,
    padding: 10,
  },
  inputContainer: {},
  label: {
    color: '#fff',
  },
  input: {
    width: 380,
    marginVertical: 15,
    backgroundColor: '#f3f3f3',
  },
});
