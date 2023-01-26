import {useEffect, useState} from "react";
import {useCallback} from "react";

export default function AdminStatisticsView(){
  let [isAccessGranted, setAccessGranted] = useState(false);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") == 1) {
      setAccessGranted(true);
      forceUpdate();
    } else {
    }
  }, []);

  return(
    <>
      {
        isAccessGranted
          ?
          <>
            <h1>Statistics:</h1>
            burgers this month bought: 3u5u45u34u53u46tiu34
          </>
          :
          <>
            Access not granted
          </>
      }

    </>
  )
}
