import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import auth from '../../utils/auth'
import styles from './start.css';
import Signup from '../../components/signup'
import { Col, Row, Container } from "../../components/Grid";
import Login from '../../components/login';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import Logout from '../../components/logout-btn';
import { Link } from 'react-router-dom'


class Start extends Component {
  state = {
    showLogin: false,
    showSignup: false,
    showButtons: true,
    signupName : '',
    signupEmail: '',
    signupPass: '',
    loginEmail: '',
    loginPass: '',
    loginFail: false,
    notLoggedIn: true
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    let username = this.state.loginEmail;
    let pass = this.state.loginPass;
    auth.login(username, pass)
    .then((res)=> {
      this.setState({showLogin: false})
        this.setState({notLoggedIn: false})
      })
      .catch((error) => {
        this.setState({loginFail: true})
        setTimeout(()=> {
          this.setState({loginFail: false, email: '', password: ''})
        }, 1500)
      })

      

  }

  handleGuest = () => {
    
  }

  handleSignup = (e) => {
    let username =this.state.signupEmail
    let password = this.state.signupPass
    // parameters need to be coming from the form
    auth.register(username, password)
    this.setState({showSignup: false})
  }

  checkSignedIn = () => {
    auth.checkLogged()
      
  }

  
  render(){
    
    return(
      <div>
    <ReactCSSTransitionGroup
      transitionName="login"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={300}
      >
        {this.state.showLogin ? 
          <Login email={this.state.loginEmail} pass={this.state.loginPass} handleLogin={this.handleLogin} handleChange={this.handleChange}/>
        : null}
    {this.state.showSignup ? 
      <Signup handleChange={this.handleChange} handleSignup={this.handleSignup} signupName={this.state.signupName} signupEmail={this.state.signupEmail} signupPass={this.state.signupPass}/> : null}
      </ReactCSSTransitionGroup>
    <ReactCSSTransitionGroup
      transitionName="login"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={300}
      >
      {this.state.loginFail ? 
        <div id="fail-container">
          <div id='fail'>
            <h2>Login Failed</h2>
          </div>
        </div>
        : null}
      </ReactCSSTransitionGroup>
      <Container fluid>
        <Row>
          <Col size="md-2"/>
          <Col size="md-8">
            <Jumbotron>
              {this.state.notLoggedIn ? 
              <div className='button-div'>
                <button onClick={()=> this.setState({showSignup: true})} className='btn btn-primary'>Signup</button>
                <button onClick={()=> this.setState({showLogin: true})} className='btn btn-primary'>Login</button>
                <Link className='btn btn-primary' to="/home">Guest</Link>
                <button onClick={this.checkSignedIn} className='btn btn-primary'>check user</button>
               <Logout/>
              </div>
               : <div className='void' ><Link className='btn enter-void' to="/home">Enter The Void</Link></div> }
            <h1><i className="fa fa-newspaper-o" aria-hidden="true"></i></h1> 
          </Jumbotron>
          <h2>Welcome to the site of endless possiblities</h2>
          <h3>Here at Splash you will have your own personalized musuem at your fingertips. You will be able to explore your inner curiosity and quench your thirst for knowledge on broad subjects. Within you profile you will be able to save articles that suite your interests. Feel free to cruise this site and have a feel for what it has to offer. All information is obtained from the finest Musuems and from Wikepedia. Enjoy!</h3>

         
      

      
          <div className="container1">

           <div className="carousel">
            <div className="item a"> </div>
            <div className="item b"> </div>
            <div className="item c"> </div>
            <div className="item d"> </div>
            <div className="item e"> </div>
            <div className="item f"> </div>
          </div>
            <div className="next">Next</div>
            <div className="prev">Prev</div>

          </div>  
      


      

       

        <section className="main">

          <div id="sb-container" className="sb-container">

            <div>

              <span className="sb-icon icon-cog" />
              <h4><span>All Settings</span></h4>
            </div>
            <div>
              <span className="sb-icon icon-flight" />
              <h4><span>User Modes</span></h4>
            </div>  
            <div>
              <span className="sb-icon icon-eye" />
              <h4><span>Browse All</span></h4>
            </div>  
            <div>
              <span className="sb-icon icon-install" />
              <h4><span>Install App</span></h4>
            </div>  
            <div>
              <span className="sb-icon icon-bag" />
              <h4><span>Productivity</span></h4>
            </div>  
            <div>
              <span className="sb-icon icon-globe" />
              <h4><span>All Options</span></h4>
            </div>  
            <div>
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2NS4wMDQgNDY1LjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY1LjAwNCA0NjUuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTMwNS4zNjQsMjU4LjQ5NGMtMy45MzcsMC42NS03Ljg5MS0wLjI2OC0xMS4xMzQtMi41ODljLTMuMjQ0LTIuMzIyLTUuMzktNS43NjgtNi4wNDItOS43MDQgICBjLTAuNjUyLTMuOTM2LDAuMjY4LTcuODksMi41ODktMTEuMTM0YzAuMy0wLjQxOSwwLjYyLTAuODE4LDAuOTU2LTEuMTk5YzAuMDEtMC4wMTEsMC4wMjEtMC4wMjEsMC4wMzEtMC4wMzMgICBjMC43NTYsMy4yNzcsMy42NjMsNS43NDYsNy4xNzgsNS44MDdjNC4xNjUsMC4wMjgsNy41NTctMy4yMjgsNy42MjktNy4zNjlsMC4xODMtMTAuNTE4YzAuMDAxLTAuMDcxLTAuMDA3LTAuMTQxLTAuMDA4LTAuMjEyICAgYy0wLjAwMi0wLjE2OS0wLjAwNi0wLjMzNy0wLjAxOS0wLjUwOGMtMC4wMDktMC4xMTctMC4wMjUtMC4yMzItMC4wNC0wLjM0OGMtMC4wMTItMC4wOTYtMC4wMTctMC4xOTItMC4wMzMtMC4yODkgICBjLTAuMDA4LTAuMDUtMC4wMjMtMC4wOTctMC4wMzItMC4xNDZjLTAuMDIyLTAuMTE5LTAuMDQ5LTAuMjM2LTAuMDc3LTAuMzUzYy0wLjAzNC0wLjE0NS0wLjA3MS0wLjI4OS0wLjExMy0wLjQzICAgYy0wLjAzMi0wLjEwNS0wLjA2Ni0wLjIwOS0wLjEwMi0wLjMxM2MtMC4wNTItMC4xNS0wLjEwOS0wLjI5OC0wLjE3LTAuNDQ0Yy0wLjAzOS0wLjA5My0wLjA3OS0wLjE4NC0wLjEyMi0wLjI3NSAgIGMtMC4wNzEtMC4xNTEtMC4xNDgtMC4yOTgtMC4yMjgtMC40NDNjLTAuMDQ2LTAuMDgzLTAuMDkxLTAuMTY2LTAuMTQtMC4yNDdjLTAuMDg5LTAuMTQ2LTAuMTg0LTAuMjg3LTAuMjgyLTAuNDI2ICAgYy0wLjA1My0wLjA3NS0wLjEwMy0wLjE1Mi0wLjE1OS0wLjIyNmMtMC4xMDktMC4xNDQtMC4yMjYtMC4yOC0wLjM0NS0wLjQxNWMtMC4wNTQtMC4wNjItMC4xMDQtMC4xMjYtMC4xNi0wLjE4NiAgIGMtMC4xNzUtMC4xODYtMC4zNTgtMC4zNjQtMC41NTEtMC41MzFjLTAuMDA3LTAuMDA2LTAuMDEyLTAuMDEyLTAuMDE5LTAuMDE4Yy0wLjA1NS0wLjA0Ny0wLjExNC0wLjA4Ni0wLjE3LTAuMTMxICAgYy0wLjEzOS0wLjExMy0wLjI3OC0wLjIyNS0wLjQyNS0wLjMyOGMtMC4wODktMC4wNjItMC4xODEtMC4xMTctMC4yNzItMC4xNzVjLTAuMTI4LTAuMDgyLTAuMjU3LTAuMTYzLTAuMzktMC4yMzcgICBjLTAuMDk1LTAuMDUzLTAuMTkyLTAuMTAxLTAuMjg5LTAuMTVjLTAuMTM4LTAuMDY5LTAuMjc4LTAuMTM1LTAuNDItMC4xOTZjLTAuMDkzLTAuMDQtMC4xODctMC4wNzctMC4yODItMC4xMTMgICBjLTAuMTU0LTAuMDU5LTAuMzExLTAuMTExLTAuNDctMC4xNmMtMC4wODctMC4wMjctMC4xNzQtMC4wNTMtMC4yNjMtMC4wNzdjLTAuMTcyLTAuMDQ2LTAuMzQ3LTAuMDgzLTAuNTIzLTAuMTE3ICAgYy0wLjA3OS0wLjAxNS0wLjE1OC0wLjAzMi0wLjIzOC0wLjA0NWMtMC4xODgtMC4wMjktMC4zNzktMC4wNDgtMC41NzEtMC4wNjNjLTAuMDcyLTAuMDA2LTAuMTQzLTAuMDE1LTAuMjE1LTAuMDE5ICAgYy0wLjIwNC0wLjAxLTAuNDEtMC4wMDctMC42MTYsMGMtMC4wNjEsMC4wMDItMC4xMjItMC4wMDEtMC4xODMsMC4wMDJjLTAuMjY2LDAuMDE2LTAuNTMzLDAuMDQ0LTAuODAxLDAuMDg4ICAgYy03Ljg4OSwxLjMwNy0xNC43OTYsNS42MDgtMTkuNDUsMTIuMTFjLTQuNjUzLDYuNTAyLTYuNDk3LDE0LjQyOC01LjE4OSwyMi4zMTZjMS4zMDcsNy44ODksNS42MDgsMTQuNzk2LDEyLjExLDE5LjQ1ICAgYzUuMTM4LDMuNjc3LDExLjE2NCw1LjYsMTcuMzU4LDUuNmMxLjY0NSwwLDMuMzAzLTAuMTM2LDQuOTU4LTAuNDFjNC4wODYtMC42NzcsNi44NS00LjUzOSw2LjE3My04LjYyNSAgIEMzMTMuMzExLDI2MC41NzksMzA5LjQ0NCwyNTcuODE2LDMwNS4zNjQsMjU4LjQ5NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik00MDQuNjM5LDI1MS41NGwtMzMuODQ4LTc0Ljk0OGMtMC4xMDEtMC4yNjgtMC4yMjMtMC41MzItMC4zNTgtMC43OTJMMjkzLjE5Miw0Ljc3MWMtMS4xNS0yLjU0Ny0zLjYyMS00LjI0My02LjQxMS00LjQwMSAgIGMtNDEuODE3LTIuMzcyLTg1LjQzOSw2LjY4LTEyNi4xNjEsMjYuMTY4Yy00MC43MjIsMTkuNDg5LTc1LjEzNSw0Ny43ODgtOTkuNTE5LDgxLjgzN2MtMi4xNDEsMi45ODktMS43OTksNy4wODgsMC44MDcsOS42ODIgICBMMjM3Ljc5MywyOTMuMTRsLTMzLjU3MSw4Ni4wMjNjLTM1Ljc1OCw4LjEzMi02Mi41MzcsNDAuMTU4LTYyLjUzNyw3OC4zNDJjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWgyMDUuOTA4ICAgYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVjMC0zNC4yNzQtMjEuNDM2LTY0LjIzNi01My4wNTctNzUuNTlsMTkuNjg4LTUwLjQ0N2wzMi45OCwwLjExN2MxNy41NjcsMCwzMS44NTgtMTQuMjkyLDMxLjg1OC0zMS44NTggICB2LTYuMDY3YzMuNTM0LTAuNjA2LDYuMjI3LTMuNjc3LDYuMjI3LTcuMzg0cy0yLjY5Mi02Ljc3OC02LjIyNy03LjM4NHYtMTcuNzcxYzIuMDE5LDEuMTYyLDQuNTQ0LDEuMzc2LDYuODI5LDAuMzQ0ICAgQzQwNC42NjUsMjU5Ljc1OCw0MDYuMzQ0LDI1NS4zMTUsNDA0LjYzOSwyNTEuNTR6IE0yNTUuMywxNTUuODk3bC0xNC4zMDEtMjAuNTUybDMwLjY2OC0xOC45MThsMTIuMzM5LDIxLjc2MkwyNTUuMywxNTUuODk3eiAgICBNMjk2Ljc4MSwxMzAuMzA4bC0xMi4zMzktMjEuNzYybDMwLjYyNS0xOC44OTJsMTAuMzc1LDIyLjk3M0wyOTYuNzgxLDEzMC4zMDh6IE0xNjcuMDk2LDQwLjA2OSAgIGMzNi45NzYtMTcuNjk2LDc2LjM5OS0yNi4yOCwxMTQuMzE5LTI0LjkzMWwyNy40MjgsNjAuNzMybC05MC43LDU1Ljk1Yy0zLjUyNSwyLjE3NS00LjYyMSw2Ljc5NS0yLjQ0NiwxMC4zMjEgICBjMS40MTgsMi4yOTgsMy44NzUsMy41NjMsNi4zOTEsMy41NjNjMS4zNDMsMCwyLjcwMy0wLjM2MSwzLjkzLTEuMTE4bDIuMTk1LTEuMzU0bDE0LjMwMSwyMC41NTJsLTI4LjY0MiwxNy42NjhsLTE2LjI2My0xOS4zNDEgICBsMi44NzYtMS43NzRjMy41MjUtMi4xNzUsNC42MjEtNi43OTUsMi40NDYtMTAuMzIxYy0yLjE3NC0zLjUyNS02Ljc5NC00LjYyLTEwLjMyMS0yLjQ0NmwtNDkuMjY0LDMwLjM4OWwtNjYuMjctNjUuOTY3ICAgQzk5LjcxOSw4Mi4yNjcsMTMwLjcxNSw1Ny40OCwxNjcuMDk2LDQwLjA2OXogTTE1NC4yNzcsMTg4Ljg0MWwzMC40MjctMTguNzdsMTYuMjYzLDE5LjM0MWwtMjguNDcyLDE3LjU2NEwxNTQuMjc3LDE4OC44NDF6ICAgIE0xNTcuMTEyLDQ1MC4wMDRjMy43MzItMzIuNTIsMzEuNDI4LTU3Ljg1OCw2NC45MzEtNTcuODU4YzMzLjUwMiwwLDYxLjE5OSwyNS4zMzksNjQuOTMxLDU3Ljg1OEgxNTcuMTEyeiBNMzYyLjIyOSwzMTYuNTgzICAgbC0zOC4wOTctMC4xMzVjLTAuMDA5LDAtMC4wMTgsMC0wLjAyNiwwYy0zLjA4OSwwLTUuODYzLDEuODk1LTYuOTg3LDQuNzczbC0yNy4yOTIsNjkuOTMxYy0xLjUwNiwzLjg1OCwwLjQwMSw4LjIwOCw0LjI2LDkuNzEzICAgYzAuODk2LDAuMzUsMS44MTgsMC41MTUsMi43MjUsMC41MTVjMywwLDUuODMzLTEuODEzLDYuOTg5LTQuNzc1bDAuMjgtMC43MTdjMjMuNTczLDguMzA3LDQwLjI2MywyOS4zMDQsNDMuMDg3LDU0LjExNWgtNDUuMTEzICAgYy0zLjc5NC00MC44MDctMzguMjMtNzIuODU4LTgwLjAxMS03Mi44NThjLTAuMzE2LDAtMC42MjcsMC4wMi0wLjk0MiwwLjAyNGwzMi40NTItODMuMTUzYzEuMDg0LTIuNzc5LDAuNDE5LTUuOTM3LTEuNjk2LTguMDQyICAgbC0xNi42NDgtMTYuNTcybDE5LjA1NC0xMi4wNDljMy41MDEtMi4yMTQsNC41NDQtNi44NDYsMi4zMzEtMTAuMzQ3Yy0yLjIxMy0zLjUtNi44NDYtNC41NDQtMTAuMzQ3LTIuMzMxbC0yMS45NCwxMy44NzQgICBsLTQwLjg4LTQwLjY5M2wxNDguMjQyLTkxLjQ0NWwyMi41NzEsNDkuOTc3bC0zMi41NDMsMjAuNTc4Yy0zLjUwMSwyLjIxNC00LjU0NCw2Ljg0Ni0yLjMzMSwxMC4zNDcgICBjMS40MjcsMi4yNTcsMy44NTksMy40OTMsNi4zNDYsMy40OTNjMS4zNywwLDIuNzU3LTAuMzc1LDQuMDAxLTEuMTYybDMwLjc2LTE5LjQ1MWwxNS41NTgsMzQuNDVoLTI1LjU0OCAgIGMtMy4yNjQsMC02LjE1MywyLjExMS03LjE0Niw1LjIyMWMtMC45OTIsMy4xMSwwLjE0Miw2LjUwNCwyLjgwMyw4LjM5NGw5LjE5NSw2LjUyOWMxLjMxOCwwLjkzNiwyLjgzNCwxLjM4NSw0LjMzNiwxLjM4NSAgIGMyLjM0NywwLDQuNjU5LTEuMDk5LDYuMTIyLTMuMTU4YzAuNzM1LTEuMDM2LDEuMTctMi4xOTQsMS4zMjMtMy4zNzJoMTEuOTQ0djM5LjEzMmgtNS41NDFjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjUgICBzMy4zNTgsNy41LDcuNSw3LjVoNS41NDF2NS45NTFDMzc5LjA2MSwzMDkuMDIxLDM3MS40OTksMzE2LjU4MywzNjIuMjI5LDMxNi41ODN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              <h4><span>History</span></h4>                     
            </div>  
            <div>
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM5NC44MjcgMzk0LjgyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk0LjgyNyAzOTQuODI3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggaWQ9IlN0YXJzIiBkPSJNMTkxLjI0NSwxODEuOTkyYy0yMy4xOTYsMC00MS43MjMtOC4wODgtNTguMjYyLTE3LjA4M2MxMC4wOTMtMTAuMzc3LDI0LjE3MS0xNi44NDgsMzkuNzU1LTE2Ljg0OCAgIGMyMS4zODksMCwzOS45NTgsMTIuMTcyLDQ5LjIyNCwyOS45MzlDMjE2LjQ5LDE3OS43MSwyMDYuMzU5LDE4MS45OTIsMTkxLjI0NSwxODEuOTkyIE0yMjguMjYsMjAzLjU4NSAgIGMwLDEuNDI1LTAuMTExLDIuODE5LTAuMjE2LDQuMjE0bC0xMy4yNTgsNS4yNTZjLTEzLjgzOCw1LjQ5MS0zNS40ODUsNS44MTEtNTIuNjU0LTUuODU1Yy01LjQ4NC0zLjcyNi0xMC41NDktNy44MjMtMTUuNDQ4LTExLjc4OSAgIGMtNy4xMzgtNS43ODctMTQuNTg0LTExLjY3OC0yMy41MDUtMTYuNzE5YzEuNjA0LTMuMTg5LDMuNTEtNi4xOTQsNS42NzYtOC45OTVjMTcuNTUyLDkuNjQyLDM3LjI2OCwxOC40NjQsNjIuMzksMTguNDY0ICAgYzE2LjUxNSwwLDI3LjQwNC0yLjU3MywzMy4yNTgtNC40OTFDMjI2Ljg5NiwxODkuODY0LDIyOC4yNiwxOTYuNTU4LDIyOC4yNiwyMDMuNTg1IE0yMDMuNjY5LDI0OS42NjkgICBjLTEyLjA4Ni00LjcxMy00NS4wMTctNi4zNi02MS44NDEsMC4wMTJjLTE0LjgzMS05Ljk3Ni0yNC42MTUtMjYuOTEtMjQuNjE1LTQ2LjA5NmMwLTYuNzYxLDEuMjc3LTEzLjIyMSwzLjQ5OC0xOS4yMTcgICBjOC4xNjgsNC42NzYsMTUuMDEsMTAuMDk5LDIyLjA4NiwxNS44MzZjNS4wMDMsNC4wNDcsMTAuMTY3LDguMjMsMTUuODY3LDEyLjEwNGMxMS4xMDUsNy41MzksMjMuOSwxMC41NTYsMzUuNjgzLDEwLjU1NiAgIGM4LjQxNSwwLDE2LjMxMi0xLjUzNiwyMi43MDktNC4wNzJsMTAuMDYyLTMuOTkxQzIyNC4xMzksMjI5LjI2MSwyMTUuNTIxLDI0MS42ODYsMjAzLjY2OSwyNDkuNjY5IE0xNzIuNzM2LDI1OS4xMDggICBjLTguMzksMC0xNi4zMjQtMS45MjUtMjMuNDYyLTUuMjc1YzEzLjk4Ni0zLjM0NCwzNC45OTgtMi42NDcsNDYuODg2LDAuMDE5QzE4OS4wMzYsMjU3LjE4OSwxODEuMTE1LDI1OS4xMDgsMTcyLjczNiwyNTkuMTA4ICAgIE0xNzIuNzM2LDE0MS44OTJjLTM0LjA3MywwLTYxLjY5MiwyNy42Mi02MS42OTIsNjEuNjkyczI3LjYyLDYxLjY5Miw2MS42OTIsNjEuNjkyYzM0LjA3MywwLDYxLjY5Mi0yNy42Miw2MS42OTItNjEuNjkyICAgUzIwNi44MDksMTQxLjg5MiwxNzIuNzM2LDE0MS44OTIgTTU1LjUyMSwxNjYuNTY5YzYuODE3LDAsMTIuMzM4LTUuNTIxLDEyLjMzOC0xMi4zMzhjMC02LjgxNy01LjUyMS0xMi4zMzgtMTIuMzM4LTEyLjMzOCAgIHMtMTIuMzM4LDUuNTIxLTEyLjMzOCwxMi4zMzhTNDguNzAzLDE2Ni41NjksNTUuNTIxLDE2Ni41NjkgTTExMi4xOTIsOTcuODMybDEuOTYyLTcuNjA3YzAuMTYtMC41MzcsMC42MjktMC45NSwxLjIyOC0xLjA5OCAgIGw3LjEyNS0xLjYxYzEuMTY2LTAuMzIxLDEuMTY2LTEuOTc0LDAtMi4yOTVsLTcuMTI1LTEuNjFjLTAuNTk5LTAuMTQ4LTEuMDY3LTAuNTYxLTEuMjI4LTEuMDk4bC0xLjk2Mi03LjYwNyAgIGMtMC4zMjEtMS4xNjYtMS45NzQtMS4xNjYtMi4yOTUsMGwtMS45NjIsNy42MDdjLTAuMTYsMC41MzctMC42MjksMC45NS0xLjIyOCwxLjA5OGwtNy4xMjUsMS42MWMtMS4xNjYsMC4zMjEtMS4xNjYsMS45NzQsMCwyLjI5NSAgIGw3LjEyNSwxLjYxYzAuNTk5LDAuMTQ4LDEuMDY3LDAuNTYxLDEuMjI4LDEuMDk4bDEuOTYyLDcuNjA3QzExMC4yMTgsOTguOTk4LDExMS44Nyw5OC45OTgsMTEyLjE5Miw5Ny44MzIgTTIyNy4zODMsMzE5LjY1MyAgIGwtNy4xMjUtMS42MWMtMC41OTktMC4xNDgtMS4wNjctMC41NjEtMS4yMjgtMS4wOThsLTEuOTYyLTcuNjA3Yy0wLjMyMS0xLjE2Ni0xLjk3NC0xLjE2Ni0yLjI5NSwwbC0xLjk2Miw3LjYwNyAgIGMtMC4xNiwwLjUzNy0wLjYyOSwwLjk1LTEuMjI4LDEuMDk4bC03LjEyNSwxLjYxYy0xLjE2NiwwLjMyMS0xLjE2NiwxLjk3NCwwLDIuMjk1bDcuMTI1LDEuNjEgICBjMC41OTksMC4xNDgsMS4wNjcsMC41NjEsMS4yMjgsMS4wOThsMS45NjIsNy42MDdjMC4zMjEsMS4xNjYsMS45NzQsMS4xNjYsMi4yOTUsMGwxLjk2Mi03LjYwN2MwLjE2LTAuNTM3LDAuNjI5LTAuOTUsMS4yMjgtMS4wOTggICBsNy4xMjUtMS42MUMyMjguNTQ5LDMyMS42MjcsMjI4LjU0OSwzMTkuOTczLDIyNy4zODMsMzE5LjY1MyBNMzAwLjUzOSwyNjkuMTQ1bC0xNC4yNDUtMy4yMTRjLTEuMjAzLTAuMjk2LTIuMTM1LTEuMTI5LTIuNDY4LTIuMTkgICBsLTMuOTExLTE1LjIyYy0wLjY0OC0yLjMzOC0zLjk2MS0yLjMzOC00LjYwMiwwbC0zLjkxMSwxNS4yMmMtMC4zMzMsMS4wNjEtMS4yNjUsMS44OTQtMi40NjgsMi4xODRsLTE0LjI0NSwzLjIyICAgYy0yLjMzOCwwLjY0Mi0yLjMzOCwzLjk2MSwwLDQuNjAybDE0LjI1MSwzLjIyYzEuMTk3LDAuMjksMi4xMzUsMS4xMjMsMi40NjIsMi4xODRsMy45MTEsMTUuMjJjMC42NDgsMi4zMzgsMy45NjEsMi4zMzgsNC42MDIsMCAgIGwzLjkxMS0xNS4yMmMwLjMzMy0xLjA2MSwxLjI2NS0xLjg5NCwyLjQ2OC0yLjE4NGwxNC4yNDUtMy4yMkMzMDIuODc4LDI3My4xMDYsMzAyLjg3OCwyNjkuNzg3LDMwMC41MzksMjY5LjE0NSBNMjYxLjAxMyw3MS43MyAgIGwtMTQuMjQ1LTMuMjE0Yy0xLjE5Ny0wLjI5Ni0yLjEzNS0xLjEyOS0yLjQ2OC0yLjE5bC0zLjkxMS0xNS4yMmMtMC42NDItMi4zMzgtMy45NTQtMi4zMzgtNC41OTYsMGwtMy45MTgsMTUuMjIgICBjLTAuMzI3LDEuMDYxLTEuMjY1LDEuODk0LTIuNDYxLDIuMTg0bC0xNC4yNTEsMy4yMmMtMi4zMzIsMC42NDItMi4zMzIsMy45NjEsMCw0LjYwMmwxNC4yNTEsMy4yMiAgIGMxLjE5NywwLjI5LDIuMTM0LDEuMTIzLDIuNDYxLDIuMTg0bDMuOTE4LDE1LjIyYzAuNjQyLDIuMzM4LDMuOTU0LDIuMzM4LDQuNTk2LDBsMy45MTctMTUuMjIgICBjMC4zMjctMS4wNjEsMS4yNjUtMS44OTQsMi40NjEtMi4xODRsMTQuMjQ1LTMuMjJDMjYzLjM1Miw3NS42OSwyNjMuMzUyLDcyLjM3MSwyNjEuMDEzLDcxLjczIE05NS4yMDIsMjkxLjUyN2wtMjguNDk2LTYuNDQxICAgYy0yLjM5NC0wLjU4Ni00LjI2OS0yLjI0Ni00LjkyOS00LjM4bC03LjgyOS0zMC40MzNjLTEuMjgzLTQuNjctNy45MTUtNC42Ny05LjE5OCwwbC03LjgyOSwzMC40MzMgICBjLTAuNjU0LDIuMTI4LTIuNTI5LDMuNzk0LTQuOTIzLDQuMzhsLTI4LjQ5Niw2LjQzNWMtNC42NywxLjI4OS00LjY3LDcuOTE1LDAsOS4xOThsMjguNDk2LDYuNDQxICAgYzIuMzk0LDAuNTg2LDQuMjY5LDIuMjUyLDQuOTI5LDQuMzhsNy44MjksMzAuNDMzYzEuMjgzLDQuNjcsNy45MTUsNC42Nyw5LjE5OCwwbDcuODI5LTMwLjQzM2MwLjY1NC0yLjEyOCwyLjUyOS0zLjc5NCw0LjkyMy00LjM4ICAgbDI4LjQ5Ni02LjQzNUM5OS44NzEsMjk5LjQzNiw5OS44NzEsMjkyLjgxLDk1LjIwMiwyOTEuNTI3IE0zOTEuMzI2LDE2MS4zMTlsLTI4LjQ5Ni02LjQzNGMtMi4zOTQtMC41ODYtNC4yNjktMi4yNTItNC45MjktNC4zOCAgIGwtNy44MjktMzAuNDMzYy0xLjI4My00LjY3Ni03LjkxNS00LjY3Ni05LjE5OCwwbC03LjgyOSwzMC40MzNjLTAuNjU0LDIuMTI4LTIuNTI5LDMuNzg4LTQuOTIzLDQuMzc0bC0yOC40OTYsNi40NDEgICBjLTQuNjcsMS4yODMtNC42Nyw3LjkxNSwwLDkuMTk4bDI4LjQ5Niw2LjQ0MWMyLjM5NCwwLjU4LDQuMjY5LDIuMjQ2LDQuOTI5LDQuMzc0bDcuODI5LDMwLjQzM2MxLjI4Myw0LjY3Niw3LjkxNSw0LjY3Niw5LjE5OCwwICAgbDcuODI5LTMwLjQzM2MwLjY1NC0yLjEyOCwyLjUyOS0zLjc4OCw0LjkyMy00LjM3NGwyOC40OTYtNi40NDFDMzk1Ljk5NSwxNjkuMjM0LDM5NS45OTUsMTYyLjYwMiwzOTEuMzI2LDE2MS4zMTkiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
              <h4><span>Astronomy</span></h4>                     
            </div>  
            <div>
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM5MS43NTggMzkxLjc1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkxLjc1OCAzOTEuNzU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTI2OS4zMzMsMzY3LjI3M2gtMTUuMDUyYy04Ljk3NCwwLTE2LjA2OC05Ljc2OS0xOC4xMTMtMTUuMzQ2Yy0xLjExNC0zLjA0Mi0yLjE2Ny0xMC4wODItMi44MzQtMTUuMjZoLTc0LjkxMSAgIGMtMC42NjcsNS4xNzktMS43MiwxMi4yMTgtMi44MzQsMTUuMjZjLTIuMDQ0LDUuNTc2LTkuMTM5LDE1LjM0Ni0xOC4xMTMsMTUuMzQ2aC0xNS4wNTJjLTMuMzc5LDAtNi4xMjEsMi43NDItNi4xMjEsNi4xMjEgICBzMi43NDIsNi4xMjEsNi4xMjEsNi4xMjFoMTQ2LjkwOWMzLjM3OSwwLDYuMTIxLTIuNzQyLDYuMTIxLTYuMTIxQzI3NS40NTUsMzcwLjAxNiwyNzIuNzEyLDM2Ny4yNzMsMjY5LjMzMywzNjcuMjczICAgTDI2OS4zMzMsMzY3LjI3M3ogTTM3OS41MTUsMjY5LjMzM2MwLDYuNzY0LTUuNDc4LDEyLjI0Mi0xMi4yNDIsMTIuMjQySDI0LjQ4NWMtNi43NjQsMC0xMi4yNDItNS40NzgtMTIuMjQyLTEyLjI0MlYzNi43MjcgICBjMC02Ljc2NCw1LjQ3OC0xMi4yNDIsMTIuMjQyLTEyLjI0MmgzNDIuNzg4YzYuNzY0LDAsMTIuMjQyLDUuNDc4LDEyLjI0MiwxMi4yNDJWMjY5LjMzM3ogTTE5NS44NzksMzEyLjE4MiAgIGMtMy4zNzksMC02LjEyMS0yLjc0Mi02LjEyMS02LjEyMXMyLjc0Mi02LjEyMSw2LjEyMS02LjEyMXM2LjEyMSwyLjc0Miw2LjEyMSw2LjEyMVMxOTkuMjU4LDMxMi4xODIsMTk1Ljg3OSwzMTIuMTgyICAgTDE5NS44NzksMzEyLjE4MnogTTM2Ny4yNzMsMTIuMjQySDI0LjQ4NUMxMC45NjMsMTIuMjQyLDAsMjMuMjA2LDAsMzYuNzI3VjMwNi4wNmMwLDEzLjUyMiwxMC45NjMsMjQuNDg1LDI0LjQ4NSwyNC40ODVoMzQyLjc4OCAgIGMxMy41MjIsMCwyNC40ODUtMTAuOTYzLDI0LjQ4NS0yNC40ODVWMzYuNzI3QzM5MS43NTgsMjMuMjA2LDM4MC43OTQsMTIuMjQyLDM2Ny4yNzMsMTIuMjQyTDM2Ny4yNzMsMTIuMjQyeiBNNjcuMzMzLDYxLjIxMiAgIGgtNDguOTd2Ni4xMjFoNDguOTd2MTguMzY0aC00OC45N3Y2LjEyMWg0OC45N3YxOC4zNjRoLTQ4Ljk3djYuMTIxaDQ4Ljk3djE4LjM2NGgtNDguOTd2Ni4xMjFoNDguOTd2MTguMzY0aC00OC45N3Y2LjEyMWg0OC45NyAgIHYxOC4zNjRoLTQ4Ljk3djYuMTIxaDQ4Ljk3djE4LjM2NGgtNDguOTd2Ni4xMjFoNDguOTd2MTguMzY0aC00OC45N3Y2LjEyMWg0OC45N3YxOC4zNjRoLTQ4Ljk3djYuMTIxaDQ4Ljk3djEyLjI0Mmg2LjEyMVY2Ny4zMzMgICBoMjk5LjkzOXYtNi4xMjFINzMuNDU1SDY3LjMzM3ogTTI4NC42MzYsMTE2LjMwM0gyNTQuMDNjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjF2MTIuMjQyYzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjEgICBoMzAuNjA2YzEuNjg5LDAsMy4wNjEtMS4zNzEsMy4wNjEtMy4wNjF2LTEyLjI0MkMyODcuNjk3LDExNy42NzQsMjg2LjMyNiwxMTYuMzAzLDI4NC42MzYsMTE2LjMwM0wyODQuNjM2LDExNi4zMDN6ICAgIE0zNzAuMzMzLDE0MC43ODhoLTMwLjYwNmMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MXYxMi4yNDJjMCwxLjY4OSwxLjM3MSwzLjA2MSwzLjA2MSwzLjA2MWgzMC42MDYgICBjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MXYtMTIuMjQyQzM3My4zOTQsMTQyLjE1OSwzNzIuMDIzLDE0MC43ODgsMzcwLjMzMywxNDAuNzg4TDM3MC4zMzMsMTQwLjc4OHogTTMyNy40ODUsMTQwLjc4OCAgIGgtMzAuNjA2Yy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxdjEyLjI0MmMwLDEuNjg5LDEuMzcxLDMuMDYxLDMuMDYxLDMuMDYxaDMwLjYwNmMxLjY4OSwwLDMuMDYxLTEuMzcxLDMuMDYxLTMuMDYxICAgdi0xMi4yNDJDMzMwLjU0NSwxNDIuMTU5LDMyOS4xNzQsMTQwLjc4OCwzMjcuNDg1LDE0MC43ODhMMzI3LjQ4NSwxNDAuNzg4eiBNMjg0LjYzNiwxNDAuNzg4SDI1NC4wMyAgIGMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MXYxMi4yNDJjMCwxLjY4OSwxLjM3MSwzLjA2MSwzLjA2MSwzLjA2MWgzMC42MDZjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MXYtMTIuMjQyICAgQzI4Ny42OTcsMTQyLjE1OSwyODYuMzI2LDE0MC43ODgsMjg0LjYzNiwxNDAuNzg4TDI4NC42MzYsMTQwLjc4OHogTTI0NC44NDgsMTU2LjA5MXYtMTIuMjQyYzAtMS42ODktMS4zNzEtMy4wNjEtMy4wNjEtMy4wNjEgICBoLTMwLjYwNmMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MXYxMi4yNDJjMCwxLjY4OSwxLjM3MSwzLjA2MSwzLjA2MSwzLjA2MWgzMC42MDYgICBDMjQzLjQ3NywxNTkuMTUyLDI0NC44NDgsMTU3Ljc4LDI0NC44NDgsMTU2LjA5MUwyNDQuODQ4LDE1Ni4wOTF6IE0yNDcuOTA5LDIzOC43MjdoLTMwLjYwNmMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MSAgIHYxMi4yNDJjMCwxLjY4OSwxLjM3MSwzLjA2MSwzLjA2MSwzLjA2MWgzMC42MDZjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MXYtMTIuMjQyICAgQzI1MC45NywyNDAuMDk4LDI0OS41OTksMjM4LjcyNywyNDcuOTA5LDIzOC43MjdMMjQ3LjkwOSwyMzguNzI3eiBNMjA1LjA2MSwyMzguNzI3aC0zMC42MDZjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjEgICB2MTIuMjQyYzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjFoMzAuNjA2YzEuNjg5LDAsMy4wNjEtMS4zNzEsMy4wNjEtMy4wNjF2LTEyLjI0MiAgIEMyMDguMTIxLDI0MC4wOTgsMjA2Ljc1LDIzOC43MjcsMjA1LjA2MSwyMzguNzI3TDIwNS4wNjEsMjM4LjcyN3ogTTE2Mi4yMTIsMjM4LjcyN2gtMzAuNjA2Yy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxICAgdjEyLjI0MmMwLDEuNjg5LDEuMzcxLDMuMDYxLDMuMDYxLDMuMDYxaDMwLjYwNmMxLjY4OSwwLDMuMDYxLTEuMzcxLDMuMDYxLTMuMDYxdi0xMi4yNDIgICBDMTY1LjI3MywyNDAuMDk4LDE2My45MDIsMjM4LjcyNywxNjIuMjEyLDIzOC43MjdMMTYyLjIxMiwyMzguNzI3eiBNMjAyLDE1Ni4wOTF2LTEyLjI0MmMwLTEuNjg5LTEuMzcxLTMuMDYxLTMuMDYxLTMuMDYxaC0zMC42MDYgICBjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjF2MTIuMjQyYzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjFoMzAuNjA2QzIwMC42MjksMTU5LjE1MiwyMDIsMTU3Ljc4LDIwMiwxNTYuMDkxICAgTDIwMiwxNTYuMDkxeiBNMTU5LjE1MiwxNTYuMDkxdi0xMi4yNDJjMC0xLjY4OS0xLjM3MS0zLjA2MS0zLjA2MS0zLjA2MWgtMzAuNjA2Yy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxdjEyLjI0MiAgIGMwLDEuNjg5LDEuMzcxLDMuMDYxLDMuMDYxLDMuMDYxaDMwLjYwNkMxNTcuNzgsMTU5LjE1MiwxNTkuMTUyLDE1Ny43OCwxNTkuMTUyLDE1Ni4wOTFMMTU5LjE1MiwxNTYuMDkxeiBNMTEzLjI0MiwxNDAuNzg4SDgyLjYzNiAgIGMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MXYxMi4yNDJjMCwxLjY4OSwxLjM3MSwzLjA2MSwzLjA2MSwzLjA2MWgzMC42MDZjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MXYtMTIuMjQyICAgQzExNi4zMDMsMTQyLjE1OSwxMTQuOTMyLDE0MC43ODgsMTEzLjI0MiwxNDAuNzg4TDExMy4yNDIsMTQwLjc4OHogTTIxMS4xODIsMTM0LjY2N2gzMC42MDZjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MSAgIHYtMTIuMjQyYzAtMS42ODktMS4zNzEtMy4wNjEtMy4wNjEtMy4wNjFoLTMwLjYwNmMtMS42ODksMC0zLjA2MSwxLjM3MS0zLjA2MSwzLjA2MXYxMi4yNDIgICBDMjA4LjEyMSwxMzMuMjk2LDIwOS40OTIsMTM0LjY2NywyMTEuMTgyLDEzNC42NjdMMjExLjE4MiwxMzQuNjY3eiBNMTY1LjI3MywxMzEuNjA2YzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjFoMzAuNjA2ICAgYzEuNjg5LDAsMy4wNjEtMS4zNzEsMy4wNjEtMy4wNjF2LTEyLjI0MmMwLTEuNjg5LTEuMzcxLTMuMDYxLTMuMDYxLTMuMDYxaC0zMC42MDZjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjFWMTMxLjYwNnogICAgTTM3MC4zMzMsMTg5Ljc1OGgtMzAuNjA2Yy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxdjEyLjI0MmMwLDEuNjg5LDEuMzcxLDMuMDYxLDMuMDYxLDMuMDYxaDMwLjYwNiAgIGMxLjY4OSwwLDMuMDYxLTEuMzcxLDMuMDYxLTMuMDYxdi0xMi4yNDJDMzczLjM5NCwxOTEuMTI5LDM3Mi4wMjMsMTg5Ljc1OCwzNzAuMzMzLDE4OS43NThMMzcwLjMzMywxODkuNzU4eiBNMzI3LjQ4NSwxODkuNzU4ICAgaC0zMC42MDZjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjF2MTIuMjQyYzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjFoMzAuNjA2YzEuNjg5LDAsMy4wNjEtMS4zNzEsMy4wNjEtMy4wNjEgICB2LTEyLjI0MkMzMzAuNTQ1LDE5MS4xMjksMzI5LjE3NCwxODkuNzU4LDMyNy40ODUsMTg5Ljc1OEwzMjcuNDg1LDE4OS43NTh6IE0yODQuNjM2LDE4OS43NThIMjU0LjAzICAgYy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxdjEyLjI0MmMwLDEuNjg5LDEuMzcxLDMuMDYxLDMuMDYxLDMuMDYxaDMwLjYwNmMxLjY4OSwwLDMuMDYxLTEuMzcxLDMuMDYxLTMuMDYxdi0xMi4yNDIgICBDMjg3LjY5NywxOTEuMTI5LDI4Ni4zMjYsMTg5Ljc1OCwyODQuNjM2LDE4OS43NThMMjg0LjYzNiwxODkuNzU4eiBNMTY4LjMzMywxMTAuMTgyaDMwLjYwNmMxLjY4OSwwLDMuMDYxLTEuMzcxLDMuMDYxLTMuMDYxICAgVjk0Ljg3OWMwLTEuNjg5LTEuMzcxLTMuMDYxLTMuMDYxLTMuMDYxaC0zMC42MDZjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjF2MTIuMjQyICAgQzE2NS4yNzMsMTA4LjgxMSwxNjYuNjQ0LDExMC4xODIsMTY4LjMzMywxMTAuMTgyTDE2OC4zMzMsMTEwLjE4MnogTTEyNS40ODUsMTEwLjE4MmgzMC42MDZjMS42ODksMCwzLjA2MS0xLjM3MSwzLjA2MS0zLjA2MSAgIFY5NC44NzljMC0xLjY4OS0xLjM3MS0zLjA2MS0zLjA2MS0zLjA2MWgtMzAuNjA2Yy0xLjY4OSwwLTMuMDYxLDEuMzcxLTMuMDYxLDMuMDYxdjEyLjI0MiAgIEMxMjIuNDI0LDEwOC44MTEsMTIzLjc5NSwxMTAuMTgyLDEyNS40ODUsMTEwLjE4MkwxMjUuNDg1LDExMC4xODJ6IE0xMTMuMjQyLDkxLjgxOEg4Mi42MzZjLTEuNjg5LDAtMy4wNjEsMS4zNzEtMy4wNjEsMy4wNjEgICB2MTIuMjQyYzAsMS42ODksMS4zNzEsMy4wNjEsMy4wNjEsMy4wNjFoMzAuNjA2YzEuNjg5LDAsMy4wNjEtMS4zNzEsMy4wNjEtMy4wNjFWOTQuODc5ICAgQzExNi4zMDMsOTMuMTg5LDExNC45MzIsOTEuODE4LDExMy4yNDIsOTEuODE4TDExMy4yNDIsOTEuODE4eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
              <h4><span>Technology</span></h4>                     
            </div>  
            <div>
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDU3Mi42IDU3Mi42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NzIuNiA1NzIuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00NjQuNTI5LDMxNy4xMTFjMC03NS4wNDktNDAuNDQzLTE0MC4xNzgtOTkuMzAyLTE3Mi4wMjFjLTQuNDQ1LTMxLjc5NC0zMS43MzYtNTYuMzU1LTY0LjcyOC01Ni4zNTUgICBjLTcuMzY4LDAtMTQuNDMyLDEuMjc5LTIxLjA0NywzLjUyOVY2My4wOTZjMC03LjIxLTUuNDU2LTEzLjA4OS0xMi40NTktMTMuODY4di0yMi43NGMwLTAuNTM2LTAuMTA5LTEuMDQxLTAuMTU1LTEuNTU5aDExLjMyMyAgIGM1LjE1MSwwLDkuMzQxLTQuMTg5LDkuMzQxLTkuMzUzVjkuMzQ3YzAtNS4xNjQtNC4xODktOS4zNDctOS4zNDEtOS4zNDdoLTcyLjE5Yy01LjE2MywwLTkuMzUzLDQuMTgzLTkuMzUzLDkuMzQ3djYuMjI5ICAgYzAsNS4xNjQsNC4xODksOS4zNTMsOS4zNTMsOS4zNTNoMTEuMzExYy0wLjA1MiwwLjUxOC0wLjE1OSwxLjAyMi0wLjE1OSwxLjU1OXYyMi43NDZjLTYuOTk5LDAuNzc5LTEyLjQ1NSw2LjY0Ni0xMi40NTUsMTMuODY4ICAgdjIwNS42NjRjMCw3LjYxNCw2LjA2NCwxMy43NzEsMTMuNjMsMTMuOTl2OTQuMjk3aDAuNDg0YzIuMTk1LDIuNjY2LDExLjc3OSw3LjAxNCwyMy4yNyw3LjAxNGMxMS41MTIsMCwyMS4wOTYtNC4zNDgsMjMuMjg1LTcuMDE0ICAgaDAuNDcydi05NC4yOTdjNy41NjMtMC4yMDcsMTMuNjQzLTYuMzcsMTMuNjQzLTEzLjk4NHYtNTIuNjhjNi42MTUsMi4yNSwxMy42NzksMy41MjgsMjEuMDQ3LDMuNTI4ICAgYzIzLjQ2OCwwLDQ0LjAyNC0xMi40NTgsNTUuNTgyLTMxLjA2M2MzOS43ODYsMjYuNTM2LDY2LjM3OCw3NC4yMjksNjYuMzc4LDEyOC41NTRjMCwzMy42ODYtMTAuMjM2LDY0LjgyNS0yNy40NjksODkuOTQ5ICAgbC00Ni45NzIsMTguNzYxdi0xLjIyNUgxNjEuODI2djIwLjI0N0gzNDguMDJ2LTguOTU3bDM1LjQ1MS0xNC4xNjNjLTI1LjI0NSwyOC40MTItNjAuNjM2LDQ2LjEzNy05OS43NzYsNDYuMTM3djAuMzQ4aC00MS42MjkgICB2NDguMjk5SDEwOC4wN1Y1NzIuNmgyOTIuMTQ2di01Ni4wOTRoLTc0LjAwOHYtMTIuMDA4QzQwNS40NjUsNDg0LjA1MSw0NjQuNTI5LDQwNy44MjEsNDY0LjUyOSwzMTcuMTExeiBNMzAwLjUsMjA1LjU5NyAgIGMtMjguMzU0LDAtNTEuNDItMjMuMDY1LTUxLjQyLTUxLjQxN2MwLTI4LjM1MSwyMy4wNjYtNTEuNDE3LDUxLjQyLTUxLjQxN2MyMi40NTcsMCw0MS41NTMsMTQuNDk5LDQ4LjU0MywzNC42MiAgIGMtNi4xMjYtMi41MzktMTIuMzg2LTQuNzUyLTE4LjgxLTYuNTczYy02LjkyNC04LjgxMS0xNy42NTgtMTQuNDg5LTI5Ljc0NS0xNC40ODljLTIwLjkxMSwwLTM3Ljg1NywxNi45NTMtMzcuODU3LDM3Ljg1OSAgIGMwLDIwLjkwNywxNi45NTMsMzcuODU0LDM3Ljg1NywzNy44NTRjMTIuOTIxLDAsMjQuMzE5LTYuNDkxLDMxLjE2NC0xNi4zOGM0LjIzMSwxLjY5Niw4LjM1NCwzLjYxMSwxMi4zNzMsNS43MyAgIEMzMzQuOTQsMTk1Ljg5NCwzMTguODUzLDIwNS41OTcsMzAwLjUsMjA1LjU5N3oiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
              <h4><span>Science</span></h4>                     
            </div>
            <div>
             <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwOS45NTIgNDA5Ljk1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA5Ljk1MiA0MDkuOTUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTI5OC44MDksMjg3Ljg3M2MtMjEuNzg5LDMxLjk3OC00Ny4yMSw2My42NTYtNzAuMTkyLDg3LjM5OGMtOC4wNCw4LjMwNi0xNS41OTUsMTUuNDY3LTIyLjU4MiwyMS40MTggICBjNjguNTg4LTEuMzA2LDEzMy4wMjItMzguNzEzLDk3LjU2Ny0xMDEuMjg2QzMwMi4wMiwyOTIuODE3LDMwMC40MiwyOTAuMzEzLDI5OC44MDksMjg3Ljg3M3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xNDUuOTk0LDMyMC4wOTdjMC0xNS44MDcsMTIuODEzLTI4LjYyOSwyOC42MjctMjguNjI5YzIuMDc1LDAsNC4wOTcsMC4yMjcsNi4wNDcsMC42NDYgICBjMTEuMTA3LTIwLjcyNCwyMy45NTQtNDIuMDY2LDM3LjYzNy02Mi40MDdjMTAuNjUxLTE1LjgzMywyMC41MTgtMjkuMTIxLDI5LjcxMi0zOS45OTljLTEuNTY4LTE2LjAwMS0wLjQyNy0zNS4wNDQsNC41MzQtNTguOTA2ICAgQzI3Ny41OTgsMTAuMzM1LDcyLjQ4My03NC4wMzUsMTIuMzcxLDEyMC42MjRDLTI0Ljg0NCwyNDAuODU1LDIzLjgyLDMzMS4wMjcsMTMyLjU5OCwzODIuNTUzYzMuNzE5LDEuNzI3LDcuNTY2LDMuMjksMTEuNTE2LDQuNjkzICAgYzEuMDA5LTExLjQ0NSw1LjIzNS0yNi40MjIsMTIuNjQ0LTQ0Ljc4OEMxNTAuMTk4LDMzNy4yMTQsMTQ1Ljk5NCwzMjkuMTUsMTQ1Ljk5NCwzMjAuMDk3eiBNNDguOTI3LDE4MC42OTkgICBjMC0xNS44MTQsMTIuODE2LTI4LjYzMSwyOC42MjgtMjguNjMxYzE1LjgwNywwLDI4LjYyNywxMi44MTYsMjguNjI3LDI4LjYzMWMwLDE1LjgwNi0xMi44MiwyOC42MjgtMjguNjI3LDI4LjYyOCAgIEM2MS43NDQsMjA5LjMyNyw0OC45MjcsMTk2LjUwNCw0OC45MjcsMTgwLjY5OXogTTEwMS44ODgsMjkxLjQ2OGMtMTUuODEzLDAtMjguNjI5LTEyLjgxMy0yOC42MjktMjguNjIxICAgYzAtMTUuODE1LDEyLjgxNS0yOC42MzEsMjguNjI5LTI4LjYzMWMxNS44MDgsMCwyOC42MjksMTIuODE2LDI4LjYyOSwyOC42MzFDMTMwLjUxNywyNzguNjU2LDExNy42OTYsMjkxLjQ2OCwxMDEuODg4LDI5MS40Njh6ICAgIE0xMjUuNTI2LDgxLjk0YzAtMjAuMTQ0LDE2LjMzNS0zNi40NzcsMzYuNDc3LTM2LjQ3N3MzNi40NywxNi4zMzMsMzYuNDcsMzYuNDc3YzAsMjAuMTQyLTE2LjMyOCwzNi40NzItMzYuNDcsMzYuNDcyICAgUzEyNS41MjYsMTAyLjA4MSwxMjUuNTI2LDgxLjk0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTMwMi43ODYsMTg4Ljg4OWMtMC4wMDItMC4wMDEtMC4wMDQtMC4wMDMtMC4wMS0wLjAwNGMtNy4xNjUtNC41OTktMTMuMDI4LTEwLjQ5NS0xNy4zOS0xNy4xODggICBjLTE0LjI5NSw5LjgzNi0zMi40MzYsMjkuNzY5LTU2LjMxLDY1LjI1OGMtNDguODUsNzIuNjE5LTg0Ljk0NiwxNTUuNjg0LTY4LjAwOSwxNjYuNzhjMS4yNzYsMC44MzcsMi44MjEsMS4yNDEsNC42MDEsMS4yNDEgICBjMjEuODM0LDAsNzkuNTcxLTYwLjY4MywxMjQuNzM1LTEyNy44M2MyNC43ODEtMzYuODM2LDM2LjMyMi02MS41NiwzOS40NzUtNzguNDM2Yy00LjkwNi0wLjY5My05Ljk5NC0xLjk5Ni0xNS4yOTQtMy45NTEgICBDMzEwLjQzNywxOTMuMjI1LDMwNi40NjUsMTkxLjI1MSwzMDIuNzg2LDE4OC44ODl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNNDA5Ljc0LDcxLjY0MmMtMC45NDUtNC4zMjEtNC44NTUtNy4zNTYtOS4yNjgtNy4xOGMtMzUuMzU4LDEuMzE4LTYzLjYxNCw4LjE5NS04My45ODQsMjAuNDM5ICAgYy0yMy4xNzEsMTMuOTI4LTMwLjMwOSwzMS4xMTMtMzIuMjE4LDQzLjA3NmMtMS40Niw5LjE1Mi0wLjI2MiwxOC4yODQsMy4wOTcsMjYuNTk2YzUuNTcsMTMuNzg4LDE3LjA4OSwyNS4zMTgsMzIuMzA5LDMwLjkzNiAgIGM3Ljk4MywyLjk0NywxNS4xNzgsNC4zOCwyMS45OTUsNC4zOGMwLDAsMCwwLDAsMGMxLjAzNCwwLDIuMDYyLTAuMDM3LDMuMDgzLTAuMTA1YzcuNzQyLTAuNTEzLDE1LjExOS0yLjk2MywyMS45NzEtNy4zMDkgICBjMjAuNDE4LTEyLjk1MiwxOC43MDItMzQuMjM1LDE3LjE4OC01My4wMTJjLTEuODg0LTIzLjM3NC0xLjkwNi0zOC4xNjksMjAuNDAyLTQ3LjQyOEM0MDguNDAxLDgwLjM0LDQxMC42ODUsNzUuOTYzLDQwOS43NCw3MS42NDIgICB6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              <h4><span>Art</span></h4>                     
            </div>
            <div>
              <h2><span>Feel free to browse our site</span></h2>
              <span className="sb-toggle">close to see our categories</span>
              <h5><span></span></h5>                      
            </div>
          </div>{/* sb-container */}
        </section>

       </Col>
      </Row>

     
        </Container>

        </div>

    )
  }
}

export default Start;