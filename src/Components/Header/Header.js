import React from 'react';
import './Header.css'
import { Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <div>
            <nav>
                <a variant="outline-info" href="/home">Home</a>
                <a variant="outline-info" href="/courses">Courses</a>
            </nav>
            </div>
            <div className='search'>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="secondary">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;