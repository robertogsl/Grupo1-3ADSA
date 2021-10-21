import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newService" component={NewService} />
        </Switch>
    );
};
