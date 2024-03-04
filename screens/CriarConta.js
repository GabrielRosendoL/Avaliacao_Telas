import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CriarConta = () => {
  const navigation = useNavigation();

  const handleCriarConta = (values) => {
    console.log('Criar conta:', values);
    playButtonSound();
    navigation.navigate('TelaDeLogin');
  };

  const playButtonSound = async () => {
    const buttonSound = new Audio.Sound();

    try {
      await buttonSound.loadAsync(require('../src/sounds/sound2.mp3'));
      await buttonSound.playAsync();
    } catch (error) {
      console.error('Erro ao carregar ou reproduzir o som do botão', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Formik
        initialValues={{ username: '', email: '', password: '', repeatPassword: '' }}
        onSubmit={(values) => handleCriarConta(values)}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'O nome de usuário é obrigatório';
          }
          if (!values.email) {
            errors.email = 'O email é obrigatório';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Endereço de email inválido';
          }
          if (!values.password) {
            errors.password = 'A senha é obrigatória';
          }
          if (!values.repeatPassword) {
            errors.repeatPassword = 'A confirmação de senha é obrigatória';
          } else if (values.repeatPassword !== values.password) {
            errors.repeatPassword = 'As senhas não coincidem';
          }
          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              placeholderTextColor="#BFBFBF"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#BFBFBF"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#BFBFBF"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Repetir Senha"
              placeholderTextColor="#BFBFBF"
              onChangeText={handleChange('repeatPassword')}
              onBlur={handleBlur('repeatPassword')}
              value={values.repeatPassword}
              secureTextEntry={true}
            />
            {errors.repeatPassword && <Text style={styles.errorText}>{errors.repeatPassword}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
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
    marginBottom: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default CriarConta;
