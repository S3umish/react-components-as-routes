import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <form>
            <h1>SignUp</h1>
                <div>
                  <input type="text" name="username" placeholder="Username" />
                  <label htmlFor="username">Username</label>
                </div>
                <div>
                  <input type ="text" name="emailid" placeholder="Email Id" />
                  <label htmlFor="emailid">Email Id</label>
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
                <input type ="submit" value ="SignUp" />
          </form>
        )
    }
}
