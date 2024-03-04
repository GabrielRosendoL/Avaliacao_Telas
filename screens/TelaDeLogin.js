import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TelaDeLogin = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fadeInAnim] = useState(new Animated.Value(0));

  const [loaded] = useFonts({
    Nunito: require('../src/fonts/Nunito.ttf'),
  });

  const playButtonSound = async () => {
    const buttonSound = new Audio.Sound();

    try {
      await buttonSound.loadAsync(require('../src/sounds/sound2.mp3'));
      await buttonSound.playAsync();
    } catch (error) {
      console.error('Erro ao carregar ou reproduzir o som do botão', error);
    }
  };

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const handleLogin = () => {
    console.log('Usuário:', username, 'Senha:', password);
    playButtonSound();
    navigation.navigate('Feed');
  };

  const handleCriarConta = () => {
    console.log('Criar Conta');
    playButtonSound();
    navigation.navigate('CriarConta');
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="#BFBFBF"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#BFBFBF"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={[styles.button, {marginBottom: 10}]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCriarConta}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
    fontFamily: 'Nunito',
  },
  button: {
    backgroundColor: '#2AE45B',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Nunito',
  },
});

export default TelaDeLogin;
