import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Register({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    if (!name || !email || !password) {
      Alert.alert('Қате', 'Барлық жолды толтырыңыз');
      return;
    }

    Alert.alert(
      'Сәтті!',
      'Аккаунтыңыз құрылды 🎉',
      [
        {
          text: 'Жалғастыру',
          onPress: () => navigation.replace('Home'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LAVENDER</Text>

      <Text style={styles.title}>Тіркелу</Text>
      <Text style={styles.subtitle}>
        Жаңа аккаунт ашыңыз
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Аты-жөніңіз"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Құпиясөз"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={register}
      >
        <Text style={styles.buttonText}>ТІРКЕЛУ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.login}>
          Аккаунтыңыз бар ма?{' '}
          <Text style={styles.bold}>Кіру</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },

  logo: {
    textAlign: 'center',
    color: '#9b59b6',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 45,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    color: '#888',
    marginTop: 7,
    marginBottom: 25,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#e1d5e7',
    backgroundColor: '#faf7fc',
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    height: 56,
    backgroundColor: '#9b59b6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  login: {
    textAlign: 'center',
    color: '#888',
    marginTop: 25,
  },

  bold: {
    color: '#9b59b6',
    fontWeight: 'bold',
  },
});