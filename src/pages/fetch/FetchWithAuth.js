import { useGlobalContext } from "../../contextAPI";
import FetchData from "./FetchData";
import { useState, useEffect } from "react";

const FetchWithAuth = () => {
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
      {store.getState().isLoggedIn ? (
        isDataAvailable && <FetchData data={data} />
      ) : (
        <p className="fetch-data__not-authorized">
          You are not authorized to view page content.
        </p>
      )}
    </>
  );
};

export default FetchWithAuth;
