import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";


const DefualtLayout = ({children}) =>{
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
 
export default DefualtLayout;

