
import Editor from "@src/Editor";
import MonacoEditor from "@src/MonacoEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <span className="bg-green-500">
          <Link to="/">MonacoEditor</Link>
        </span>
        <span className="bg-indigo-500">
          <Link to="/editor">Editor.js</Link>
        </span>
      </div>
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
        <Route path="/">
          <MonacoEditor />
        </Route>
      </Switch>
    </Router>
  );
}




export default App;
