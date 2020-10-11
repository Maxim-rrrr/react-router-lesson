import React, { Component } from 'react'
import { Tab, Container, Row, Col, Nav } from 'react-bootstrap'


export default class About extends Component {
  render() {
    return (
      <Container className='mth'>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row className='mt-4'>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'> Дизайн </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'> Команда </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'> Программирование </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'> Фреймворки </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'> Библиотеки </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <img src="https://www.imagecms.net/wp-content/uploads/images/blog/blog3/ondesign.png" alt="" width='100%'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure sequi, error, dolore reprehenderit officia dolor placeat tempora soluta cumque ducimus ut culpa quisquam sit!</p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src="https://trello-gid.ru/wp-content/uploads/2018/10/komanda-trello.png" alt="" width='100%'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure sequi, error, dolore reprehenderit officia dolor placeat tempora soluta cumque ducimus ut culpa quisquam sit!</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src="https://python-scripts.com/wp-content/uploads/2019/01/object-oriented-programming-in-python.png" alt="" width='100%'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure sequi, error, dolore reprehenderit officia dolor placeat tempora soluta cumque ducimus ut culpa quisquam sit!</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src="https://itproger.com/img/news/1552131445.jpg" alt="" width='100%'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure sequi, error, dolore reprehenderit officia dolor placeat tempora soluta cumque ducimus ut culpa quisquam sit!</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src="https://habrastorage.org/getpro/habr/post_images/fdd/7dd/0cb/fdd7dd0cb8f6b51e98ac1b86b21d0cc0.png" alt="" width='100%'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure sequi, error, dolore reprehenderit officia dolor placeat tempora soluta cumque ducimus ut culpa quisquam sit!</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
