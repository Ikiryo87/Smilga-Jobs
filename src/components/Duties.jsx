import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const key = uuidv4();
        return (
          <div key={key} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;

// const { company, dates, duties, id, order, title } = data;
