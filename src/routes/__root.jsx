import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
      <TanStackRouterDevtools />
    </>
  ),
})