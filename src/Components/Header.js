import React, { Component } from 'react'
import { Navbar,Nav,Button,Container,Form,FormControl } from 'react-bootstrap'
import logo from './logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height='40'
                width='40'
                
                className='d-inline-block align-top logo'
                alt='Logo'
              />
              <h3 className='d-inline-block ml-2' >Logo</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto ml-5'>
                <Nav.Link href="/"> Домой </Nav.Link>
                <Nav.Link href="/about"> О нас </Nav.Link>
                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                <Nav.Link href="/blog"> Блог </Nav.Link>
              </Nav>
              <Form inline className='ml-5'>
                <FormControl
                  type='text'
                  placeholder='Поиск...'
                  className='mr-sm-2'
                />
                <Button validate='outline-info'> Искать </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/contacts' component={ Contacts } />
            <Route exact path='/blog' component={ Blog } />
          </Switch>
        </Router>
      </>
    )
  }
}
