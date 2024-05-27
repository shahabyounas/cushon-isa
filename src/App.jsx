import { createBrowserRouter, RouterProvider, Route, Link, Outlet, Navigate } from "react-router-dom"
import AppLayout from './app/hoc/layout/appLayout'
import HomePage from "./app/pages/homepage"
import ComingSoon from "./app/pages/comingSoonPage"
import IndependentISAPage from "./app/pages/independentISAPage"
import './App.css'


function AppLevelHOC(children, show = true){
  if(!show){
    return children
  }
  return <AppLayout>
    {children}
  </AppLayout>
}


function LayoutHOC(children, layout = "app"){
  switch(layout){
    case "app":
      return AppLevelHOC(children);
    default: 
      return children;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: LayoutHOC(<HomePage />),
  },
  {
    path: 'independent-isa',
    element: LayoutHOC(<HomePage />),
  },
  {
    path:'independent-isa-detail',
    element: LayoutHOC(<IndependentISAPage />),
  },
  {
    path: 'funds',
    element: LayoutHOC(<ComingSoon name="funds" />),
  },
  {
    path: 'investments',
    element: LayoutHOC(<ComingSoon name="investments" />),
  },
  {
    path: 'settings',
    element: LayoutHOC(<ComingSoon name="settings" />),
  },
  {
    path: 'plans',
    element: LayoutHOC(<ComingSoon name="plans" />),
  },
  {
    path: 'summary',
    element: LayoutHOC(<ComingSoon name="summary" />),
  },
  {
    path: '*',
    element: <ComingSoon name="404" />
  }
], {
  basename: import.meta.env.BASE_URL
})

function App() {
  return <RouterProvider router={router} />
}

export default App
