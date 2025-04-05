import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop' // Make sure the path is correct

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
