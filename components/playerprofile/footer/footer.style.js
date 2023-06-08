import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  footerText: {
    color:COLORS.lightWhite,
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
  }
});

export default styles;
