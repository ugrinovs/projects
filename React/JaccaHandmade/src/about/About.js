import React from 'react';

class About extends React.Component {
    state = 
    {
        content: "About radi page"
    }
    handleClick() {
        this.setState({
            content: "About page"
        });
    }

    render() {
        return <div onClick={this.handleClick.bind(this)}>{this.state.content}</div>
    }
}

export default About;