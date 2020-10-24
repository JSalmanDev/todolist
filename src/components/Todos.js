import React from 'react';
import { Row, Col, Form, Button, Badge, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../store/actions/TodosAction';

class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            invaid: false,
        }
    }

    addTodo = async (e) => {
        e.preventDefault();
        
        let { title } = this.state;
        
        if (!title && title.trim().length <= 0) {
            this.setState({ invalid: true });
            return;
        }

        await this.props.addTodo(title);
        
        this.setState({ title: '' });
    }

    
    render() {
        return (
            <div className='container'>
                <Row className='s-nav-comp'>
                    <Col md={{ span: 8, offset: 2 }} >
                        <Form onSubmit={(e)=> this.addTodo(e)}>
                            <Form.Row>
                                <Col md={9}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control 
                                            type="text" 
                                            name="title"
                                            required
                                            placeholder="task..." 
                                            value={this.state.title}
                                            onChange={(e)=> this.setState({ title: e.target.value })}
                                            className={ this.state.invalid ? 'in-valid' : '' }
                                            onFocus={()=> this.setState({ invalid: false })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Button variant='outline-primary' className='w-f' type="submit" onClick={(e) => this.addTodo(e) }>{ this.state.objectToEdit ? 'Save' : 'ADD' }</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
};


export default connect(null, actions)(Todos);