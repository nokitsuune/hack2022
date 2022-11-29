// import React, {useEffect} from "react";
// import { useState } from "react";
// import "./Registratiom.css"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
//
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from 'react-router-dom';
// import axios from "axios";
//
// function MyCustomButton({ children }) {
//     return <button type={"submit"}>{children}</button>;
// };
//
// function Registratiom (){
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [username, setUsername]=useState('');
//     const [password, setPassword]=useState('');
//     const [test,setTest] = useState([{email:'',username:'',password:''}]);
//     const [confirmPassword,setConfirmPassword] = useState('');
//
//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }
//
//     }
//
//     async function SignUp(e){
//         const formData = new FormData()
//         formData.append('username', username)
//         formData.append('password', password)
//         formData.append('email', email)
//         console.log(1212)
//         // Вызов API login
//         e.preventDefault();
//              await axios(`http://127.0.0.1:8000/auth/users/`, {
//                  method: 'POST',
//                  data: formData,
//              })
//                  .then(response => response.json())
//                  .then((result) => {
//                      setTest(result);
//                      console.log(result);
//                  })
//
//         //...
//         // Извлечение из ответа JWT
//         // const { jwt_token } = await response.json()
//         // console.log({jwt_token});
//         //...
//         // Выполнение каких-либо действий с токеном в методе login
//         // await login({ jwt_token })
//         //
//         // const response2 = await fetch(`http://127.0.0.1:8000/auth/users/me/`, {
//         //     method: 'GET',
//         //     Authorization: 'Token { jwt_token }'
//         // })
//         // setUser(response2.json);
//     };
//
//
//
//
//     // useEffect(() => {
//     //     fetch(`http://127.0.0.1:8000/auth/users/`, {
//     //         method: 'POST',
//     //         body: JSON.stringify({
//     //             email: {firstName},
//     //             username: {lastName},
//     //             password: {password}
//     //         }),
//     //         headers:{
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     //         .then(response => response.json())
//     //         .then((result) => {
//     //             console.log(result);
//     //         })
//     //
//     // }, []);
//
//     return(
//
//         <Form className="form" onSubmit={(e) => SignUp(e)}>
//
//             <Form.Group className="form-body">
//                 <Form.Group className="header">Форма регистрации</Form.Group>
//                 <Form.Group className="name">
//                     <Form.Control  type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Имя"/>
//                     <Form.Control  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Фамилия"/>
//                 </Form.Group>
//                 <Form.Group className="input">
//                     <Form.Control  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Электронная почта"/>
//                 </Form.Group>
//                 <Form.Group className="input">
//                     <Form.Control type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль"/>
//                 </Form.Group>
//                 <Form.Group className="input">
//                     <Form.Control type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Подвтердите пароль"/>
//                 </Form.Group>
//                 <Form.Group className="footer">
//                         <MyCustomButton  type="submit" class="btn">Войти</MyCustomButton>
//
//                 </Form.Group>
//             </Form.Group>
//
//         </Form>
//
//     )
//
// }
//  export default Registratiom;