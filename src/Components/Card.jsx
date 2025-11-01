
const Card = ({todo,onToggle,onDelete}) => {
    console.log(todo);
    
  return (
    <div className="flex">
      <h4>{todo.name}</h4>
      <input
        type="checkbox"
        name="done"
        id=""
        checked={todo.status}
        onClick={() => {onToggle(todo)}}
      />

      <button onClick={()=>{onDelete(todo.id)}}>X</button>
    </div>
  );
};

export default Card;
