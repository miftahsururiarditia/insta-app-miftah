import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router"

const Post = () => {
    const [alert, setAlert] = useState('')
    const [caption, setCaption] = useState('')
    const [file, setFile] = useState()
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token){
        history.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('caption', caption);
        data.append('user_id', localStorage.getItem('id'));
        data.append('file', file);
        
        axios.post("https://localhost:8000/post/", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }

    const onChangeCaption = (e) => {
        const value = e.target.value
        setCaption(value)
    }

    const onChangeFile = (e) => {
        const value = e.target.files[0]
        setFile(value)
    }

    return ( 
        <div className="post-page">
            <div style={{marginTop: "50px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                    {
                                        alert && (
                                            <div className="alert alert-success">
                                                <p>{alert}</p>
                                            </div>
                                        )
                                    }
                                    <h1 style={{marginBottom: "20px"}}>Posting Sesuatu</h1>
                                    <div className="form-group">
                                        <label className="row" htmlFor="file">Pilih Foto</label>
                                        <input type="file" id="file" accept=".jpg" onChange={onChangeFile} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="caption">Caption</label>
                                        <textarea type="text" id="caption" placeholder="Masukkan caption gambar" className="form-control" value={caption} onChange={onChangeCaption} />
                                    </div>
                                    <button onClick={handleSubmit} className="btn btn-success">POST</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Post;