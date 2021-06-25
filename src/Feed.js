import { useHistory } from "react-router"
import { Link } from 'react-router-dom'
import axios from "axios"

const Feed = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token){
        history.push('/')
    }

    let feeds = []
    const getFeed = () => {
        axios.get('http://localhost:8000/feed/')
        .then((res) => {
            if(res.data){
                feeds.push(res.data)
            }
        })
    }

    getFeed()

    return ( 
        <div className="feed">
            <div className="container">
                <div className="row feed-container">
                    {
                        feeds.map( feed => {
                            return console.log(feed.picture)
                        })
                    }
                    <div className="col-md-4 my-5">
                        <div className="card" style={{width: "15rem"}}>
                            <img alt="" src="http://localhost:8000/gambar1.jpg" className="card-img-top"/>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="card-text">0 Likes</p>
                                    </div>
                                    <div className="col-sm-6" style={{textAlign: "right"}}>
                                        <Link><span className="fa fa-thumbs-up"></span></Link>
                                    </div>
                                </div>
                                <h5 className="card-title">Nama User</h5>
                                <p className="card-text">Caption</p>
                                <input type="text" placeholder="Berikan komentar..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Feed;