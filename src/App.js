import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, StyleSheet } from "react-native";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (titulo && descricao && data) {
      setTarefas([...tarefas, { id: Date.now().toString(), titulo, descricao, data }]);
      setTitulo("");
      setDescricao("");
      setData("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (ex: 13/12/2024)"
        value={data}
        onChangeText={setData}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      <FlatList
        style={styles.lista}
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  lista: {
    marginTop: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

