import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import './index.css'
import { Layout } from './Layout.jsx'
import { loadContactByID, loadContacts } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<App />}></Route> */}
      <Route path="/" element={<Layout />} loader={loadContacts}>
        < Route path="/contacts/:contactID" element={<Contact />} loader={({ params }) => loadContactByID(params.contactID)}></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
