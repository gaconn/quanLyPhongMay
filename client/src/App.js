import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Landing from "./components/layout/Landing";
import Auth from "./components/views/Auth";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route
                    exact
                    path='/login'
                    render={(props) => <Auth {...props} auth='login' />}
                />
            </Switch>
        </Router>
    );
}

export default App;
