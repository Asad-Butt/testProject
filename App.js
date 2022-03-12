import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native'
import React,{useState} from 'react'

export default function App() {
  const [value, setValue] = useState('')
  const [customerList, setCustomerList] = useState([])

  const addCustomer = () => {
    const array = customerList
    array.push(value)
    setCustomerList(array)
    setValue('')
  }


  const renderItem = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <Text style={styles.subtext}>{item}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        />
        <TouchableWithoutFeedback onPress={addCustomer}>
          <View style={styles.button}>
            <Text style={styles.text}>{'Add Customer'}</Text>
              </View>
        </TouchableWithoutFeedback>
        </View>

        <FlatList 
        data={customerList}
        renderItem={renderItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex: 1},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: '10%',
    alignSelf:'center'
  },
  input: {
    padding: 10,
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
    backgroundColor: '#ccc'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'green'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  itemContainer: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    marginTop: 10
  },
  subtext: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
  }
})