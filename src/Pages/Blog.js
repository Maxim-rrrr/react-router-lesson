import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container className='mth'>
          <Row className='mb-4'>
            <Col md='9'>
              <Media className='mt-4'>
                <img 
                  className='mr-3'
                  height={150}
                  width={285}
                  src="https://ru.reactjs.org/logo-og.png" 
                  alt=""
                />
                <Media.Body>
                  <h5> Blog post </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Praesentium possimus fugiat, numquam veritatis at totam 
                    asperiores debitis porro aut, laudantium accusantium! 
                    Architecto explicabo minima quos consectetur voluptas 
                    asperiores inventore nulla?
                  </p>
                </Media.Body>
              </Media>
              <Media className='mt-4'>
                <img 
                  className='mr-3'
                  height={150}
                  width={285}
                  src="https://miro.medium.com/max/668/1*hcws3Wa6u9IqaEZ_4X04uw.jpeg" 
                  alt=""
                />
                <Media.Body>
                  <h5> Blog post </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Praesentium possimus fugiat, numquam veritatis at totam 
                    asperiores debitis porro aut, laudantium accusantium! 
                    Architecto explicabo minima quos consectetur voluptas 
                    asperiores inventore nulla?
                  </p>
                </Media.Body>
              </Media>
              <Media className='mt-4'>
                <img 
                  className='mr-3'
                  height={150}
                  width={285}
                  src="https://miro.medium.com/max/1200/1*aK6-A2EmtFCYriaKgoguPw.png" 
                  alt=""
                />
                <Media.Body>
                  <h5> Blog post </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Praesentium possimus fugiat, numquam veritatis at totam 
                    asperiores debitis porro aut, laudantium accusantium! 
                    Architecto explicabo minima quos consectetur voluptas 
                    asperiores inventore nulla?
                  </p>
                </Media.Body>
              </Media>
              <Media className='mt-4'>
                <img 
                  className='mr-3'
                  height={150}
                  width={285}
                  src="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png" 
                  alt=""
                />
                <Media.Body>
                  <h5> Blog post </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Praesentium possimus fugiat, numquam veritatis at totam 
                    asperiores debitis porro aut, laudantium accusantium! 
                    Architecto explicabo minima quos consectetur voluptas 
                    asperiores inventore nulla?
                  </p>
                </Media.Body>
              </Media>
              <Media className='mt-4'>
                <img 
                  className='mr-3'
                  height={150}
                  width={285}
                  src="https://d2xzmw6cctk25h.cloudfront.net/geekbrains/public/ckeditor_assets/pictures/7700/retina-2bcaea53286b36687d5131af1befd7af.jpg" 
                  alt=""
                />
                <Media.Body>
                  <h5> Blog post </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Praesentium possimus fugiat, numquam veritatis at totam 
                    asperiores debitis porro aut, laudantium accusantium! 
                    Architecto explicabo minima quos consectetur voluptas 
                    asperiores inventore nulla?
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col md='3'>
              <h5> Категории </h5>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item> HTML/CSS </ListGroup.Item>
                  <ListGroup.Item> JavaScript </ListGroup.Item>
                  <ListGroup.Item> React </ListGroup.Item>
                  <ListGroup.Item> Vue </ListGroup.Item>
                  <ListGroup.Item> Python </ListGroup.Item>
                </ListGroup>
              </Card>

              <Card className='mt-4' bg='light'>
                <Card.Body>
                  <Card.Title> Lorem, ipsum dolor. </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Aliquam sit et totam magnam architecto deleniti autem eum 
                    quo enim ea, ipsam fuga tempore vel!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    )
  }
}
