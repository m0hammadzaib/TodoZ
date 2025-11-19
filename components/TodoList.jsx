import { StyleSheet, Text, View,FlatList} from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,onDelete,onToggle}) => {
  return (
    <View className='mt-5'>
     <FlatList 
     data={list}
     keyExtractor={(item,index)=> index.toString()} 
     renderItem={({item,index})=> <TodoItem text={item}  onToggle={() => onToggle(index)} onDelete={() => onDelete(index)}/>}
     />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})