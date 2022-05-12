import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Comp/Home";
import Step1 from "./Comp/Step1";
import Step2 from "./Comp/Step2";
import Step3 from "./Comp/Step3";
import Step4 from "./Comp/Step4";
import { FormProvider } from "./FormContext/FormContext";
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <div className="container w-fit mx-auto ">
      <Fade left cascade>
        <h1 className="text-4xl font-pac text-teal-300 my-8 text-center ">
       Garry Hook Form
      </h1>
      </Fade>
      
      <FormProvider>
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
