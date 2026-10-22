import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState('');

  const send = () => {
    if (!email) {
      Alert.alert('Қате', 'Email енгізіңіз');
      return;
    }

    Alert.alert(
      'Дайын!',
      'Қалпына келтіру нұсқаулығы Email-ға жіберілді.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔐</Text>

      <Text style={styles.title}>
        Құпиясөзді ұмыттыңыз ба?
      </Text>

      <Text style={styles.description}>
        Email адресіңізді енгізіңіз. Біз сізге
        құпиясөзді қалпына келтіру нұсқаулығын
        жібереміз.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={send}
      >
        <Text style={styles.buttonText}>ЖІБЕРУ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.back}>← Артқа қайту</Text>
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

  icon: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: 20,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#e1d5e7',
    borderRadius: 16,
    paddingHorizontal: 18,
    backgroundColor: '#faf7fc',
  },

  button: {
    height: 56,
    backgroundColor: '#9b59b6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  back: {
    color: '#9b59b6',
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
  },
});