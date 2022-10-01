import { Row, Col, Card} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import "./ImgList.css"


const ImgList = ({filter}) => {

    const navigate = useNavigate()

    const [dataArray, setDataArray] = useState([])


    useEffect(() => {

        const fetchUrl = async () => {
            const { data: { data: { children } } } = await axios.get("http://www.reddit.com/r/pics/.json?jsonp=")
            setDataArray(children)
        }

        fetchUrl()

    }, [])

    // console.log(dataArray);

    const filteredData = dataArray.filter((awards)=>awards.data.total_awards_received == filter)
    console.log(filteredData);


    return (
        <>
            <Row>
                {filter === "Filter By Awards Recieved"? dataArray.map((data) => (
                    <Col md={2}>
                        <div onClick={()=>navigate(`/image/${data.data.id}` , {state:{dataArray:dataArray}})} className='cardbody'>
                            <Card>
                                <Card.Img variant="top" src={data.data.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{data.data.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                )):filteredData.map((data)=>(
                    <Col md={2}>
                        <div onClick={()=>navigate(`/image/${data.data.id}` , {state:{dataArray:dataArray}})} className='cardbody'>
                            <Card>
                                <Card.Img variant="top" src={data.data.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{data.data.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default ImgList