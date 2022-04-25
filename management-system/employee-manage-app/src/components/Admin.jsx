import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Admin = () => {
  const [form, setForm] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: "",
    status: "",
    team: "",
  });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:8080/employee", form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form className='createEmployee' onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleChange}
        placeholder='Employee Name'
        name='employee_name'
      />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Employee id'
        name='employee_id'
      />
      <select name='title' onChange={handleChange}>
        <option value='intern'>Intern</option>
        <option value='Jr Software Developer'>Jr Software Developer</option>
        <option value='Sr Software Developer'>Sr Software Developer</option>
        <option value='Team Lead'>Team Lead</option>
      </select>
      <input
        type='number'
        onChange={handleChange}
        placeholder='Salary'
        name='salary'
      />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Image'
        name='image'
      />
      <input
        type='text'
        onChange={handleChange}
        placeholder='User Name'
        name='username'
      />
      <input
        type='password'
        onChange={handleChange}
        placeholder='Password'
        name='password'
      />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Enter tasks separated by commas'
        name='tasks'
      />
      <select name='status' id='status' onChange={handleChange}>
        <option value=''>Select Status</option>
        <option value='terminated'>Terminated</option>
        <option value='working'>Working</option>
      </select>
      <select name='team' id='team' onChange={handleChange}>
        <option value=''>Select team</option>
        <option value='frontend'>Frontend</option>
        <option value='backend'>Backend</option>
        <option value='qa'>QA</option>
      </select>
      <input className='createUser' type='submit' value={"submit"} />
    </form>
  );
};
