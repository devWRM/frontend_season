import React, { Component } from 'react';
import { connect } from 'react-redux';

class TermList extends Component {
// this.props.terms

//     constructor() {
// // debugger;
//         super();
       
//     }




    state = {
        Seasons: {
            1: false,
            2: false,
            3: false,
            4: false
        }
    }

        checkClick = (e) => {
            var {name, checked} = e.target;
            this.setState((e)=>{
                var selectedSeason = e.Seasons
                var tcb = termCheckboxes
                return selectedSeason[name] = checked;
            });
        };


        //  Deposit ALL the terms in a variable
        allTerms = this.props.terms.length && this.props.terms
        //  Map ALL the terms to create checkboxes that checkClick state on each
        // termCheckboxes = this.props.terms.length && this.allTerms.map(term => {

                termCheckboxes = this.props.terms.length && this.allTerms.map(term => {
                        return  <div key={term.id}>

                                <input  type="checkbox"
                                        id={term.id}
                                        name={term.id}
                                        value={term.name}

                                        onChange={this.checkClick}

                                /><label for={term.id}>{term.name}</label>
                            </div>            
                })





    render() {
// debugger;

        // Below shows ALL displayItems
        // let displayItems = Object.keys(this.state.Seasons)

        // Below filtering keys because Object.keys indicates keys
        // Below shows ONLY displayItems with true checked state
        let displayItems = Object.keys(this.state.Seasons).filter((stateKey) => this.state.Seasons[stateKey])

        
        return (
            <div>
                NEW Term List
                {this.termCheckboxes}
                {/* {this.props.terms.length && this.termCheckboxes} */}
                {this.props.terms.length && displayItems + "Hello"}


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {terms: state.terms}
}

export default connect(mapStateToProps)(TermList);
