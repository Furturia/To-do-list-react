import { Link } from "react-router-dom";

const Card = ({ todo, onToggle, onDelete }) => {
  console.log(todo);

  return (
    <div className="flex justify-between mt-3 bg-gray-100 p-4 items-center rounded-2xl">
      <Link key={todo.id} state={{ todo: todo }} to={`/${todo.id}`}>
        <h4>{todo.name}</h4>
      </Link>
      <input
        type="checkbox"
        name="done"
        id=""
        checked={todo.status}
        onClick={() => {
          onToggle(todo);
        }}
      />

      <button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Card;
