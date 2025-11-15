import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import background from "../../../assets/background.png";
import fechar from "../../../assets/fechar.png";
import { useState } from "react";

export default function Main() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ImageBackground
      source={background}
      resizeMode="stretch"
      style={styles.container}
    >
      <View style={styles.containerForm}>
        <View style={styles.containerHeader}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={fechar} style={styles.imgHeader} />
          </TouchableOpacity>
          <Text style={styles.tituloInfo}>Crunchyroll</Text>
        </View>
        <View style={styles.containerLogin}>
          <Text style={styles.textoLogin}>Login</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Endereço de E-mail"
              keyboardType="email-address"
              placeholderTextColor={"#fff"}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor={"#fff"}
            />
            <TouchableOpacity activeOpacity={0.4} style={styles.btnLogin}>
              <Text style={styles.textoBtnLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.nav}>
              <TouchableOpacity activeOpacity={0.4}>
                <Text style={styles.opcao}>ESQUECEU A SENHA?</Text>
              </TouchableOpacity>
              <Text style={styles.pipe}>|</Text>
              <TouchableOpacity activeOpacity={0.4}>
                <Text style={styles.opcao}>CRIAR CONTA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
