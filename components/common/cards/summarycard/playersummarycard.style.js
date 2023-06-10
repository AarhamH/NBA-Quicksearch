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
    marginLeft:-10,
    marginRight:-10
  },
  summaryContainer: {
    width: 50,
    height: 50,
    borderRadius:50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    position:"relative",
    overflow:"hidden"
  },
  logoImg: {
    position: "absolute",
    width: "80%",
    height: "80%",
    opacity: 0.5,
  },
  headShot: {
    marginTop:5,
    width: "300%",
    height: "90%",
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
