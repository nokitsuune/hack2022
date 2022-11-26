import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Week from './Week';
import React from 'react';


function TimeTable() {
    const [date, setDate] = useState(new Date());


    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }

 
      const week=[
        {
       
        day:addDays(date, 0).getDate()
        },
        {
         
          day:addDays(date, 1).getDate()
          },
        {
          
          day:addDays(date, 2).getDate()
        },
        {
          
          day:addDays(date, 3).getDate()
          },
        {
            
            day:addDays(date, 4).getDate()
        },
        {
        
          
          day:addDays(date, 5).getDate()
          },
          {
           
            
            day:addDays(date, 6).getDate()
          }
        ]

        
    return (
      <div className='timetable'>
        <h1 className='text-center'></h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date}></Calendar>
        </div>
        <Week week={week}/>
      </div>
    );
  }
  
  export default TimeTable;