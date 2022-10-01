import { Container, Dropdown, DropdownButton } from "react-bootstrap"
import "./Content.css"
import ImgList from './ImgList/ImgList'
import { useState } from "react"

const Content = () => {

    const [filter, setFilter] = useState("Filter By Awards Recieved")
    console.log(filter);


    return (
        <>
            <Container>
                <div className='gallerybody'>
                    <div className='gallery'>
                        <h2 style={{ color:"#2494DB" , fontWeight:"bold"}}>IMAGE GALLERY</h2>
                        <select className="dropDown" onChange={(e) => setFilter(e.target.value)}>
                            <option  >Filter By Awards Recieved</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <ImgList filter={filter} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Content