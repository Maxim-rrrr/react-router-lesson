import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container className='mth' style={{ maxWidth: '600px' }}>
        <h1 className='text-center'> Свяжитесь с нами </h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='email@domen' />  
            <Form.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Consectetur, fuga?
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label> Сообщение </Form.Label>
            <Form.Control as='textarea' rows='5' />  
          </Form.Group>

          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Подтвердите обработку данных' />  
          </Form.Group>

          <Button variant='primary' type='submit' > Отправить </Button>
        </Form>
      </Container>
    )
  }
}
