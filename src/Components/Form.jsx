import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useOutletContext } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    des: "",
  });

 const { onCreate } = useOutletContext();
  

  const navigate = useNavigate()
  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div>
      name :{" "}
      <input
        type="text"
        name="name"
        onInput={(e) => {
          onChange(e);
        }}
      />
      description :{" "}
      <input
        type="text"
        name="des"
        onInput={(e) => {
          onChange(e);
        }}
      />
      <button
        onClick={() => {
          onCreate(form);
          navigate("/")
          return;
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
