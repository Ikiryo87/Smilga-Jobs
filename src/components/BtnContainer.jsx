const BtnContainer = ({ data, changeCurrItem }) => {
  return (
    <div className="btn-container">
      {data.map((job, index) => {
        return (
          <button
            key={job.id}
            type="button"
            className="job-btn"
            onClick={() => changeCurrItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
