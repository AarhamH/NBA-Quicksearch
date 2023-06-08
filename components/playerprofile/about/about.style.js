import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.tertiary,
    marginLeft:-100,
    marginRight:-100,
  },
  headText: {
    marginTop:SIZES.large,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    textAlign: "center"
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    textAlign: "center",
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.bold,
    marginVertical: SIZES.small / 1.25,
  },
  logoImg: {
    width: 80,
    height: 80,
    opacity: 0.6,
    justifyContent:"center",
    marginLeft:"auto",
    marginRight:"auto"
  },
});

export default styles;
