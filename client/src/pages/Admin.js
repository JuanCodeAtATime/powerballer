import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
// import Row from "../components/Row";
// import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import List from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";


class Admin extends Component {

    // setting state for users 
    state = {
        users: [],
        fullname: "",
        location: "",
        expiration: ""
    };

    componentDidMount() {
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMember()
            .then(res =>
                this.setState({ Member: res.data, fullname: "", location: "", expiration: "" })
            )
            .catch(err => console.log(err));
    };

    deleteMember = id => {
        API.deleteMember(id)
            .then(res => this.loadMember())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.fullname && this.state.location) {
            API.saveMember({
                fullname: this.state.fullname,
                location: this.state.location,
                expiration: this.state.expiration
            })
                .then(res => this.loadMembers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Add Member</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.fullname}
                                onChange={this.handleInputChange}
                                name="fullname"
                                placeholder="FullName (required)"
                            />
                            <Input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Location (required)"
                            />
                            <Input
                                value={this.state.expiration}
                                onChange={this.handleInputChange}
                                name="expiration"
                                placeholder="Expiration (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.location && this.state.fullname)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Member
                </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Members On My List</h1>
                        </Jumbotron>
                        {/* {this.state.users.length ? (
                            <List>
                                {this.state.users.map(users => (
                                    <ListItem key={users._id}>
                                        <Link to={"/member/" + users._id}>
                                            <strong>
                                                {users.fullname} by {users.location}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteMember(users._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )} */}
                            <h3> test display</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin; 