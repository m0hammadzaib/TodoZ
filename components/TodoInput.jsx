import { StyleSheet, Text, View,TextInput,Pressable} from 'react-native'
import React from 'react'

const TodoInput = ({input,value,onSubmit}) => {
  return (
    <View className='flex-row gap-4 mt-10 bg-gray-600 p-1 pr-3 pl-3 rounded-3xl justify-between items-center w-10/12'>
     <TextInput onChangeText={input} value={value} placeholder='Add todo' className='bg-gray-600 rounded-xl p-5 text-gray-300'/>
     <View>
      <Pressable className='p-4 pl-6 pr-6 bg-blue-600 rounded-3xl' onPress={onSubmit}><Text className='text-white font-bold'>Add</Text></Pressable>
     </View>
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({})