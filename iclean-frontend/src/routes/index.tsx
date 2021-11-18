import { Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ListOnMap } from '../pages/ListOnMap';
import { Profile } from '../pages/Profile';
import { ServicesHired } from '../pages/ServicesHired';
import { Candidature } from '../components/Candidature';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newService" isPrivate component={NewService} />
            <Route path="/dashboard" isPrivate component={Dashboard} />
            <Route path="/listOnMap" isPrivate component={ListOnMap} />
            <Route path="/profile" isPrivate component={Profile} />
            <Route path="/servicesHired" isPrivate component={ServicesHired} />
            <Route path="/testeComponente" component={Candidature} />
        </Switch>
    );
};
