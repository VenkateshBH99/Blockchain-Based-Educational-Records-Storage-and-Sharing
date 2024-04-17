import React, { Component } from 'react';
import '../CSS/login.css';
import notesCover from '../Images/back.jpg';
import { navigate } from 'react-router-dom'; // Changed from useNavigate to navigate

class Login extends Component {
  componentDidMount() {
    document.title = "Login";
  }

  state = {
    username: '',
    password: '',
    loginType: ''
  };

  // Removed navigate = useNavigate();

  validate = () => { // Removed (state) parameter as it was unused
    const { username, password, loginType } = this.state;
    if (!username || !password) {
      alert("Username / Password Missing!!!");
    } else {
      if (username === "ST1234" && password === "1234" && loginType === "Student") {
        navigate('/Student'); // Changed to navigate from this.navigate
      } else if (username === "IN1234" && password === "1234" && loginType === "Institute") {
        navigate('/Institute'); // Changed to navigate from this.navigate
      } else {
        alert("Wrong Username or Password");
      }
    }
  };

  render() {
    return (
      <div className="container signInCard center">
        <div className="card setCardWidth">
          <div className="card-image ">
            <img src={notesCover} alt="Notes" className="cardImageHeight" />
          </div>
          <div className="signInContainer card-content">
            <h4 className="grey-text card-title">Sign In</h4>
            <form onSubmit={this.submitted} className="signInForm">
              <div className="input-field">
                <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
                <input
                  type="text"
                  id="email"
                  onChange={(evt) => {
                    this.setState({ username: evt.target.value });
                  }}
                />
                <label htmlFor="loginID">Login ID</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix grey-text text-darken-3">lock</i>
                <input
                  id="password"
                  type="password"
                  onChange={(evt) => {
                    this.setState({ password: evt.target.value });
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field row">
                <p className="col s4">
                  <label>
                    <input
                      name="dept"
                      type="radio"
                      value="Student"
                      onChange={(evt) => {
                        this.setState({ loginType: "Student" });
                      }}
                    />
                    <span>Student</span>
                  </label>
                </p>
                <p className="col s4">
                  <label>
                    <input
                      name="dept"
                      type="radio"
                      value="Institute"
                      onChange={(evt) => {
                        this.setState({ loginType: "Institute" });
                      }}
                    />
                    <span>Institute</span>
                  </label>
                </p>
              </div>
              <div className="input-field center card-action">
                <button className="btn grey darken-3" onClick={this.validate}>
                  Sign In!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;



/* import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';
import notesCover from '../Images/back.jpg';

class Login extends Component {
  componentDidMount() {
    document.title = "Login";
  }

  state = {
    username: '',
    password: '',
    loginType: ''
  };

  validate = () => {
    const { username, password, loginType } = this.state;
    const navigate = useNavigate(); // Use the useNavigate hook

    if (!username || !password) {
      alert("Username / Password Missing!!!");
    } else {
      if (username === "ST1234" && password === "1234" && loginType === "Student") {
        navigate('/Student'); // Use navigate instead of history.push
      } else if (username === "IN1234" && password === "1234" && loginType === "Institute") {
        navigate('/Institute'); // Use navigate instead of history.push
      } else {
        alert("Wrong Username or Password");
      }
    }
  };

  render() {
    return (
      <div className="container signInCard center">
        <div className="card setCardWidth">
          <div className="card-image ">
            <img src={notesCover} alt="Notes" className="cardImageHeight" />
          </div>
          <div className="signInContainer card-content">
            <h4 className="grey-text card-title">Sign In</h4>
            <form onSubmit={this.submitted} className="signInForm">
              <div className="input-field">
                <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
                <input
                  type="text"
                  id="email"
                  onChange={(evt) => {
                    this.setState({ username: evt.target.value });
                  }}
                />
                <label htmlFor="loginID">Login ID</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix grey-text text-darken-3">lock</i>
                <input
                  id="password"
                  type="password"
                  onChange={(evt) => {
                    this.setState({ password: evt.target.value });
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field row">
                <p className="col s4">
                  <label>
                    <input
                      name="dept"
                      type="radio"
                      value="Student"
                      onChange={(evt) => {
                        this.setState({ loginType: "Student" });
                      }}
                    />
                    <span>Student</span>
                  </label>
                </p>
                <p className="col s4">
                  <label>
                    <input
                      name="dept"
                      type="radio"
                      value="Institute"
                      onChange={(evt) => {
                        this.setState({ loginType: "Institute" });
                      }}
                    />
                    <span>Institute</span>
                  </label>
                </p>
              </div>
              <div className="input-field center card-action">
                <button className="btn grey darken-3" onClick={this.validate}>
                  Sign In!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login; */