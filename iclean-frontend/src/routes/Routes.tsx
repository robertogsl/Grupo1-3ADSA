import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ListOnMap } from '../pages/ListOnMap';
import { ServicesHired } from '../pages/ServicesHired';
import { DetailsService } from '../components/DetailsService';
import { DetailsInvite } from '../components/DetailsInvite';
import { Candidature } from '../components/Candidature';
<<<<<<< HEAD
import { MadeInvitation } from '../components/MadeInvitation';
=======
import { DetailsInvite } from '../components/DetailsInvite/Index';
>>>>>>> 32ddf9cef6db8ee1b0636a77845743664098fa9d

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newService" component={NewService} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/listOnMap" component={ListOnMap} />
            <Route path="/servicesHired" component={ServicesHired} />
<<<<<<< HEAD
            <Route path="/testeComponente" component={MadeInvitation} />

=======
            <Route path="/testeComponente" component={DetailsInvite} />
>>>>>>> 32ddf9cef6db8ee1b0636a77845743664098fa9d
        </Switch>
    );
};
