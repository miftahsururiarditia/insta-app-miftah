import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router";

const Register = () => {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [errorAlert, setErrorAlert] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataPost = { nama, email, username, password }

        axios.post('http://localhost:8000/user/', dataPost)
        .then((res) => {
            if(res.data){
                setAlert(res.data.message)
                setTimeout(() => {
                    history.push('/')
                }, 3000);
            }
        })
        .catch(e => {
            setErrorAlert(e.response.data.message)
            setTimeout(() => {
                setErrorAlert('')
            }, 3000);
        })
    }
    
    const onChangeNama = (e) => {
        const value = e.target.value
        setNama(value)
    }

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
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
        <div style={{marginTop: "50px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                {
                                    errorAlert && (
                                        <div className="alert alert-danger">
                                            <p>{errorAlert}</p>
                                        </div>
                                    )
                                }
                                {
                                    alert && (
                                        <div className="alert alert-success">
                                            <p>{alert}</p>
                                        </div>
                                    )
                                }
                                <h1 style={{marginBottom: "20px"}}>Buat Akun Insta App</h1>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" placeholder="Masukkan nama lengkap" className="form-control" value={nama} onChange={onChangeNama} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Masukkan alamat email" className="form-control" value={email} onChange={onChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Masukkan Username" className="form-control" value={username} onChange={onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan Password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>
                                <button onClick={handleSubmit} className="btn btn-success">DAFTAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;