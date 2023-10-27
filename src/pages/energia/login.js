import { useState } from "react";
import axios from "axios";
import "../styles/pages/form.css"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password)

        try {const response = await axios.post("http://localhost:3001/login",
                    JSON.stringify({email, password}),
                    {
                        headers: {'Content-Type': 'application/json'}
                    },
            );
            console.log(response.data);
            setUser(response.data)
        }catch (error) {
                if(error?.response){
                    setError('Erro ao acessar o servidor');
                }if (error.response.status == 401) {
                    setError('Usuario ou senha errados');
                }
            }
    };

    function handleLogout (){
        setUser(null);
        setError('');
        setEmail('');
        setPassword('');
    }

    return (
      <div className='login-form-card'>
        {user == null? (
            <>
                <h2>Login</h2>
                <form className='login-form'>
                <input type='email' name='email' placeholder='email' required onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' name='password' placeholder='password' required onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'onClick={(e) => handleLogin(e)} className='btn-login'>Login</button>
                </form>
                <p>{error}</p>
            </>
        
        ):
        (
            <>
                <h2>Olá {user.name}</h2>
                <button type="button" className="btn-login" onClick={(e) => handleLogout(e)}>Logout</button>
            </>
        )}
      </div>
    );
  }

  export default Login;