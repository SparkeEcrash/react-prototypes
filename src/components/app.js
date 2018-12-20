import React, {Component} from 'react';
import ContactList from './contact_list';
import contactData from '../data/contacts';
import ContactForm from './contact_form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contactData
        }
    }

    addContact = (contact) => {
        // console.log('App: addComponent:', contact);
        this.setState({
            contacts: [contact, ...this.state.contacts]
        })
    }

    // addContact(contact){
    //     console.log('App: addComponent:', contact);
    
    //     const newContacts = this.state.contacts.slice();
    
    //     // You could use push here instead of unshift
    //     newContacts.unshift(contact);
    
    //     this.setState({
    //         contacts: newContacts
    //     });
    // }

    render(){
        console.log(this.state.contacts);
    return (
        <div className="container">
            <h1 className="text-center my-3">Address Book</h1>
            <div className="row">
                <div className="col-4"><ContactForm add={this.addContact}/></div>
                <ContactList contacts={this.state.contacts}/>
            </div>
        </div>
    )
    }
}

export default App;