import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import { Link, Outlet, useNavigate } from "react-router-dom";

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
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        name: todo.name,
        des: todo.des,
        done: false,
      },
    ]);
    setIsCreate(!isCreate);
  }
  const navigate = useNavigate()

  return (
    <div>
      <Outlet context={{ onCreate: onCreate }} />
      
      <div>
        <button onClick={() => navigate("/createTodo",{onCreate : onCreate})}>+</button>
        {todoList.map((todo) => {
          return (
            
              <Card key={todo.id}
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
