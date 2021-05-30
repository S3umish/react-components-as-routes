import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <form>
                <h1>Messages</h1>
                <div>
                    <input type="text" name="messages" placeholder="Add message" />
                    <label htmlFor ="messages"> Messages</label>
                </div>
                
                    <input type = "submit" value ="Send Message" />
            </form>
        )
    }
}
