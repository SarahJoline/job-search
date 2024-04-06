import {
    Alert,
    Modal,
    Pressable,
    Text,
    View
} from "react-native";

// import styles from './screenheader.style'

const LoginModal = ({ modalVisible, setModalVisible}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
  >
    <View>
      <View>
        <Text>Hello World!</Text>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)}

export default LoginModal