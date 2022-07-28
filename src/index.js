import React from "react";
import ReactDOM from "react-dom/client";
import {faker} from "@faker-js/faker";
import CommentDetails from "./CommentDetails";

const App =() =>{
return (
    <div className="ui container comments">
       <CommentDetails author ="Shubham" when="Today at 5:42PM" what="How artistic!" source ={faker.image.avatar()}/>
       <CommentDetails author ="Vikashini" when ="Yesterday at 5:42PM" what="Nice!"  source ={faker.image.avatar()}/>
       <CommentDetails author ="Amruta" when = "Today at 04:00PM" what="Wow!"  source ={faker.image.avatar()}/>
       <CommentDetails author ="Hariom" when = "Today at 9 pm" what="Totally agreed"   source ={faker.image.avatar()}/>

        </div> 
        
    
)
}



// ReactDOM.render(<App />,document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)