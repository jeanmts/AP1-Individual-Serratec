import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import background from "../../../assets/background.png";
import icon from "../../../assets/rei.png";
const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.imgBackground}
      >
        <View style={styles.containerInfo}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.90)", "rgba(0,0,0,1)"]}
            style={StyleSheet.absoluteFillObject}
          />
          <Text style={styles.tituloInfo}>Crunchyroll</Text>
          <Text style={styles.paragrafoInfo}>
            Todos os seus animes favoritos. Agora num só lugar.
          </Text>
        </View>

        <View style={styles.containerMenu}>
          <TouchableOpacity activeOpacity={0.7} style={styles.btnCadastrar}>
            <Image source={icon} style={styles.imgBtnCadastrar} />
            <Text style={styles.textoBtnCadastrar}>iniciar Teste Gratuito</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin}>
            <Text style={styles.textoBtnLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.paragrafoInfoSec}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.paragrafoInfoSec}>
              Restaurar Compras de iTunes
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
