// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

import React from 'react'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../Loading/loading';

function Results(props) {
  return (
    <>
      {/* <JSONPretty data-testid="results" id="json-pretty" data={props.data ? JSON.stringify(props.data, undefined, 2) : 'Loading..'}/>  */}
      { props.data ?<JSONPretty data-testid="results"data={props.data}></JSONPretty>  :  <Loading/>}
    </>
  )
}

export default Results

