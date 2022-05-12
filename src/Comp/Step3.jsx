import React, { useContext} from "react";
import { useDropzone } from "react-dropzone";
import vid from "../Img/pexels-pixabay-161043 (1).jpg";
import file from "../Img/folder-removebg-preview.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FormContext from "../FormContext/FormContext";
import Swal from "sweetalert2";
import done from "../Img/done-removebg-preview.png";
import { Zoom } from "react-reveal";
const Step3 = () => {
  const { user, setUser } = useContext(FormContext);

  // const [upFiles, setUpFiles] = useState([]);

  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);

      setUser({
        ...user,
        files: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    },
  });

  const images =
    user?.files.length >= 1
      ? user?.files.map((file) => (
          <div key={file.name}>
            <div className="card w-40 mb-2">
              <img
                src={file.preview}
                style={{ width: "200px" }}
                alt="preview"
              />
            </div>
          </div>
        ))
      : "";

  return (
    <div>
      <Zoom left>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="rounded-full border-r-8 border-l-8 border-dotted"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="card w-96 h-80  my-8 image-full rounded-full bg-base-100 shadow-xl ">
          <figure>
            <img src={vid} alt="Shoes" />
          </figure>
          <div className="card-body flex justify-center mx-auto content-center	">
            <img
              src={user?.files.length >= 1 ? done : file}
              className="mx-auto"
              alt=""
              height="100px"
              width="100px"
            />
            <h3 className="text-sky-50">
              {user?.files.length >= 1
                ? `${user?.files.length} Image Uploaded`
                : "Drop Images here"}
            </h3>
            <span>**.img accepted</span>
          </div>
        </div>
      </motion.div>
      </Zoom>

      <div className="container mt-5  justify-center">
        {user?.files.length >= 1 && (
          <>
            <h3>Files Preview</h3>
            <div>{images}</div>
          </>
        )}
      </div>

      <div className="card w-96 flex justify-center content-center bg-base-100 shadow-xl ">
        <motion.button whileHover={{scale:1.1}}
          onClick={() => {
            if (user?.files.length >= 1) {
              navigate("/step4");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Upload At least 1 Image to proceed ...",
              });
            }
          }}
          className="rounded-full btn btn-primary"
        >
          next
        </motion.button>
      </div>
    </div>
  );
};

export default Step3;
