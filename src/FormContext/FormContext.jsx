import axios from "axios";
import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hasNumber: false,
    phoneNo: null,
    files: [],
  });

  const postUser = async (res) => {
    await axios
      .post(`https://623971b363fdd477ac12bbe2.mockapi.io/HookForm`, res)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <FormContext.Provider value={{ user, setUser, postUser }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
