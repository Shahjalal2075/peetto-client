import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";
import Test from "../Pages/SharedSection/test";

const Root = () => {

    return (
        <div className="bg-[#ffffff] min-h-[100vh] font-inter">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;