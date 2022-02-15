import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Home from './pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route exact path="/filme/:id" component={Filme}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;