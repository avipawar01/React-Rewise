import { BsChat } from "react-icons/bs"
import Navbar from "./components/Navbar"
import React from "react"
import Footer from "./components/Footer"
import Counter from "./pages/Counter"
import API from "./pages/API"
import APIII from "./pages/APIII.jsx"
import Dummy from "./pages/Dummy.jsx"
import Cart from "./pages/Cart.jsx"
import Comment from "./pages/Comment.jsx"
import Quote from "./pages/Quote.jsx"
import Recipe from "./pages/Recipe.jsx"
import Todo from "./pages/Todo.jsx"
import Timer from "./components/UseREF.jsx"



function App() {

  return (
    <>
      <Navbar title={"React"} name={"avinash"}  surname={"pawar"} />

      {/* <BsChat className="w-[100px] h-[100px]" /> */}

      {/* <Counter /> */}
      {/* <Footer /> */}
      {/* <API /> */}
        {/* <APIII /> */}
      {/* <Dummy /> */}
      {/* <Cart /> */}
      {/* <Comment /> */}
      {/* <Quote /> */}
      {/* <Recipe /> */}
      {/* <Todo /> */}

      {/* <Timer /> */}
      
    </>
  )
}

export default App
