import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
        <LinkContainer to="/admin">
            <NavItem eventKey={ 3 } href="/admin">Admin</NavItem>
        </LinkContainer>
      <LinkContainer to="/courses">
          <NavItem eventKey={ 3 } href="/courses">Courses</NavItem>
      </LinkContainer>
        <LinkContainer to="/players">
            <NavItem eventKey={ 4 } href="/players">Players</NavItem>
        </LinkContainer>
        <LinkContainer to="/seasons">
        <NavItem eventKey={ 5 } href="/seasons">Seasons</NavItem>
    </LinkContainer>
        <LinkContainer to="/teams">
            <NavItem eventKey={ 5 } href="/teams">Teams</NavItem>
        </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 6 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 6.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
