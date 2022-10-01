import { useLocation, useParams } from 'react-router-dom'
import { Container, Row, Col, Button, FloatingLabel, Form } from 'react-bootstrap'
import "./Page.css"
import {
  ThumbUpOutlined, CommentOutlined, NotificationAddOutlined,
  ThumbDownOutlined, ThumbUp, ThumbDown, NotificationsActive
} from "@mui/icons-material"
import { useState } from 'react'

const Page = () => {
  const { id } = useParams() //get the id from the Url after /
  const location = useLocation()

  const dataArray = location.state.dataArray //data of images passed from home page

  const { data } = dataArray.find(({ data }) => data.id === id)
  console.log(data);

  const [like, setLike] = useState(false)
  const [disLike, setDisLike] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const [disLikesCount, setDisLikesCount] = useState(0)
  const [notification, setNotification] = useState(false)
  const [comment, setComment] = useState('')
  const [commentOn, setCommentOn] = useState(false)
  const [commentArr, setCommentArr] = useState([
    // {id: 0 , comment:"cool"} , {id:1 , comment:"hehe"}
  ])




  const likeCount = () => { //function to inc/dec likes
    setLike(!like)
    if (like === false) {
      setLikesCount(likesCount + 1)
    } else {
      setLikesCount(likesCount - 1)
    }

  }

  const disLikeCount = () => { //function to inc/dec dislikes
    setDisLike(!disLike)
    if (disLike === false) {
      setDisLikesCount(disLikesCount + 1)
    } else {
      setDisLikesCount(disLikesCount - 1)
    }

  }

  const addComment = () => { //function to add comments one by one
    let id = Math.random()
    setCommentArr(commentArr.concat({
      id: id,
      comment: comment
    }))
  }


  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='imageBody'>
              <img className='image' src={data.url} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <div className='title'>
                <h1>{data.title}</h1>
              </div>
              <div className='author'>
                <span>Author:- {data.author}</span>
              </div>
              <div className='category'>
                <span>Category:-  {data.content_categories[0]}</span>
              </div>
              <div className='reactions'>
                <div onClick={likeCount} className='like'>
                  {like ? <ThumbUp style={{ color: "#2494DB", fontSize: "30px" }} /> :
                    <ThumbUpOutlined style={{ fontSize: "30px" }} />}
                  <span>Like</span>
                  <div>
                    {like && <span>{likesCount} Likes</span>}
                  </div>
                </div>
                <div onClick={disLikeCount} className='dislike'>
                  {disLike ? <ThumbDown style={{ color: "#2494DB", fontSize: "30px" }} /> :
                    <ThumbDownOutlined style={{ fontSize: "30px" }} />}
                  <span>Dislike</span>
                  <div>
                    {disLike && <span>{disLikesCount} dislikes</span>}
                  </div>
                </div>
                <div className='comment'>
                  <CommentOutlined onClick={() => setCommentOn(!commentOn)} style={{ fontSize: "30px" }} />
                  <span>Comment</span>
                  {commentOn && <div className='commentBody'>
                    <div >
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ width: '400px', height: '100px' }}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </FloatingLabel>
                      <Button onClick={addComment} style={{ fontSize: "15px", marginTop: "10px" }} variant="danger">Add Comment</Button>
                      <hr />
                    </div>
                    <Container>
                      <h4 style={{ textDecoration: "underline" }}>All Comments!</h4>
                      {commentArr.map((data) => (
                        <div>{data.comment}</div>
                      ))}
                    </Container>
                  </div>}
                </div>
                <div className='subscribe'>
                  <Button style={{ fontSize: "15px" }} variant="danger">Subscribe</Button>
                  {notification ? <NotificationsActive onClick={() => setNotification(!notification)} style={{ color: "#2494DB" }} /> :
                    <NotificationAddOutlined onClick={() => setNotification(!notification)} className='bellIcon' style={{ color: "#2494DB" }} />}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page