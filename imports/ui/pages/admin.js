import React from 'react';
import { Row, Col, Link, NavItem, Nav, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { AdminNavigation } from '../components/admin-navigation'
export const Admin  = () => (
    <div id="admin-root">
         <Row>
            <Col xs={ 12 }>
                <h4 className="page-header">Admin section</h4>
                <AdminNavigation />
            </Col>
        </Row>
    </div>

);

