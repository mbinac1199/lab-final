import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TableComponent = ({ data }) => {
  const labels = [
    "Rank",
    "Title",
    "Location",
    "Score",
    "Research",
    "Industry",
    "Outlook",
    "Env",
    "Teach",
  ];
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.table}>
          <View style={styles.table_head}>
            {labels.map((key, index) => (
              <View key={index} style={styles.cell}>
                <Text style={styles.table_head_captions}>{key}</Text>
              </View>
            ))}
          </View>

          {data.slice(0, 50).map((item, index) => (
            <View key={index} style={styles.table_body_single_row}>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.rank}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.title}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.location}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.overallScores}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.researchScore}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.industryScore}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.outlook}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.environmentScore}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.table_data}>{item.teachingScore}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TableComponent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  table_head: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 7,
    backgroundColor: "#3bcd6b",
  },
  table_head_captions: {
    fontSize: 9,
    color: "white",
  },

  table_body_single_row: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 7,
  },
  table_data: {
    fontSize: 9,
  },
  table: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#fff",
  },
  cell: {
    width: "12%",
    paddingHorizontal: 1,
  },
});
