import { useContext } from "react";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext";

function Navbar({title, name, surname}) {


    const { token, login, logout } = useContext(AuthContext)


    

    return (
        <>
            <h1>{title}</h1>
            <p>{name +" "+ surname}</p>

            <Footer title={title} />
        </>
    )
}

export default Navbar;