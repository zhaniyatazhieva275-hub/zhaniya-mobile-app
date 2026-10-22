import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const products = [
  {
    id: 1,
    name: 'Күлгін көйлек',
    price: '18 990 ₸',
    image: '👗',
  },
  {
    id: 2,
    name: 'Қызғылт худи',
    price: '15 990 ₸',
    image: '🧥',
  },
  {
    id: 3,
    name: 'Ақ футболка',
    price: '9 990 ₸',
    image: '👕',
  },
  {
    id: 4,
    name: 'Қара юбка',
    price: '12 990 ₸',
    image: '👗',
  },
];

export default function Home({ navigation }: any) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>
            Қош келдіңіз 💜
          </Text>

          <Text style={styles.logo}>LAVENDER</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cart}>🛍️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerSmall}>
          ЖАҢА КОЛЛЕКЦИЯ
        </Text>

        <Text style={styles.bannerTitle}>
          Spring Collection 🌸
        </Text>

        <Text style={styles.bannerText}>
          Барлық тауарларға -30%
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectionTitle}>
          Категориялар
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Categories')
          }
        >
          <Text style={styles.more}>Барлығы</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.category}>
          <Text style={styles.categoryIcon}>👗</Text>
          <Text>Көйлек</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>👚</Text>
          <Text>Кофта</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>👖</Text>
          <Text>Шалбар</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🧥</Text>
          <Text>Сырт киім</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>
        Танымал тауарлар
      </Text>

      <View style={styles.products}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.product}
            onPress={() =>
              navigation.navigate('Product', {
                product,
              })
            }
          >
            <View style={styles.productImage}>
              <Text style={styles.emoji}>
                {product.image}
              </Text>
            </View>

            <Text style={styles.productName}>
              {product.name}
            </Text>

            <Text style={styles.price}>
              {product.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.profile}
        onPress={() =>
          navigation.navigate('Profile')
        }
      >
        <Text style={styles.profileText}>
          👤 Менің профилім
        </Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },

  welcome: {
    color: '#999',
    fontSize: 13,
  },

  logo: {
    color: '#9b59b6',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  cart: {
    fontSize: 28,
  },

  banner: {
    backgroundColor: '#eadcf5',
    borderRadius: 25,
    padding: 25,
    marginTop: 25,
  },

  bannerSmall: {
    color: '#9b59b6',
    fontWeight: 'bold',
    fontSize: 12,
  },

  bannerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },

  bannerText: {
    color: '#666',
    marginTop: 8,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  more: {
    color: '#9b59b6',
    marginTop: 10,
  },

  category: {
    backgroundColor: '#faf7fc',
    borderRadius: 18,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 85,
  },

  categoryIcon: {
    fontSize: 35,
    marginBottom: 7,
  },

  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  product: {
    width: '48%',
    marginBottom: 18,
  },

  productImage: {
    height: 170,
    backgroundColor: '#f5edf8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 80,
  },

  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 9,
  },

  price: {
    color: '#9b59b6',
    fontWeight: 'bold',
    marginTop: 5,
  },

  profile: {
    backgroundColor: '#9b59b6',
    borderRadius: 16,
    padding: 17,
    marginTop: 10,
  },

  profileText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});