import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { db } from "./db";
import { set, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { universites } from "./university";
import TableComponent from "./components/Table";
import FlatListComponent from "./components/FlatList";
import { getUniversityData } from "./hooks/UniversityData";
import { getTabularView } from "./hooks/TabularView";

export default function App() {
  const [universityData, setUniversityData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tabularView, setTabularView] = useState(false);

  useEffect(() => {
    getUniversityData(universites).then((data) => {
      setUniversityData(data);
      setFilteredData(data);
    });

    getTabularView().then((data) => {
      setTabularView(data);
    });
  }, []);

  handleViewChange = (value) => {
    set(ref(db, "tabularView"), value);
    setTabularView(value);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = universityData.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.location.toLowerCase().includes(text.toLowerCase()) ||
        String(item.overallScores).toLowerCase().includes(text.toLowerCase()) ||
        String(item.researchScore).toLowerCase().includes(text.toLowerCase()) ||
        String(item.industryScore).toLowerCase().includes(text.toLowerCase()) ||
        String(item.outlook).toLowerCase().includes(text.toLowerCase()) ||
        String(item.environmentScore)
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        String(item.teachingScore).toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={!tabularView ? styles.activeButton : styles.button}
          onPress={() => handleViewChange(false)}
        >
          <Text style={styles.buttonText}>FlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tabularView ? styles.activeButton : styles.button}
          onPress={() => handleViewChange(true)}
        >
          <Text style={styles.buttonText}>Tabular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        {tabularView ? (
          <TableComponent data={filteredData} />
        ) : (
          <FlatListComponent data={filteredData} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 60,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 10,
  },
  searchInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 13,
    backgroundColor: "#fff",
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activeButton: {
    backgroundColor: "#3bcd6b",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#72c48d",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentWrapper: {
    paddingTop: 5,
  },
});
