import React, { useContext } from "react";
import FormContext from "../FormContext/FormContext";
import pic1 from "../Img/pe3.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/LightSpeed";

const Step4 = () => {
  const navigate = useNavigate();
  const { user, setUser, postUser } = useContext(FormContext);
  console.log(user);
  return (
    <Zoom>
      <div>
        <div className="card mt-4 mb-12 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={pic1} alt="Shoes" />
          </figure>

          <div className="card-body">
            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-cyan-200 text-base-200 rounded-box place-items-center">
                Field
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow card bg-cyan-200 text-base-200 rounded-box place-items-center">
                Value
              </div>
            </div>

            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                First Name
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                {user.firstName}
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                Last Name
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                {user.lastName}
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-base-300  hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                Email
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                {user.email}
              </div>
            </div>
            <div className="flex w-full mb-12">
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                Phone No
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow card bg-base-300 hover:bg-black  hover:text-sky-50 rounded-box place-items-center">
                {user.phoneNo}
              </div>
            </div>

            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-cyan-200 text-base-200 rounded-box place-items-center">
                Files Preview
              </div>
            </div>
            <span>Files can't be edited but more files can be added </span>
            {user &&
              user?.files.map((file) => (
                <div key={file.name}>
                  <div className="card w-40 mb-2">
                    <img
                      src={file.preview}
                      style={{ width: "200px" }}
                      alt="preview"
                    />
                  </div>
                </div>
              ))}

            <div className=" card-actions justify-center">
              <div
                className="tooltip  tooltip-secondary"
                data-tip="Files can't be edited, only can be added more"
              >
                <button
                  onClick={() => navigate("/")}
                  className="btn  rounded-full btn-primary"
                >
                  Edit Form{" "}
                </button>
              </div>

              <button
                onClick={() => {
                  postUser(user);
                  Swal.fire(
                    "Good job!",
                    "You have created your entry in BackEnd , Now moving to Home page...",
                    "success"
                  );
                  setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    hasNumber: false,
                    phoneNo: null,
                    files: []
                  });
                  navigate("/");
                }}
                className="btn  rounded-full btn-success"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Step4;
