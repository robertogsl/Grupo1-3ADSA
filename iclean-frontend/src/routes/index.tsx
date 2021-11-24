import { Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ListOnMap } from '../pages/ListOnMap';
import { Profile } from '../pages/Profile';
import { ModalPage } from '../pages/ModalPage';
import { ServicesHired } from '../pages/ServicesHired';
import { InterestedProfessional } from '../components/InterestedProfessional';
import { ChooseProfile } from '../components/ChooseProfile';
import { InviteForService } from '../components/InviteForService';
import { OpenServices } from '../components/OpenServices';
import { ConfirmInvite } from '../components/ConfirmInvite';
import { PageServices } from '../components/PageServices';
import { CardServices } from '../components/CardServices';
import { PersonService } from '../components/PersonService';

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
            <Route path="/modal/:user/:type" isPrivate component={ModalPage} />
            <Route path="/servicesHired" isPrivate component={ServicesHired} />
            <Route path="/testeComponente" isPrivate component={CardServices} />
            {/* <Route path="/newService" component={NewService} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/listOnMap" component={ListOnMap} />
            <Route path="/servicesHired" component={ServicesHired} />
            <Route path="/testeComponente" component={PageServices} /> */}

        </Switch>
    );
};
