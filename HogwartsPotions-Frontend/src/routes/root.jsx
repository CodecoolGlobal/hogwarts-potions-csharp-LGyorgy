import { Outlet } from "react-router-dom";

const Root = () => {
    return <>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Hogwarts Potions</span>
        </nav>
        <div id="content">
            <Outlet />
        </div>
    </>
}

export default Root;