import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ListOnMap } from '../pages/ListOnMap';
import { ServicesHired } from '../pages/ServicesHired';
import { InterestedProfessional } from '../components/InterestedProfessional';
import { ChooseProfile } from '../components/ChooseProfile';
import { InviteForService } from '../components/InviteForService';
import { OpenServices } from '../components/OpenServices';
import { ConfirmInvite } from '../components/ConfirmInvite';
import { PageServices } from '../components/PageServices';

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
            <Route path="/testeComponente" component={PageServices} />

        </Switch>
    );
};
