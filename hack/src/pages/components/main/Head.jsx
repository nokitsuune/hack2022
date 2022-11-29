import React, {useState} from "react";
import user_icon from './user_icon.png'
import logOut from './out.png'
import settings from './settings.png'
import { Link } from 'react-router-dom';

function Head(){


const[kaf, setKaf] =useState('')
const[group, setGroup] =useState('')
const[course, setCourse] =useState('')
const kafedra =[ 'ИУ5', 'ИУ4']
const gr =[ 'ИУ5-52', 'ИУ5-53']
const cour =[ '2', '3']

const handleSubmit =(e) =>{
    e.preventDefault();
  } 

return (
    <div onSubmit={handleSubmit} className="head">
     
     <div className="user">
        <img className="out" src={user_icon}></img>
     
        <select id="dd" value = {kaf} onChange={(e)=> setKaf(e.currentTarget.value)}>
            <option value="kaff">Кафедра</option>
                { kafedra.map((kafedra,id) =>(
                    <option key = {id} value={kafedra}>{kafedra}</option>
            ))}
        </select>

        <select id="dd" value = {course} onChange={(e)=> setCourse(e.currentTarget.value)}>
            <option value="cour" >Курс</option>
                { cour.map((course,id) =>(
                    <option key = {id} value={course}>{course}</option>
            ))}
        </select>

        <select id="dd" value = {group} onChange={(e)=> setGroup(e.currentTarget.value)}>
            <option value="grr">Группа</option>
                { gr.map((group,id) =>(
            <option key = {id} value={group}>{group}</option>
            ))}
        </select>

    </div> 
        {console.log(course)}
        {console.log(kaf)}
        {console.log(group)}
    
        <div>
            <img className="out" src={settings}></img>
            <Link to='/'><img className="out" src={logOut}/></Link>
        </div>
    </div>
)

}
export default Head