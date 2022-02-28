import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Subscription from "./components/Subscription";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [subState, setSubState] = useState(false);
  const [resStatus, setResStatus] = useState(0)
  console.log(resStatus)
  console.log(subState);

  const load = async () => {
    const response = await axios(
      "https://seriescharacters.com/api/howimetyourmother"
    );
    setFetchedData(await response.data);
  };

  
  
  useEffect(() => {
    const timer = setTimeout(() => {
        setSubState(true);
    }, 1000);
    load();
    return () => clearTimeout(timer)
  }, []);

  return (
    <div>
      <Characters fetchedData={fetchedData} setFetchedData={setFetchedData} />
      {subState && (
        <Subscription subState={subState} setSubState={setSubState} resStatus={resStatus} setResStatus={setResStatus} />
      )}
    </div>
  );
};

export default App;
