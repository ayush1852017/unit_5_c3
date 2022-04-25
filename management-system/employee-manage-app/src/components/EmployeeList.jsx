import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  const [emps, setEmp] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setEmp(data);
      console.log(data);
    });
    // fetchData(emp);
  }, []);
  return (
    <div className='list_container'>
      {/* On clicking this card anywhere, user goes to user details */}
      {emps.map((e, i) => {
        return (
          <div className='employee_card' key={i}>
            <Link to={`/employee/${e.id}`}>
              <img
                className='employee_image'
                src={e.image}
                height='200px'
                width='200px'
              />
              <span className='employee_name'>{e.employee_name}</span>
              <span className='employee_title'>{e.title}</span>
            </Link>
          </div>
        );
      })}
      ;
    </div>
  );
};
