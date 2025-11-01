import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "ho",
      des: "ss",
      done: false,
    },
  ]);

  const [isCreate, setIsCreate] = useState(false);

  function onToggle(todoTog) {
    setTodoList(
      todoList.map((todo) => {
        return todoTog.id === todo.id ? { ...todo, done: !todo.done } : todo;
      })
    );
  }

  function onDelete(id) {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  function onCreate(todo) {
    setTodoList([...todoList, {
      id: todoList.length,
      name: todo.name,
      des: todo.des,
      done: false,
    }])
  }

  return (
    <div>
      {isCreate && (
        <div>
          <Form onCreate={onCreate} />
        </div>
      )}
      <div>
        <button onClick={() => setIsCreate(!isCreate)}>+</button>
        {todoList.map((todo) => {
          return (
            <Card
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
