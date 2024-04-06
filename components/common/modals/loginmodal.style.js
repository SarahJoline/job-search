import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  modalCard: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "left",
  },
  loginHeaderText: {
    fontSize: SIZES.xLarge,
  },
});

export default styles;
