import React, { useReducer, useState } from 'react';
import InputFormLocal from "./InputFormLocal";
import InputFormRemote from "./InputFormRemote";
import RtcClient from '../utils/RtcClient';
import VideoArea from "./VideoArea";

const App = () => {
  const [rtcClient, setRtcClient] = useState(new RtcClient());
  const [, forceRender] = useReducer((boolean) => !boolean, false);

  return (
    <>
      <InputFormLocal rtcClient={rtcClient} forceRender={forceRender} />
      <InputFormRemote rtcClient={rtcClient} forceRender={forceRender} />
      <VideoArea rtcClient={rtcClient} forceRender={forceRender} />
    </>
  );
}

export default App;
