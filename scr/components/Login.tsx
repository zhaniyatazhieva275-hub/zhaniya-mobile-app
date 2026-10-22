import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email || !password) {
      Alert.alert('Қате', 'Email және құпиясөзді енгізіңіз');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LAVENDER</Text>
      <Text style={styles.subtitle}>Fashion for girls 💜</Text>

      <Text style={styles.title}>Қош келдіңіз!</Text>
      <Text style={styles.text}>Аккаунтыңызға кіріңіз</Text>

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
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgot}>
          Құпиясөзді ұмыттыңыз ба?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>КІРУ</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <Text style={styles.text}>Аккаунтыңыз жоқ па?</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.register}> Тіркелу</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#9b59b6',
    textAlign: 'center',
    letterSpacing: 3,
  },

  subtitle: {
    textAlign: 'center',
    color: '#999',
    marginTop: 5,
    marginBottom: 45,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },

  text: {
    color: '#888',
    marginTop: 7,
    marginBottom: 25,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#e1d5e7',
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#faf7fc',
  },

  forgot: {
    color: '#9b59b6',
    textAlign: 'right',
    marginBottom: 20,
  },

  button: {
    height: 56,
    backgroundColor: '#9b59b6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  register: {
    color: '#9b59b6',
    fontWeight: 'bold',
  },
});