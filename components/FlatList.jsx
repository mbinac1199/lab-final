import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FlatListComponent({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <View style={styles.detailContainer}>
              <Ionicons name="star" size={20} color="orange" />
              <Text style={styles.rank}>{item.rank}</Text>
            </View>

            <Text style={styles.name}>{item.title}</Text>

            <View style={styles.detailContainer}>
              <Ionicons name="location" size={20} color="black" />
              <Text style={styles.country}>{item.location}</Text>
            </View>

            <View style={styles.detailContainer}>
              <Ionicons name="podium" size={20} color="black" />
              <Text style={styles.rating}>Score: {item.overallScores}</Text>
            </View>

            <View style={styles.detailContainer}>
              <Ionicons name="people" size={20} color="black" />
              <Text style={styles.rating}>
                Teaching Score: {item.teachingScore}
              </Text>
            </View>

            <View style={styles.otherDetails}>
              <Text style={styles.overallScores}>
                Classical Rating: {item.researchScore}
              </Text>
              <Text style={styles.rating}>
                Rapid Rating: {item.industryScore}
              </Text>
              <Text style={styles.rating}>Blitz Rating: {item.outlook}</Text>
              <Text style={styles.rating}>
                Blitz Rating: {item.environmentScore}
              </Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 1,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: "100%",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginBottom: 5,
  },
  otherDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  rank: {
    fontSize: 18,
    color: "#000",
  },
  country: {
    fontSize: 16,
    color: "#000",
  },
  overallScores: {
    fontSize: 16,
    color: "#000",
  },
  rating: {
    fontSize: 16,
    color: "#000",
  },
});

export default FlatListComponent;
