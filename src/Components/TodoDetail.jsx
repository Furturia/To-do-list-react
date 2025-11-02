import { Link, useLocation, useParams } from "react-router-dom";

export default function TodoDetail({ name, id, des }) {
  const params = useParams();
  const location = useLocation();
  console.log("detail");
  console.log("state");
  console.log(location.state);
  

  return (
    <>
    <Link to={"/"}>Back</Link>
      <p>id: {location.state?.todo?.id} </p>
      <p> name : {location.state?.todo?.name} </p>
      <p>description : {location.state?.todo?.des} </p>
      <p>done : <input type="checkbox" checked={location.state?.todo?.done}  name="" id="" readOnly/></p>
    </>
  );
}
