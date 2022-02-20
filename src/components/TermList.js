import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TermList.css';


    // READ NOTE Checkboxes are NOT automatically displaying when app first opened nor on page refresh
    // READ NOTE Checkboxes only shows AFTER app is opened and TermList.js component's return code adjusted/altered & saved



// STYLING RESOURCE     https://www.youtube.com/watch?v=5mHWWwbOu-s

class TermList extends Component {
// this.props.terms

    // componentDidMount() {
    //     this.forceUpdate();
    //     // this.setState({});
    // }

    
//     constructor(props) {
// // debugger;
//         super(props);
//         this.state = {
//             toggler: false
//         }       
//     }


            // state = {
            //     toggler: false
            // }   





    state = {
        toggler: false,
        Seasons: {
            "one": false,
            "two": false,
            "three": false,
            "four": false
        }
    }




    

    // componentDidMount = () => {
    //     this.setState({
    //         toggler: !this.state.toggler
    //     })
    // }


    // https://reactjs.org/docs/react-component.html
    // Constructor is the only place where you should assign this.state directly. 
    // In all other methods, you need to use this.setState() instead.
    // setState provided by React; checkClick built by SE
    checkClick = (e) => {
            var {name, checked} = e.target;
            this.setState((e)=>{
                var selectedSeason = e.Seasons
                return selectedSeason[name] = checked;
            });
        };


 

        //  Deposit ALL the terms in a variable
        allTerms = this.props.terms.length && this.props.terms
        //  Map ALL the terms to create checkboxes that checkClick state on each
        // NOTE Checkboxes are NOT automatically displaying when app first opened nor on page refresh
        // NOTE Checkboxes only shows AFTER app is opened and TermList.js component's return code adjusted/altered & saved

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
        let displayItems = this.props.terms.length ? Object.keys(this.state.Seasons).filter((stateKey) => this.state.Seasons[stateKey])
                :   ""

    
        return (
            <div className="container">
                <div class="child child-1">
                    FILE: TermList.js <br />
                    -- Checkboxes in middle box WILL NOT automatically display when app first opened nor on page refresh
    <br />-- Checkboxes will show AFTER app is opened and TermList.js component's return code adjusted/altered & saved

                </div>


                {/* Displays in middle box: checkboxes populated with seasons from backend db/seeds.rb file */}
                <div class="child child-2">
                    {this.termCheckboxes}
                </div>

                {/* Displays number of Season checked */}
                <div class="child child-3">
                    Without commas: {displayItems}
                    <br /><br />
                    With commas: 
                    {this.props.terms.length ? (displayItems + "")
                        :   ""
                    }
                </div>



                {/* {this.props.terms.length && this.termCheckboxes} */}



            </div>
        )
    }
}


// Assigns the state for terms to the variable terms
const mapStateToProps = (state) => {
    return {terms: state.terms}
}

export default connect(mapStateToProps)(TermList);
