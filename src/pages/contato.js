import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Contato = ({route}) => (
  <View style={styles.contatoContainer}>
    <Text style={styles.titleText}>Nome: </Text><Text style={styles.detailContato}>{route.params.names.nome}</Text>
    <Text style={styles.titleText}>Email: </Text><Text style={styles.detailContato}>{route.params.names.email}</Text>
    <Text style={styles.titleText}>Sexo: </Text><Text style={styles.detailContato}>{route.params.names.sexo}</Text>
    <Text style={styles.titleText}>Telefone: </Text><Text style={styles.detailContato}>{route.params.names.telefone}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  detailContato: {
    paddingLeft: 20,
  },
  titleText: {
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default Contato;