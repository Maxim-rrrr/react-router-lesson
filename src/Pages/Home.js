import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox/>
        <Container>
          <h1 className='text-center m-4'> Наша команда </h1>
          <CardDeck className='mt-4 mb-4'>
            <Card>
              <Card.Img variant='top' src='https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg' />
              <Card.Body>
                <Card.Title> Разработчики </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Debitis error quod nobis, modi necessitatibus eum.
                </Card.Text>
                <Button variant='primary'> О Команде </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant='top' src='https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_960_720.jpg' />
              <Card.Body>
                <Card.Title> Дизайнеры </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Debitis error quod nobis, modi necessitatibus eum.
                </Card.Text>
                <Button variant='primary'> О Команде </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant='top' src='https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg' />
              <Card.Body>
                <Card.Title> Менеджеры </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Debitis error quod nobis, modi necessitatibus eum.
                </Card.Text>
                <Button variant='primary'> О Команде </Button>
              </Card.Body>
            </Card>

            
          </CardDeck>
        </Container>
      </div>
    )
  }
}
