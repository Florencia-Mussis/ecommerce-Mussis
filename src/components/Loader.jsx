import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
    return(
        <div className="loader w-100 d-flex justify-content-center ">
            <BarLoader />
        </div>
    )
}

export default Loader