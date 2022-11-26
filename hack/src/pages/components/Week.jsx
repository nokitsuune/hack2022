import React from "react";

     

function Week({week}) {
  
    return  (
          <div className="table">
<table >
        <thead>
          <th>Пара</th>
        { week.map((day,id) =>(
                <th key={id}>
                    <td>{day.day}</td>
                </th>
            ))}
        </thead>
        <tbody>
           
        </tbody>
    </table>
          </div>
        );
      }

export default Week