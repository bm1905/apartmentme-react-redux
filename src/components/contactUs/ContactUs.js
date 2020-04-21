import React from 'react';
import ContactUsForm from './ContactUsForm';
import * as actions from 'actions';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../shared/Loader';

export class ContactUs extends React.Component {

    constructor() {
        super();

        this.state = {
            errors: [],
            redirect: false,
            isFetching: false
        }

        this.createContactUs = this.createContactUs.bind(this);
    }

    createContactUs(contactData) {
        console.log(contactData);
        this.setState({ isFetching: true });
        actions.createContact(contactData).then(
            (contact) => {
                console.log(contact);
                this.setState({ isFetching: false });
                this.setState({ redirect: true });
                toast.success('Thank you! Message Successfully Sent!')
            },
            (errors) => {
                this.setState({ errors });
                toast.error('Sorry!, Something went wrong!');
            }
        )
    }

    render() {

        if (this.state.isFetching) {
            return (
                <Loader />
            )
        }

        if (this.state.redirect) {

            return (
                <React.Fragment>
                    <Redirect to={{ pathname: '/' }} />
                </React.Fragment>)
        }
        return (

            <section id='newContactUs'>
                <div className='bwm-form'>
                    <div className='row'>
                        <div className='col-md-5 mx-auto'>
                            <h1 className='page-title'>Contact Us</h1>
                            <ContactUsForm submitCb={this.createContactUs} errors={this.state.errors} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}