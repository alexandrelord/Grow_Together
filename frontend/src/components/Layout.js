import { Outlet } from "react-router-dom"
import NavBar from './NavBar'

export default function Layout() {
  return (
    <main className="App">
        <NavBar />
        <Outlet />
    </main>
  )
}
