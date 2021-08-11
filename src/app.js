// import React from 'react';

// import './app.scss';

// // Let's talk about using index.js and some other name in the component folder
// // There's pros and cons for each way of doing this ...
// import Header from './components/header';
// import Footer from './components/footer';
// import Form from './components/form';
// import Results from './components/results';
// import axios from 'axios';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//       showLoading: false
//     };
//   }


//   callApi = async (requestParams, requestBody) => {
//     // mock output
//     this.setState({ data: null });
//     if (requestBody) {
//       const result = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
//       const data = { headers: result.headers, count: result.data.count, results: result.data.results }
//       this.setState({ data, requestParams, showLoading: true });
//     } else {
//       const result = await axios[requestParams.method](requestParams.url);
//       const data = { headers: result.headers, count: result.data.count, results: result.data.results }
//       this.setState({ data, requestParams, showLoading: true });
//     }
//   }


//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;



// import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});


  useEffect(async () => {
    setData(null);
    if (requestBody) {
      const result = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
    } else {
      const result = await axios[requestParams.method](requestParams.url);
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
    }
  }, [requestParams]);

  function callApi(requestParams, requestBody) {
    // mock output
    setRequestParams(requestParams);
    setRequestBody(requestBody);
  }
  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  )
}
export default App;

