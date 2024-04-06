import { StyleSheet } from "react-native";

import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  modalCard: {
    padding: 30,
    justifyContent: "center",
    alignItems: "left",
    gap: SIZES.small,
  },
  closeBtn: {
    alignSelf: "flex-end",
  },
  loginHeaderText: {
    fontSize: SIZES.xLarge,
  },
});

export default styles;
