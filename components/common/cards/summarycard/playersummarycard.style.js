import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.tertiary,
    ...SHADOWS.medium,
    shadowColor: COLORS.tertiary,
  },
  summaryContainer: {
    width: 50,
    height: 50,
    borderRadius:5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
  headShot: {
    position: "relative",
    marginTop: 5,
    width: "110%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  playerName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.lightWhite,
  },
  summaryStats: {
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: COLORS.yellow,
    marginTop: 3,
  },
});

export default styles;
