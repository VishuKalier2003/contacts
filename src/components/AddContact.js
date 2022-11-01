import React from 'react';

//? This is a Class Component...
class AddContact extends React.Component {
    //! We do not use React hooks in class components we instead use State..
    state = {
        name: "",
        email: "",
    }
    // An add function defined for the event when submit of the form is done...
    add = (e) => {
        e.preventDefault();  //* Function to ensure page does not get refreshed...
        if (this.state.name === "" || this.state.email === "")
        {
            alert("All the fields are Mandatory !!");
            return;
        }
        this.props.addContactHandler(this.state);   //! This helps us to send values from component to the App.js (parent) ...
        console.log("");
        this.setState({name: "", email: ""});  // This simply make the fields empty after clicking the button...
    };
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Name' value={this.state.name} onChange={ (e) => {this.setState({name: e.target.value})}}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Email' value={this.state.email} onChange={ (e) => {this.setState({email: e.target.value})}}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
};

export default AddContact;

//? The usage of onChange and setState must be taken great care...