import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorAlert, setErrorAlert] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = { username, password }

        // fetch('http://localhost:8000/user/login/', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(login)
        // }).then(() => {
        //     console.log('Login Success')
        //     // history.push('/');
        // })

        axios.post('http://localhost:8000/user/login', login)
        .then((res) => {
            console.log(res)
            if(res.data.status){
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('nama',res.data.nama)
                localStorage.setItem('id',res.data.id)
                history.push('/feed')
            } else{
                setErrorAlert(res.data.message)
                setTimeout(() => {
                    setErrorAlert('')
                }, 3000);
            }
        })
        .catch(e => {
            // console.log(e)
        })

    }

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: "100px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            {
                                    errorAlert && (
                                        <div className="alert alert-danger">
                                            <p>{errorAlert}</p>
                                        </div>
                                    )
                            }
                            <h1>Insta App Login</h1>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Masukkan Username" className="form-control" value={username} onChange={onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan Password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>
                                <button onClick={handleSubmit} className="btn btn-primary">LOGIN</button>
                                <div className="row mt-3">
                                    <Link to={'/register'}>Buat akun baru</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;