//  import React from 'react';
// import { useForm } from "react-hook-form";
// import "./inputform.css";
// import { useNavigate } from 'react-router-dom';

// const InputForm = ({ setCityError, selectedCity }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     if (!selectedCity) {
//       setCityError("Please Select Your City first");
//       return;
//     }

//     console.log("Form Data:", data);
    
//     navigate("/dashboard");
//   };

//   return (
//     <div className='container-box'>
//       <form onSubmit={handleSubmit(onSubmit)} className='d-flex align-items-start gap-2' id='form'>
        
//         <div className="boxes"> 
//           <input
//             className="form-control"
//             type="datetime-local"
//             {...register("start", {
//               required: "Please select receive date",
//               min: { value: "2023-01-01T00:00", message: "Date is too early" },
//               max: { value: "2025-12-31T23:59", message: "Date exceeds allowed range" },
//             })}
//             id='input'
//           />
//           {errors.start && <div style={{ color: "red" }}>{errors.start.message}</div>}
//         </div>

//         <div className="bixt"> 
//           <label htmlFor="text">Select your Ride End Date</label>
//           <input
//             className="form-control"
//             type="datetime-local"
//             {...register("end", {
//               required: "Please select Ride End date",
//               min: { value: "2023-01-01T00:00", message: "Date is too early" },
//               max: { value: "2025-12-31T23:59", message: "Date exceeds allowed range" },
//             })}
//             id='input'
//           />
//           {errors.end && <div style={{ color: "red" }}>{errors.end.message}</div>}
//         </div>

//         <input type="submit" className='btn btn-outline-primary btn-sm' id='submitbutton' />
//       </form>
//     </div>
//   );
// };

// export default InputForm;
 


import React from 'react';
import { useForm } from "react-hook-form";
import "./inputform.css";
import { useNavigate } from 'react-router-dom';

const InputForm = ({ setCityError, selectedCity }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!selectedCity) {
      setCityError("Please Select Your City first");
      return;
    }

    console.log("Form Data:", data);
    navigate("/dashboard");
  };

 
  const openPicker = (id) => {
    const el = document.getElementById(id);
    if (el && el.showPicker) {
      el.showPicker();
    } else if (el) {
      el.focus();  
    }
  };

  return (
    <div className='container-box'>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex align-items-start gap-2' id='form'>
        
         
        <div
          className="boxes"
          style={{ cursor: "pointer", width: "100%" }}
          onClick={() => openPicker("start-date")}
        >
          <input
            className="form-control"
            type="datetime-local"
            id="start-date"
            {...register("start", {
              required: "Please select receive date",
              min: { value: "2023-01-01T00:00", message: "Date is too early" },
              max: { value: "2025-12-31T23:59", message: "Date exceeds allowed range" },
            })}
          />
          {errors.start && <div style={{ color: "red" }}>{errors.start.message}</div>}
        </div>

 
        <div
          className="bixt"
          style={{ cursor: "pointer", width: "100%" }}
          onClick={() => openPicker("end-date")}
        >
          <label>Select your Ride End Date</label>
          <input
            className="form-control"
            type="datetime-local"
            id="end-date"
            {...register("end", {
              required: "Please select Ride End date",
              min: { value: "2023-01-01T00:00", message: "Date is too early" },
              max: { value: "2025-12-31T23:59", message: "Date exceeds allowed range" },
            })}
          />
          {errors.end && <div style={{ color: "red" }}>{errors.end.message}</div>}
        </div>

        <input type="submit" className='btn btn-outline-primary btn-sm' id='submitbutton' />
      </form>
    </div>
  );
};

export default InputForm;

