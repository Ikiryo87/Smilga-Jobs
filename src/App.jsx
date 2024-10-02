import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currItem, setCurrItem] = useState(0);

  const fetchData = async () => {
    // setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.course-api.com/react-tabs-project"
      );
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeCurrItem = (index) => {
    setCurrItem(index);
  };

  if (isLoading) {
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        data={data}
        currItem={currItem}
        changeCurrItem={changeCurrItem}
      />
      <JobInfo data={data} currItem={currItem} />
    </section>
  );
};
export default App;

// const { company, dates, duties, id, order, title } = data;
