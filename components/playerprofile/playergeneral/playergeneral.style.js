import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  headShotBox: {
    width: 250,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  headShotImg: {
    width: "80%",
    height: "80%",
  },
  playerNameBox: {
    marginTop: 0,
  },
  playerName: {
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  positionNameBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  positionName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.medium,
  },
  jerseyBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jerseyNum: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
