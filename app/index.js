import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import AuthHelperMethods from "../utils/auth";

import {
  LoginModal,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, SIZES, icons } from "../constants";

const Home = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const loggedInStatus = AuthHelperMethods.loggedIn();

  function logout() {
    AuthHelperMethods.logout("id_token");
    window.location.href = "/";
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.bookmark}
              dimension="60%"
              handlePress={() => console.log("go to saved")}
            />
          ),
          headerRight: () => {
            if (loggedInStatus) {
              return (
                <ScreenHeaderBtn
                  iconUrl={icons.logout}
                  dimension="60%"
                  handlePress={() => logout()}
                />
              );
            } else {
              return (
                <ScreenHeaderBtn
                  iconUrl={icons.login}
                  dimension="60%"
                  handlePress={() => setModalVisible(true)}
                />
              );
            }
          },
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
          <LoginModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
