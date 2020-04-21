import React from 'react';
import SurveyForm from './SurveyForm';
import * as actions from 'actions';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export class Survey extends React.Component {

    constructor() {
        super();

        this.state = {
            errors: [],
            redirect: false
        }

        this.yesNoCategories = ['Select One', 'Yes', 'No', 'Maybe'];
        this.listCategories = ['Select One', 'Search', 'Listing', 'Just Visiting'];
        this.likelyCategories = ['Select One', 'Very Likely', 'Likely', 'Not at all'];

        this.createSurvey = this.createSurvey.bind(this);
    }

    createSurvey(surveyData) {
        console.log(surveyData);
        actions.createSurvey(surveyData).then(
            (survey) => {
                console.log(survey);
                this.setState({ redirect: true });
                toast.success('Thank you! Survey Successfully Recorded!')
            },
            (errors) => {
                this.setState({ errors });
                toast.error('Sorry!, Something went wrong!');
            }
        )
    }

    render() {

        if (this.state.redirect) {
            return (
                <React.Fragment>
                    <Redirect to={{ pathname: '/' }} />
                </React.Fragment>)
        }
        return (

            <section id='newSurvey'>
                <div className='bwm-form'>
                    <div className='row'>
                        <div className='col-md-5 mx-auto'>
                            <h1 className='page-title'>Survey Form</h1>
                            <SurveyForm submitCb={this.createSurvey}
                                yesNoOptions={this.yesNoCategories}
                                listOptions={this.listCategories}
                                likelyOptions={this.likelyCategories}
                                errors={this.state.errors} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}