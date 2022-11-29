import React from "react";
import { useState } from "react";
const  data=[
    
   ]



function Week({date, addEvent}) {
        

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
// Accepts a Date object or date string that is recognized by the Date.parse() method
function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null :
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function getDayOfWeekRU(dayOfWeek) {
  if (dayOfWeek=== 'Sunday')
  return 'ВС'
  if (dayOfWeek=== 'Monday')
  return 'ПН'
  if (dayOfWeek=== 'Tuesday')
  return 'ВТ'
  if (dayOfWeek=== 'Wednesday')
  return 'СР'
  if (dayOfWeek=== 'Thursday')
  return 'Чт'
  if (dayOfWeek=== 'Friday')
  return 'ПТ'
  if (dayOfWeek=== 'Saturday')
  return 'СБ'
}
 

      const week =[
        {
       
        day:addDays(date, 0),
        dow: getDayOfWeekRU(getDayOfWeek(date)),
        },
        {
         
          day:addDays(date, 1),
          dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 1)))
          },
        {
          
          day:addDays(date, 2),
          dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 2)))
        },
        {
          
          day:addDays(date, 3),
          dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 3)))
          },
        {
            
            day:addDays(date, 4),
            dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 4)))
            
        },
        {
        
          
          day:addDays(date, 5),
          dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 5)))
          },
          {
           
            
            day:addDays(date, 6),
            dow: getDayOfWeekRU(getDayOfWeek(addDays(date, 6)))
          }
        ]

     
  

    function Find(week) {
        return week.find(weekdow => weekdow.dow==='ПН')

    }
   const NEWWEEK =[
    {   
        day: addDays(Find(week).day, 0).getDate(),
        dow: 'пн',
       
    },
    { day: addDays(Find(week).day, 1).getDate(),
        dow: 'вт'},
    { day: addDays(Find(week).day, 2).getDate(),
        dow: 'ср'},
    { day: addDays(Find(week).day, 3).getDate(),
        dow: 'чт'},
        { day: addDays(Find(week).day, 4).getDate(),
            dow: 'пт'},
            { day: addDays(Find(week).day, 5).getDate(),
                dow: 'сб'},
                { day: addDays(Find(week).day, 6).getDate(),
                    dow: 'вс'},
   ]


    const[userEvent, setUserEvent] = useState({EvDate: '', evnt:'', dOW: '' })
    const[userEvents, setUserEvents] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault()
       // console.log((userEvent))
        //addEvent(userEvent)
        setUserEvent('+')
    }

    return  (
     
          <div className="table">
        <table >
        <thead id="abc" ><th>Пары</th>
        { NEWWEEK.map((day,id) =>(
                <th  key={id}>
                    <td>
                    <p id="a">{day.dow}</p>
                    <p id="a">{day.day}<sub onSubmit={handleSubmit}>
                        <div>
                        <select value={userEvent} onChange={(e)=> setUserEvent({EvDate: day.day, Ev:e.currentTarget.value, dOW: day.dow})}>
                        <option value="cour">+</option>
                        <option value="dz" onClick={(e)=>handleSubmit(e)}>ДЗ</option>
                        <option value="rk" onClick={(e)=>handleSubmit(e)}>РК</option>
                        <option value="kr" onClick={(e)=>handleSubmit(e)}>КР</option>
                        <option value="another" onClick={(e)=>handleSubmit(e)}>Другое</option>
                       
                            </select></div></sub></p>
                    </td>
                    {console.log(userEvent)}

                </th>
            ))}
        </thead>
        
    {data.map((day,id) =>(
        <tbody>
        <tr id="ab" key={1}>
            <td>8:30</td>
            <td>{day.pn.f}</td>
            <td>{day.vt.f}</td>
            <td>{day.sr.f}</td>
            <td>{day.ct.f}</td>
            <td>{day.pt.f}</td>
            <td>{day.sb.f}</td>
        </tr>
        <tr id="ab" key={2}>
            <td >10:15</td>
            <td>{day.pn.s}</td>
            <td>{day.vt.s}</td>
            <td>{day.sr.s}</td>
            <td>{day.ct.s}</td>
            <td>{day.pt.s}</td>
            <td>{day.sb.s}</td>
        </tr>
        <tr id="ab" key={3}>
            <td  >12:00</td>
            <td>{day.pn.t}</td>
            <td>{day.vt.t}</td>
            <td>{day.sr.t}</td>
            <td>{day.ct.t}</td>
            <td>{day.pt.t}</td>
            <td>{day.sb.t}</td>
        </tr>
        <tr id="ab" key={4}>
            <td >13:50</td>
            <td>{day.pn.fr}</td>
            <td>{day.vt.fr}</td>
            <td>{day.sr.fr}</td>
            <td>{day.ct.fr}</td>
            <td>{day.pt.fr}</td>
            <td>{day.sb.fr}</td>
        </tr>
        <tr id="ab" key={5}>
            <td  >15:40</td>
            <td>{day.pn.ff}</td>
            <td>{day.vt.ff}</td>
            <td>{day.sr.ff}</td>
            <td>{day.ct.ff}</td>
            <td>{day.pt.ff}</td>
            <td>{day.sb.ff}</td>
        </tr>
        <tr  id="ab" key={6}>
            <td >17:25</td>
            <td>{day.pn.sx}</td>
            <td>{day.vt.sx}</td>
            <td>{day.sr.sx}</td>
            <td>{day.ct.sx}</td>
            <td>{day.pt.sx}</td>
            <td>{day.sb.sx}</td>
        </tr>
        <tr id="ab"  key={7}>
            <td >19:00</td>
            <td>{day.pn.sv}</td>
            <td>{day.vt.sv}</td>
            <td>{day.sr.sv}</td>
            <td>{day.ct.sv}</td>
            <td>{day.pt.sv}</td>
            <td>{day.sb.sv}</td>
        </tr>
        </tbody>
        ))}
    </table>

          </div>
        );
      }

export default Week