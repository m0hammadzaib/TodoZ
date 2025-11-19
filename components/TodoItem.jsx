import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const TodoItem = ({ text, onDelete, onToggle }) => {
  return (
    <View
      className={`bg-gray-800 p-4 rounded-xl mt-5 self-center w-11/12 flex-row items-center justify-between font-bold ${
        text.completed ? "opacity-50" : ""
      }`}
    >
      <Pressable
        onPress={onToggle}
        className="flex-row items-center"
        style={{ gap: 12 }}
      >
        {text.completed ? (
          <Image
            style={{ height: 30, width: 30 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2740/2740618.png",
            }}
          />
        ) : (
          <Image
            style={{ height: 30, width: 30 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2618/2618312.png",
            }}
          />
        )}
        <Text
          className={`text-white text-xl ${
            text.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {text.text}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Image
          style={{ height: 22, width: 22 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/6861/6861362.png",
          }}
        />
      </Pressable>
    </View>
  );
};

export default TodoItem;
