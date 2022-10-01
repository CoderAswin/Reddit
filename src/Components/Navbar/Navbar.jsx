
import "./navbar.css"
import { SearchOutlined, Person, Reddit } from '@mui/icons-material'


const Navbar = () => {

    
    

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light navbarBody" >
                <div className="container-fluid container ">
                    <div className="logo">
                        <span className="reddit"><Reddit style={{fontSize:"50px"}} /></span>
                        <a className="navbar-brand">Reddit</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="input-group searchBox">
                        <input type="text" className="form-control" placeholder="Search Reddit" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        <div className="searchIcon">
                            <SearchOutlined />
                        </div>
                    </div>
                    <div className="navIcons">
                        <div className="icons">
                            <button type="button" class="btn btn-outline-primary">Login</button>
                        </div>
                        <div className="icons">
                            <button type="button" class="btn btn-danger">Sign Up</button>
                        </div>
                        <div className="icons">
                            <Person />
                            <span>Account</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar