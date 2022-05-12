import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pe1 from "../Img/pe2.jpg";
import FormContext from "../FormContext/FormContext";
import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion'


const Step1 = () => {
  const { user, setUser } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: user.firstName, lastName: user.lastName },
  });
  const watching = watch(["firstName", "lastName"]);
  const navigate = useNavigate();
  var hasNumber = /\d/;

  const onFormSubmit = (res) => {
    console.log(res);
    navigate("/step2");
    setUser({ ...user, firstName: res.firstName, lastName: res.lastName });
  };

  return (
    <Fade left>
  
    <div>
      <div className="card w-96 font-mont  m-4 bg-sky-300  shadow-xl image-full">
        <figure>
          <img src={pe1} height="400" alt="Shoes" />
        </figure>
        <form onSubmit={handleSubmit(onFormSubmit)} className="card-body">
          <h2 className="card-title flex mb-8 justify-center">Step 1</h2>

          
          <motion.input whileHover={{scale: 1.1}}
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className={`input input-bordered  ${
              errors.firstName ? "input-error" : "input-primary"
            }  w-full max-w-xs`}
          />
          <div className="mb-9">
            <h3 className="text-red-400 ">
              {errors && errors.firstName?.message}
            </h3>
            <h3 className="text-red-400 ">
              {watching && hasNumber.test(watching[0])
                ? "First Name Must Not contain any numerical value"
                : ""}
            </h3>
          </div>

          <motion.input whileHover={{scale: 1.1}}
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className={`input input-bordered  ${
              errors.lastName ? "input-error" : "input-primary"
            }  w-full max-w-xs`}
          />
          <div className="mb-9">
            <h3 className="text-red-400 mb-9">
              {errors && errors.lastName?.message}
            </h3>
            <h3 className="text-red-400 ">
              {watching && hasNumber.test(watching[1])
                ? "Last Name Must Not contain any numerical value"
                : ""}
            </h3>
          </div>
          <div className="card-actions  justify-center">
            <motion.button  whileHover={{scale: 1.1}}
              type="submit"
              className="btn w-full rounded-full  btn-primary"
            >
              Next
            </motion.button>
          </div>
        </form>
      </div>
    </div>
    </Fade>
  );
};

export default Step1;
