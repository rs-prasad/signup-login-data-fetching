import FetchData from "./FetchData";
import "./fetch.css";
import { useGlobalContext } from "../../contextAPI";
import { useEffect, useState } from "react";

const FetchNormal = () => {
  const { store, fetchMandiData } = useGlobalContext();
  const [data, setData] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetchMandiData();
      setData(store.getState().mandiData);
      setIsDataAvailable(store.getState().isMandiDataAvailable);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="fetch-data__login-status">
        {store.getState().isLoggedIn
          ? "you are logged in."
          : "you are not logged in"}
      </div>
      {isDataAvailable && <FetchData data={data} />}
    </>
  );
};

export default FetchNormal;
