import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormContext from "../FormContext/FormContext";
import pe1 from "../Img/pe2.jpg";
import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion'
const Step2 = () => {
  const { user, setUser } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      phoneNo: user.phoneNo,
      hasNumber: user.hasNumber,
    },
  });

  console.log(errors);
  const navigate = useNavigate();

  const [hasNumber, setHasNumber] = useState(user.hasNumber || false);

  const onFormSubmit = (res) => {
    console.log(res);
    navigate("/step3");

    setUser({
      ...user,
      email: res.email,
      hasNumber: hasNumber,
      phoneNo: res.phoneNo,
    });
  };
  return (
    <Fade right >


    <div>
      <div className="card w-96 font-mont  m-4 bg-sky-300 text-rock-100 shadow-xl image-full">
        <figure>
          <img src={pe1} height="400" alt="Shoes" />
        </figure>
        <form onSubmit={handleSubmit(onFormSubmit)} className="card-body">
          <h2 className="card-title flex mb-8 justify-center">Step 2</h2>

          <motion.input whileHover={{scale: 1.1}}
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim,
                message: "Valid Email address is required",
              },
            })}
            className={`input input-bordered  ${
              errors.firstName ? "input-error" : "input-primary"
            }  w-full max-w-xs`}
          />
          <div className="mb-9">
            <h3 className="text-red-400 ">{errors && errors.email?.message}</h3>
          </div>

          <div>
            <label className="label ">
              <input
                type="checkbox"
                checked={hasNumber}
                onChange={() => setHasNumber(!hasNumber)}
                // onClick={() => }
                className="checkbox mb-4 checkbox-primary"
              />
              <h3 className="text-sky-50 ">Do you have a phone </h3>
            </label>
            {hasNumber && (
              <>
                <motion.input whileHover={{scale: 1.1}}
                  type="text"
                  className="input mb-4 input-bordered input-primary w-full max-w-xs"
                  placeholder="Enter phone number"
                  {...register("phoneNo", {
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                      message: "10 Digit phone no is required",
                    },
                  })}
                />
                <div className="mb-9">
                  <h3 className="text-red-400 ">
                    {errors && errors.phoneNo?.message}
                  </h3>
                  {/* <h3 className="text-red-400 ">{watching && hasNumber.test(watching[0]) ? 'First Name Must Not contain any numerical value':''}</h3> */}
                </div>
              </>
            )}
          </div>
          <div className="card-actions  justify-center">
            <motion.button whileHover={{scale:1.1}}
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

export default Step2;
