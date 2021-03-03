import "./App.css";
import UserList from "./Component/UserList/UserList";
import { Route, Switch } from "react-router-dom";
import PostUser from "./Component/PostUser/PostUser";
import ListComments from "./Component/ListComments/ListComments";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route  path="/posts/:id" component={PostUser} />
        <Route path="/comments/:id" component={ListComments} />
      </Switch>
    </div>
  );
}

export default App;
