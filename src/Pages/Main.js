import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login';
import AdminIndex from "./AdminIndex";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

function Main(){
    return (
      <div>
        <Router>
          {/* exact 精确匹配  */}
          <Route path="/" exact component={Login} />
          <Route path="/index/"  component={AdminIndex} />
        </Router>
      </div>
    );
}
export default Main