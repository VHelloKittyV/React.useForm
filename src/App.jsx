
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("email", { message: "this mail is already taken" });
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto grid p-6">
        <hgroup className="text-center mb-6">
          <h1 className="text-3xl ">Form</h1>
          <p>with React Hook Form</p>
        </hgroup>
        <form className="place-self-center flex flex-col w-full gap-3 bg-gray-100 p-12 rounded-lg" action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="text-blue-900">Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) =>{
                if(!value.includes("@")) return "Invalid Email"
              }
            })}
            type="text"
            className="px-3 py-2 border"
            placeholder="Email"
          />
          {errors.email && <div className="text-red-600">{errors.email.message}</div>}

          {/* Password */}
          <label className="text-blue-900">Password:</label>
          <input 
            {...register("password", {
              required: "Password is required",
              minLength:{value:6, message: "Password is too small"}
            })}
            type="password"
            className="px-3 py-2 border"
            placeholder="Password"
          />
          {errors.password && <div className="text-red-600">{errors.password.message}</div>}

          {/* Select */}
          <label  className="text-blue-900 ">Select:</label>
          <select className="px-3 py-2 border" {...register("select",
              {validate: (value) => value !== "" || "Select is required"})
            }>
            <option value=''></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.select && <div className="text-red-600">{errors.select.message}</div>}

          <button className="btn mt-5 text-white px-3 py-2 cursor-pointer bg-blue-950 hover:opacity-90" disabled={isSubmitting} type="submit">
            {isSubmitting? "Loading...": "Submit"}
          </button>
        </form>
      </div>
    </>
  
            
      
  );
}
