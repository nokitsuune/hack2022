import { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

import Week from './Week';
import React from 'react';
import Button from 'react-bootstrap/esm/Button';



function TimeTable() {
    const [date, setDate] = useState(new Date());


    const[ev, SetEv]= useState([])

    const addEvent = (userEvent) =>{
      const newEv = {
          id: ev.length,
          date: userEvent.EvDate,
          event: userEvent.Ev,
          dow: userEvent.dOW,
      }
      {console.log(ev)}
      SetEv([...ev, newEv])
      
}

    return (
      <div className='timetable'>
        <div className='addEvents'>
          <Link to="/main2">
              <Button className='buttonn1' > + </Button>
          </Link>
          <Calendar onChange={setDate} value={date} ></Calendar>
        </div>
       
            <Week date={date} addEvent={addEvent}/>
      </div>
    );
  }
  
  export default TimeTable;