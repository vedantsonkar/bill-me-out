import React from "react";
import { StyleSheet, View, TextInput, ScrollView, Text } from "react-native";

interface CardData {
  id: number;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the first card",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the second card",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the first card",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the second card",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the first card",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the second card",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the first card",
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is the second card",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cardData.map((card) => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingVertical: 20,
    width: "100%",
    height: "100%",
  },
  searchBar: {
    padding: "2.5%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginHorizontal: "5%",
    marginTop: "15%",
    marginBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 50,
  },
  searchInput: {
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 25,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 185,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default HomeScreen;
