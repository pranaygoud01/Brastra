import { createFileRoute } from '@tanstack/react-router'
import Wines from '../pages/Wines'

export const Route = createFileRoute('/wines')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Wines/>
}
