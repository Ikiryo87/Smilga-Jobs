import Duties from "./Duties";

const JobInfo = ({ data, currItem }) => {
  const { company, dates, duties, title } = data[currItem];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <spann className="job-company">{company}</spann>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;

// Hard coded
// const { company, dates, duties, title } = data[0];
// State dependend
// const { company, dates, duties, title } = data[currentItem];
