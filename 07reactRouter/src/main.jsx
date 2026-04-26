import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "",
      element: <Home />,
      },
      {path: "About",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
