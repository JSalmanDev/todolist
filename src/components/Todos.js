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
            objectToEdit: null
        }
    }

    addTodo = async (e) => {
        e.preventDefault();
        
        let { title, objectToEdit } = this.state;
        
        if (!title && title.trim().length <= 0) {
            this.setState({ invalid: true });
            return;
        }

        if (objectToEdit) {
            await this.props.editTodo(objectToEdit.id, title);
        } else {
            await this.props.addTodo(title);
        }
        
        this.setState({ title: '', objectToEdit: null });
    }

    
    handleComplete = (id) => {
      this.props.completeTodo(id);
    }

    handleEdit = (elem) => {
      this.setState({ objectToEdit: elem, title: elem.title });
    }

    handleDelete = (id) => {
      this.props.deleteTodo(id);
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
                        <Row>
                            <Col>
                                <Table hover>
                                    <tbody>
                                        {
                                            this.props.list.map(elem => (
                                                <tr className="list-style" key={elem.id}>
                                                    <td style={{ width: '5%' }}>
                                                        <input type="checkbox"
                                                            defaultChecked={elem.completed}
                                                            required={true}
                                                            onClick={() => this.handleComplete(elem.id)}
                                                        />
                                                    </td>
                                                    <td  style={{ width: '65%' }}>{elem.title}</td>
                                                    <td style={{ width: '10%' }}>{ elem.completed ? <Badge pill className="custom-badge" variant='success'> completed </Badge> : null } </td>
                                                    <td style={{ width: '10%' }}><Button variant="outline-primary" onClick={()=>this.handleEdit(elem)}>Edit</Button></td>
                                                    <td style={{ width: '10%' }}><Button variant="outline-primary" onClick={()=>this.handleDelete(elem.id)}>Delete</Button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                          <Col>
                              <h6>SHOW:</h6>
                              <div>
                                  <span className={ this.props.selectedFilter && this.props.selectedFilter == 'SHOW_ALL' ? `badge badge-secondary filter-btn filter-active` : 'badge badge-secondary filter-btn' } onClick={(e)=> this.props.setTodoListFilter('SHOW_ALL')}>ALL</span>
                                  <span className={this.props.selectedFilter && this.props.selectedFilter == 'SHOW_ACTIVE' ? `badge badge-secondary filter-btn filter-active` : 'badge badge-secondary filter-btn'} onClick={(e)=> this.props.setTodoListFilter('SHOW_ACTIVE')}>ACTIVE</span>
                                  <span className={this.props.selectedFilter && this.props.selectedFilter == 'SHOW_COMPLETED' ? `badge badge-secondary filter-btn filter-active` : 'badge badge-secondary filter-btn'} onClick={(e)=> this.props.setTodoListFilter('SHOW_COMPLETED')}>COMPLETED</span>
                              </div>
                          </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
};


const mapStateToProps = state => {
  return {
    list: state.todoslist.todos
  }
}
export default connect(mapStateToProps, actions)(Todos);