import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },

  imageContainer: {
    width: "100%",
    height: 700,
    zIndex: 0,
  },

  imgBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  // GRADIENT QUE FAZ A SOMBRA EMBAIXO
  bottomShadow: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 300, // aumenta ou diminui a intensidade da sombra
  },
  containerInfo: {
    flex: 1,
    alignItems: "center",
    marginTop: -120,
    width: 400,
    zIndex: 1,
  },
  tituloInfo: {
    fontSize: 26,
    color: "#EC5D0A",
    fontWeight: "bold",
  },
  paragrafoInfo: {
    color: "#fff",
    fontWeight: "bold",
  },
  containerMenu: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#080505",
    width: 450,
    height: 450,
    position: "relative",
    top: -40,
    marginTop: -50,
  },
  imgBtnCadastrar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textoBtnCadastrar: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btnCadastrar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    backgroundColor: "#f5b214",
    padding: 5,
    height: 40,
  },
  textoBtnLogin: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EC5D0A",
  },
  btnLogin: {
    flex: 1,
    width: 350,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: "#EC5D0A",
    backgroundColor: "#000",
  },
  paragrafoInfoSec: {
    color: "#EC5D0A",
    marginTop: 20,
  },
});
