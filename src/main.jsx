import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Form from './Components/Form.jsx';
import TodoDetail from './Components/TodoDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "createTodo", 
        element: <Form />
      }
    ]
  }
  ,{
    path: "/:id",
    element: <TodoDetail/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
)
