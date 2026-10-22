import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const categories = [
  ['👗', 'Көйлектер'],
  ['👚', 'Кофта'],
  ['👖', 'Шалбар'],
  ['🧥', 'Курткалар'],
  ['👕', 'Футболкалар'],
  ['👜', 'Сөмкелер'],
  ['👟', 'Аяқ киім'],
  ['💍', 'Аксессуарлар'],
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Категориялар</Text>

      <Text style={styles.subtitle}>
        Өзіңізге ұнайтын категорияны таңдаңыз
      </Text>

      <View style={styles.grid}>
        {categories.map(([icon, name]) => (
          <TouchableOpacity
            key={name}
            style={styles.item}
          >
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.name}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 45,
  },

  subtitle: {
    color: '#888',
    marginTop: 7,
    marginBottom: 25,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  item: {
    width: '48%',
    backgroundColor: '#faf7fc',
    borderRadius: 22,
    paddingVertical: 25,
    alignItems: 'center',
    marginBottom: 15,
  },

  icon: {
    fontSize: 50,
  },

  name: {
    fontWeight: '600',
    marginTop: 10,
  },
});