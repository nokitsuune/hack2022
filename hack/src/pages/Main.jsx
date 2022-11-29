import React from "react";
import TimeTable from "./components/TimeTable";
import Head from "./components/main/Head";
import {useParams} from "react-router-dom";


function Main() {

    //const {rId} = useParams()
    return  (
      <div>
        <Head/>

        <TimeTable/>
      </div>

    )
}
export default Main