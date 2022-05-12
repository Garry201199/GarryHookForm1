import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormContext from "../FormContext/FormContext";
import { BiReset } from "react-icons/bi";

const Home = () => {
  const {  setUser } = useContext(FormContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname[location.pathname.length - 1]);
  return (
    <div className="flex justify-center">
      <ul className="steps gap-4 ">
        <li
          className={`step  ${
            location.pathname[location.pathname.length - 1] >= 1 ||
            location.pathname === "/"
              ? "step-primary"
              : ""
          } `}
        >
          {" "}
          <Link to="/">Step 1 </Link>
        </li>
        <li
          className={`step  ${
            location.pathname[location.pathname.length - 1] >= 2
              ? "step-primary"
              : ""
          } `}
        >
          Step 2
        </li>
        <li
          className={`step  ${
            location.pathname[location.pathname.length - 1] >= 3
              ? "step-primary"
              : ""
          } `}
        >
          Step 3
        </li>
        <li
          className={`step  ${
            location.pathname[location.pathname.length - 1] >= 4
              ? "step-primary"
              : ""
          } `}
        >
          Step 4
        </li>
      </ul>
      <button
        className="btn btn-warning btn-sm rounded-full "
        onClick={() => {
          setUser({
            firstName: "",
            lastName: "",
            email: "",
            hasNumber: false,
            phoneNo: null,
            files: [],
          });
          navigate("/");
        }}
      >
        {" "}
        <BiReset fontSize={20} /> reset{" "}
      </button>
    </div>
  );
};

export default Home;
