import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '296,65',
    date: '05/02/2023',
    type: 0 // 0 quer dizer despesas
  },  
  {
    id: 2,
    label: 'Boleto conta água',
    value: '134,55',
    date: '04/02/2023',
    type: 0 // 0 quer dizer despesas
  },
  {
    id: 3,
    label: 'Pix cliente X',
    value: '1.236,65',
    date: '02/02/2023',
    type: 1 // 1 quer dizer entrada
  },
  {
    id: 4,
    label: 'Pix empresa Y',
    value: '7.236,65',
    date: '02/02/2023',
    type: 1 // 1 quer dizer entrada
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Junior Braz" />

      <Balance balance="15.458,60" expenses="5.162,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={ (item) => String(item.id) } 
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
