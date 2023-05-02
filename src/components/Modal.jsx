import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const Modal = ({ isVisible, deleteItem, itemSelec }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View>
          <Text>Desea Borrar este item?</Text>
          <Text style={styles.modalTextStyle}>{itemSelec.name}</Text>
          <Button title="Eliminar" color={"red"} onPress={() => deleteItem()} />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
  },
  modalTextStyle: {
    fontSize: 30,
  },
});
