import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Modal from "./src/components/modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelec, setItemSelec] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  function changeText(text) {
    setTextItem(text)
  }

  function addItem() {
    setList(prevState => [
      ...prevState,
      { name: textItem, id: Math.random().toString() }
    ])
    setTextItem("")
  }

  function onHandleModal(item) {
    setItemSelec(item)
    setModalVisible(true)
  }

  function deleteItem(item) {
    setList(prevState =>
      prevState.filter(element => element.name !== item.name))
    setModalVisible(false)
  }

  function renderItem({ item }) {
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <Button title="X" onPress={() => onHandleModal(item)} color={"red"} />
    </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Lista de Compras</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="Añadir Item..."
            style={styles.input}
            onChangeText={changeText}
            value={textItem}
          />
          <Button title="Agregar" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => deleteItem(itemSelec)}
        itemSelec={itemSelec}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "black",
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
