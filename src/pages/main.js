import React, { Component } from 'react';
import api from "../services/api";
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: "TesteCreathus"
  }
  state = {
    contatoInfo: {},
    content:[],
    page: 0,
  }

  componentDidMount() {
    this.loadContatos();
  }

  loadContatos = async (page = 0) => {
    const response = await api.get(`/contatos?page=${page}`);
    const { content, ...contatoInfo} = response.data.dados;
    
    this.setState({ 
      content:[...this.state.content, ...content], 
      contatoInfo,
      page
     });
  }

  loadMore = () => {
    const {page, contatoInfo} = this.state;
    if (page === contatoInfo.totalPages) {
      return;
    }

    const pageNumber = page + 1;
    this.loadContatos(pageNumber)
  }

  renderItem = ({item}) => (
    <View style={styles.contatoContainer}>
      <Text style={styles.contatoNome}>{item.nome}</Text>
      <Text style={styles.contatoDados}>{item.email}</Text>
      <TouchableOpacity 
        style={styles.contatoButton}
        onPress={() => 
          this.props.navigation.navigate('Contato', { names: item })
        }
      >
        <Text style={styles.contatoButtonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20
  },

  contatoContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  contatoNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  contatoDados: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },

  contatoButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  contatoButtonText: {
    fontSize: 18,
    color: "#DA552F",
    fontWeight:"bold"
  }
});
