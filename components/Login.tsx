import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, onChangeUsername] = useState("");
  const [password, OnChangePassword] = useState("");

  const showLogin = () => {
    console.log(`Nome de usuário: ${username}, Senha: ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={onChangeUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={OnChangePassword}
      />
      <Button title="Login" onPress={showLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 5,
    marginBottom: 20,
  },
});
