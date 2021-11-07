import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/AuthContext";
//components
import Landing from "./components/layout/Landing";
import Auth from "./components/views/Auth";
import Dashboard from "./components/views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
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
                    <ProtectedRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                </Switch>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
