import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            1: false,
            2: false,
            3: false,
            4: false
        }
    }



    

    // componentDidMount = () => {
    //     this.setState({
    //         toggler: !this.state.toggler
    //     })
    // }



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
        // NOTE Checkboxes only shows AFTER app is opened and TermList.js component adjusted/altered

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
                <div>
                    NEW Term List
                </div>


                <div>
                    {this.termCheckboxes}
                </div>


                <div>
                    {this.props.terms.length ? (displayItems + "")
                        :   ""
                    }
                </div>



                {/* {this.props.terms.length && this.termCheckboxes} */}



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {terms: state.terms}
}

export default connect(mapStateToProps)(TermList);
