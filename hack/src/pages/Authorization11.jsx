// import React from "react";
// import { useState } from "react";
// import "./Registratiom.css"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
//
// import "bootstrap/dist/css/bootstrap.min.css"
//
// import { Link } from 'react-router-dom';
//
// function MyCustomButton({ children }) {
//   return <button>{children}</button>;
// };
// function isJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }
//
// function Authorization (){
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [user, setUser] = useState(0);
//     const [token, setToken]=useState('');
//     const [username, setUsername]=useState('');
//     const [password, setPassword]=useState('');
//
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//         <div className="error">{errorMessages.message}</div>
//   );
//
//      async function Authorization1(e){
//          const formData = new FormData()
//          formData.append('username', username)
//          formData.append('password', password)
//          console.log(password,username)
//
//          setUsername(JSON.stringify(username));
//        // Вызов API login
//        e.preventDefault();
//        await axios(`http://127.0.0.1:8000/auth/token/login/`, {
//          method: 'POST',
//          data: formData,
//        })
//            .then((result) => {
//
//              console.log(result.data.auth_token);
//                setToken(result.data.auth_token);
//                console.log(token);
//                return result;
//            })
//        .then(async (result) => {
//        await axios(`http://127.0.0.1:8000/auth/users/me/`, {
//          method: 'GET',
//          headers:{
//            "Authorization": "Token "+result.data.auth_token,
//          }
//        })
//            .then((result) => {
//              setUser(result.data.id);
//              console.log(result.data.id);
//              console.log(user);
//            })})}
//
//
//   const database = [
//     {
//       email: "user1@dparr.r",
//       password: "pass1"
//     },
//     {
//       email: "user2@fkro.rt",
//       password: "pass2"
//     }
//   ];
//
//   const errors = {
//     email: "Неверно введена электронная почта",
//     pass: "Неверно введен пароль"
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     var { email, pass } = document.forms[0];
//     const userData = database.find((user) => user.email === email.value);
//     if (userData) {
//       if (userData.password !== pass.value) {
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       setErrorMessages({ name: "email", message: errors.email });
//     }
//   };
//
//     return(
//         <div>
//            { isSubmitted ? <div>User is successfully logged in</div> :
//         <Form className="form" onSubmit={(e) => Authorization1(e)}>
//             <Form.Group className="form-body">
//                 <Form.Group className="header">Вход</Form.Group>
//                 <Form.Group className="input">
//                     {renderErrorMessage("email")}
//                     <Form.Control onChange={(e)=>setUsername(e.currentTarget.value)} type="username" id="email" className="form__input" name="email" required placeholder="Login"/>
//                 </Form.Group>
//                 <Form.Group className="input">
//                     {renderErrorMessage("pass")}
//                     <Form.Control onChange={(e)=>setPassword(e.currentTarget.value)} type="password"  id="password" name="pass" required placeholder="Пароль"/>
//                 </Form.Group>
//                 <Form.Group class="footer">
//                     <Button type="submit" class="btn">Войти</Button>
//                     <Button onClick={()=>console.log(user)} class="btn">Войти</Button>
//                 </Form.Group>
//             </Form.Group>
//
//         </Form>}
//         </div>
//       )
//
// }
//  export default Authorization;