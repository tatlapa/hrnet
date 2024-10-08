import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { departments } from "../mock/departments";
import { states } from "../mock/states";
import { ToastContainer } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-3">
      <h1>HRnet</h1>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white rounded-md p-1.5"
      >
        Current Employees
      </button>
      <h2>Create Employee</h2>
      <Form
        departments={departments.map((department: string) => department)}
        states={states.map((state: { name: string; abbreviation: string }) => ({
          name: state.name,
          abbreviation: state.abbreviation,
        }))}
      />
      <ToastContainer />
    </div>
  );
};

export default Create;
