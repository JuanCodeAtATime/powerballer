import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

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
        API.getMembers()
            .then(res =>
                this.setState({ Members: res.data, fullname: "", location: "", expiration: "" })
            )
            .catch(err => console.log(err));
    };

    deleteMember = id => {
        API.deleteMember(id)
            .then(res => this.loadMembers())
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
            API.saveBook({
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
                            <h1>Member List</h1>
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
                            <TextArea
                                value={this.state.expiration}
                                onChange={this.handleInputChange}
                                name="expiration"
                                placeholder="Expiration (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.location && this.state.fullname)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit User
                </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                        </Jumbotron>
                        {this.state.users.length ? (
                            <List>
                                {this.state.users.map(book => (
                                    <ListItem key={book._id}>
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
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin; 