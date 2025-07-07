import React from "react";

import Header from './Header.jsx';
import Footer from './footer.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './sidebar.jsx';
import css from'../Compunents_CSS/AllcomponentS_here.module.css';
import CreatePost from "./Create_post.jsx";
import PostList from "./list_posts.jsx";
import { useState } from 'react';
import PostListContext from "../Store/post-list-store.jsx"; 
function AllComponentsHere() {
let [select , setSelect] = useState("Home");

  return (
    <PostListContext>
   
    <div className={css.container}>
      <Sidebar select = {select} setSelect = {setSelect}/>
      <div className={css.innercontainer}>
      <Header/>
      <div className={css.formorcard}>
        <div className={css.formorcardinner}>
          {select === "Home" ?(<PostList/>) :(<CreatePost/>)}
      
      
      </div>
      </div>
      
      <Footer/>
      </div>
      
      
    </div>
     </PostListContext>
  );
}
export default AllComponentsHere;