import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import api from "../services/api";
import { Text, Input, Button } from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState(null)
  const [password, setPassword] = useState(null)

  const loginSuccess = () => {
    showMessage({
      message: "Sucesso!",
      description: "Usuário conectado.",
      type: "success"
    });
  };

  const camposError = () => {
    showMessage({
      message: "Erro!",
      description: "Campos Usuário e Senha Obrigatórios.",
      type: "danger"
    });
  };

  const loginError = () => {
    showMessage({
      message: "Erro!",
      description: "Verifique se o Usuário e a Senha estão corretos.",
      type: "danger"
    });
  };

  const submit = () => {
    if (!usuario && !password) {
      camposError();
    } else {
      logar();   
    }
  }

  const logar = async () => {
    try {
      const { data } = await api.get('/usuarios/auth', {
        auth: {
          username: usuario,
          password: password
        }
      });

      if (data.mensagem === 'logado') {
        loginSuccess()
        navigation.reset({
          index: 0,
          routes: [{ name: 'Contatos' }]
        })
      } else {
        loginError()
      }
    } catch (error) {
      loginError();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Creathus Contatos</Text>
      <Input
        placeholder="Usuário"
        onChangeText={value => setUsuario(value)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <Button
        size={30} buttonStyle={styles.button}
        title="Entrar"
        onPress={() =>
          submit()
        }
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    color: '#DA552F',
    fontSize: 23,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#DA552F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
})