import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Profile({ navigation }: any) {
  const logout = () => {
    Alert.alert(
      'Шығу',
      'Аккаунттан шыққыңыз келе ме?',
      [
        {
          text: 'Жоқ',
          style: 'cancel',
        },
        {
          text: 'Иә',
          onPress: () =>
            navigation.replace('Login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👩🏻</Text>
      </View>

      <Text style={styles.name}>
        Менің аккаунтым
      </Text>

      <Text style={styles.email}>
        user@gmail.com
      </Text>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          📦  Менің тапсырыстарым
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          ❤️  Таңдаулылар
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          ⚙️  Баптаулар
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logout}
        onPress={logout}
      >
        <Text style={styles.logoutText}>
          Аккаунттан шығу
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    width: '100%',
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 45,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#f1e7f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  avatarText: {
    fontSize: 60,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  email: {
    color: '#888',
    marginBottom: 30,
  },

  item: {
    width: '100%',
    backgroundColor: '#faf7fc',
    padding: 19,
    borderRadius: 16,
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
  },

  logout: {
    width: '100%',
    backgroundColor: '#ffe8e8',
    padding: 18,
    borderRadius: 16,
    marginTop: 15,
  },

  logoutText: {
    color: '#e74c3c',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});