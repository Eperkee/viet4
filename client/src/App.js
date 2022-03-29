import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Fooldal from './Fooldal';


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
    // <DataProvider>
    //   <Router>
    //     <div className="App">
    //       <Header />
    //        <Switch>
    //       <Route path="/" exact component={MainPages} />
    //       <Route path="/kezdo" component={Fooldal} />
    //        </Switch>
    //     </div>
    //   </Router>
    // </DataProvider>
    
  );
}

export default App;
