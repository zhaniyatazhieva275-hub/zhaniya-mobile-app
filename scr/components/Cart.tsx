import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Cart() {
  const order = () => {
    Alert.alert(
      'Тапсырыс қабылданды 🎉',
      'Жақында сізбен байланысамыз!'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Менің себетім 🛍️</Text>

      <View style={styles.product}>
        <View style={styles.image}>
          <Text style={styles.emoji}>👗</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            Күлгін көйлек
          </Text>

          <Text style={styles.size}>
            Өлшем: M
          </Text>

          <Text style={styles.price}>
            18 990 ₸
          </Text>

          <View style={styles.counter}>
            <TouchableOpacity style={styles.circle}>
              <Text>-</Text>
            </TouchableOpacity>

            <Text style={styles.number}>1</Text>

            <TouchableOpacity style={styles.circle}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.total}>
        <Text style={styles.totalText}>
          Барлығы
        </Text>

        <Text style={styles.totalPrice}>
          18 990 ₸
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={order}
      >
        <Text style={styles.buttonText}>
          ТАПСЫРЫС БЕРУ
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
  },

  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 45,
    marginBottom: 25,
  },

  product: {
    flexDirection: 'row',
    backgroundColor: '#faf7fc',
    padding: 12,
    borderRadius: 20,
  },

  image: {
    width: 120,
    height: 140,
    backgroundColor: '#f1e7f5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 65,
  },

  info: {
    paddingLeft: 15,
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  size: {
    color: '#888',
    marginTop: 7,
  },

  price: {
    color: '#9b59b6',
    fontWeight: 'bold',
    marginTop: 7,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eadcf5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    marginHorizontal: 12,
    fontWeight: 'bold',
  },

  line: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 25,
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  totalPrice: {
    fontSize: 20,
    color: '#9b59b6',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#9b59b6',
    height: 57,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});