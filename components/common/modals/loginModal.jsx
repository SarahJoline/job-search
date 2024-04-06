import { useState } from "react";
import {
    Alert,
    Modal,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

import styles from './loginmodal.style';
 
const LoginModal = ({ modalVisible, setModalVisible}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
   
  >
      <View style={styles.modalCard}>
        <Text style={styles.loginHeaderText}>Login</Text>
        <Text>Email:</Text>
        <TextInput onChangeText={setEmail} value={email}/>
        <Text>Password:</Text>
        <TextInput onChangeText={setPassword} value={password}/> 
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
  </Modal>
)}

export default LoginModal