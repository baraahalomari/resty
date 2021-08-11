// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method: 'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;

import React from 'react'
import './form.scss';
import { useState } from 'react';


function Form(props) {
  let [postAria, setspostAria] = useState(false);

  let [method, setmethod] = useState('get');
  let [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  let [request, setrequest] = useState('https://pokeapi.co/api/v2/pokemon');
 
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  function showPost(e) {
    setspostAria(!postAria);
    setmethod(e.target.id);
  }


  function setMethod(e) {
    setmethod(e.target.id);
  }

  function handlerUrl(e) {
    seturl(e.target.value);
  }

  function handlerRequesrBody(e) {
    setrequest(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handlerUrl} />
          <button type="submit" data-testid="submitButton" >GO!</button>
        </label>
        <label className="methods">
          <button id="get" onClick={setMethod}>GET</button>
          <button id="post" onClick={showPost}>POST</button>
          <button id="put" onClick={showPost}>PUT</button>
          <button id="delete" onClick={setMethod}>DELETE</button>
        </label>
        {postAria && <textarea rows='16' cols='31' onChange={handlerRequesrBody} />}
       
      </form>
    </>
  )
}

export default Form