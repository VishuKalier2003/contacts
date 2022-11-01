import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    //* The Props which are of name callLog are called
    // todo 4. We then map each contact item to the contacts attribute...
    const renderContactList = props.contacts.map((contact) => {  // We take one contact at a time from the array of contacts...
        return (
            <ContactCard contacts={contact}></ContactCard>
        );
    });
    //! The Constant Contact List is now displayed as a list...
    // todo 5. Then we return the callLog attribute to display...
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
};

export default ContactList;