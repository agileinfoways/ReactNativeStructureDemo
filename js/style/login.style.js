import { StyleSheet } from "react-native";
import { COLORS, CONST, FONTS, SCALE } from "../global/constants.global";

export default styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    margin: 20,
    width: CONST.DEVICE_WIDTH - 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  imgStyle: {
    height: 150,
    width: 150,
    resizeMode:'contain'
  },
  inputStyle: {
    width: CONST.DEVICE_WIDTH - 40,
    borderColor: COLORS.BLACK,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: SCALE.INPUT_TEXT_SIZE,
    color: COLORS.GRAYBLACK
  },
  btnStyle: {
    width: CONST.DEVICE_WIDTH - 40,
    backgroundColor: COLORS.CEMENT
  },
  textStyle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: SCALE.TITLE_TEXT_SIZE
  },
  formUp: {
    flex: 0.5,
  },
  formDown: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20
  }
});
