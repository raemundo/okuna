import React from "react";
import OKHeader from "./components/header/OkHeader";

function OKHomePage({ children }) {
    return (
        <>
            <OKHeader />
            {children}
        </>
    )
}

export default OKHomePage;
