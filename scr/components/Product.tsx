import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Product({
  route,
  navigation,
}: any) {
  const product = route.params?.product;

  const addToCart = () => {
    Alert.alert(
      'Сәтті! 🛍️',
      'Тауар себетке қосылды'
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.emoji}>
          {product?.image || '👗'}
        </Text>
      </View>

      <Text style={styles.name}>
        {product?.name || 'Көйлек'}
      </Text>

      <Text style={styles.price}>
        {product?.price || '18 990 ₸'}
      </Text>

      <Text style={styles.description}>
        Сапалы материалдан жасалған сәнді әйелдер
        киімі. Күнделікті өмірге де, ерекше
        кездесулерге де өте ыңғайлы.
      </Text>

      <Text style={styles.label}>
        Өлшемді таңдаңыз
      </Text>

      <View style={styles.sizes}>
        <TouchableOpacity style={styles.size}>
          <Text>XS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.size}>
          <Text>S</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.size}>
          <Text>M</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.size}>
          <Text>L</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.size}>
          <Text>XL</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={addToCart}
      >
        <Text style={styles.buttonText}>
          СЕБЕТКЕ ҚОСУ
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cart}>
          Себетке өту →
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

  image: {
    height: 320,
    backgroundColor: '#f5edf8',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  emoji: {
    fontSize: 150,
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 20,
  },

  price: {
    fontSize: 22,
    color: '#9b59b6',
    fontWeight: 'bold',
    marginTop: 7,
  },

  description: {
    color: '#777',
    lineHeight: 22,
    marginVertical: 15,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  sizes: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 20,
  },

  size: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 16,
    marginRight: 8,
  },

  button: {
    backgroundColor: '#9b59b6',
    height: 57,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cart: {
    color: '#9b59b6',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 18,
  },
});