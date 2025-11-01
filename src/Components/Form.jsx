import { useEffect, useState } from "react";

const Form = ({onCreate}) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    des: "",
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    console.log(form);
    
  },[form])


  return (
    <div>
      name : <input
        type="text"
        name="name"
        onInput={(e) => {
          onChange(e);
        }}
      />
      description : <input
        type="text"
        name="des"
        onInput={(e) => {
          onChange(e);
        }}
      />

      <button onClick={()=>onCreate(form)}>Submit</button>
    </div>
  );
};

export default Form
