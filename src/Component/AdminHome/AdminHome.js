import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import Admin from '../Admin/Admin';

const AdminHome = () => {
    return (
        <div className="container">
            <Row> 
                <Col  sm={4}>
                <AdminHeader></AdminHeader>
                </Col>
                <Col  sm={8}>
                    <Admin></Admin>
                </Col>
            </Row>
            
            
        </div>
    );
};

export default AdminHome;