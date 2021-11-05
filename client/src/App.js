import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/AuthContext";
//components
import Landing from "./components/layout/Landing";
import Auth from "./components/views/Auth";
function App() {
    return (
        <AuthContextProvider>
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
        </AuthContextProvider>
    );
}

export default App;
