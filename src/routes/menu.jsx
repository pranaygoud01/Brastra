import { createFileRoute } from '@tanstack/react-router'
import Menu from '../pages/Menu'

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Menu/>
}
