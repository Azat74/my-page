import React, { Component } from 'react'
import logo from './logo.svg'
import './assets/styles/App.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import offset from './helpers/offset'
import $ from 'jquery'
import IndexPage from './components/indexPage/indexPage'
import AboutPage from './components/aboutPage/aboutPage'
import ContactPage from './components/contactPage/contactPage'

const RouteWithSubRoutes = (route) => {
  const exact = route.path === '/' ? true : false
  return (
    <Switch>
      <Route path={route.path} exact={exact} render={(props) => (
        <route.component {...props} routes={route.routes} />
      )} />
      <Route path={'*'} render={(props) => (
        <div className='container'></div>
      )} />
    </Switch>
  )
}


const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/contact',
    component: ContactPage
  }
]
class MyRouter extends Router {

}

class App extends Component {
  componentDidMount() {
    this.setPositionSlides()
  }
  setPositionSlides = () => {
    const $this = this;
    document.querySelectorAll('.container').forEach(function (item) {
      const leftPosition = offset(item)[0]
      $('nav a').eq($(item).index()).click(function (e) {
        $this.changeSlide(leftPosition)
      })
    })
  }
  changeSlide = (left) => {
    setTimeout(() => {
      const containers = document.querySelector('.containers');
      containers.style.left = `-${left}px`
    })
  }
  render() {
    return (
      <MyRouter>
        <div className='App'>
          <header className='header'>
            <nav>
              <Link to='/'>Главная</Link>
              <Link to='/about'>Обо мне</Link>
              <Link to='/contact'>Контакты</Link>
            </nav>
          </header>
          <main>
            <div className='containers'>
              {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))}
            </div>
          </main>
        </div>
      </MyRouter>
    )
  }
}

export default App
