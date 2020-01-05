import React from 'react';
import './App.less';
import './common/CustomizeAntD.less';
import routers from './router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogHeader from './views/header/header';
import Footer from './views/footer/footer';


function App() {
  return (
    <Router>
      <div className="navigation">
        <BlogHeader></BlogHeader>
      </div>
      <div className="container">
        {routers.map((route, idx) => {
          return (
            <Route 
              key={idx}
              path={route.path} 
              component={route.component}>
            </Route>
          );
        })}
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
