import React, { Component } from 'react';
import { push } from 'react-router';
import { Input, Menu, Container, Button, Sidebar, Icon, Grid, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { 
      activeItem: 'home',
      visible: false
     }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      / /g
      const linkFromName = name.replace(/ /g, "-");
      this.props.router.push(linkFromName);
    }

  render() {
    const { activeItem, visible } = this.state

    return (
        <Container>
            <Menu secondary pointing className="hidden">
                <Menu.Item link name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
                <Menu.Item name='contact us' active={activeItem === 'contact us'} onClick={this.handleItemClick} /> 
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>
        </Container>
    )
  }
}