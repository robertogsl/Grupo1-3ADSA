import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ServicesHired } from '../pages/ServicesHired';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newService" component={NewService} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/servicesHired" component={ServicesHired} />

        </Switch>
    );
};
