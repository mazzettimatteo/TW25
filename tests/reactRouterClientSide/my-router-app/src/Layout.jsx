import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav> 

            <main>
                <Outlet/>
            </main>

            <footer>
                <small>Mazzoman's site</small>
            </footer>
        </>
    )
}