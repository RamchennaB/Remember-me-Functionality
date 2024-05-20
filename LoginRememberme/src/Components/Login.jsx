import React,{useState,useEffect}from 'react'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [remember,setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate();

    const ShowPasswordto = () => {
        setShowPassword(!showPassword);
      };

      function handleLogin(e){
        e.preventDefault();
        if(remember){
            localStorage.setItem('email',JSON.stringify(email));
            localStorage.setItem('pass',JSON.stringify(password));
            localStorage.setItem('loggedin',true);
            navigate('/');
        }
        else{
                navigate('/');
            }
            
             
      }
  return (
    <div className='app-container'>
                   <h1 className="header">Tatva Vaidhika Grama</h1>
                    <h2 className="login-header">Login</h2>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            placeholder="Email Id"
                        />
                    
                    <br />
                    
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            placeholder="Password"
                        />
                   
                    <br />
                    <label>
                     <input
                        type="checkbox"
                         checked={showPassword}
                         onChange={ShowPasswordto}
                      />
                       Show Password
                     </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                        />
                        Remember ME
                    </label>
                    <br />
                    <button onClick={handleLogin} 
                            className="login-button">
                        Login
                    </button>
                </div>

  );
}

export default Login;
