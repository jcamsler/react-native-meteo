import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#00000060",
  },
  box: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  label: {
    fontSize: 15,
  },
});

export { s };
