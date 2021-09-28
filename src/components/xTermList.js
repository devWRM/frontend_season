import React from 'react';
import { connect } from 'react-redux';

import Term from './Term.js';

function TermList(props) {

    let allTerms = props.terms.length && props.terms

    let termCheckboxes = props.terms.length && allTerms.map( term => {
        return  <div key={term.id}>
                        <input  type = "checkbox"
                                id={term.id}
                                name={term.name}
                                value={term.name}




                        /> {term.name}
                </div>
    })


    return (
        <div>
            List ALL terms (seasons)
            {termCheckboxes}

            <Term />
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return { terms: state.terms }
}


export default connect(mapStateToProps)(TermList);
