import "./global.css";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

export default function App() {

  const [text, settext] = useState("");
  const [submit, setsubmit] = useState([]); 

  const handlesubmit = () => {
    if (text.trim().length === 0) return;

    setsubmit([...submit, { text: text, completed: false }]);
    settext("");
  };

  const handleDelete = (index) => {
  setsubmit(submit.filter((_, i) => i !== index));
};

const toggleComplete = (index) => {
  setsubmit(
    submit.map((item, i) =>i === index ? { ...item, completed: !item.completed } : item));
};


  return (
    <SafeAreaView className="flex-1 items-center bg-black">
      <Text className="text-blue-600 text-5xl mt-5 font-extrabold">TodoZ</Text>

      <TodoInput 
        value={text}  
        input={settext} 
        onSubmit={handlesubmit} 
      />
     <TodoList list={submit} onDelete={handleDelete} onToggle={toggleComplete}/>
    </SafeAreaView>
  );
}
