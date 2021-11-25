import { Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NewService } from '../pages/NewService';
import { Dashboard } from '../pages/Dashboard';
import { ListOnMap } from '../pages/ListOnMap';
import { Profile } from '../pages/Profile';
import { ServicosAbertosConvite } from '../pages/ServicosAbertosConvite';
import { Convidar } from '../pages/Convidar';
import { ServicesHired } from '../pages/ServicesHired';
import { Services } from '../pages/Services';
import { Interessados } from '../pages/Interessados';
import { InviteForService } from '../components/InviteForService';
import { OpenServices } from '../components/OpenServices';
import { ConfirmInvite } from '../components/ConfirmInvite';
import { PageServices } from '../components/PageServices';
import { CardServices } from '../components/CardServices';
import { PersonService } from '../components/PersonService';
import { ListaServicos } from '../pages/ListaServicos';

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
            <Route path="/services" isPrivate component={Services} />
            <Route path="/interessados/:idTrabalho" isPrivate component={Interessados} />
            <Route path="/servicosAbertosConvite/:idCandidata" isPrivate component={ServicosAbertosConvite} />
            <Route path="/convidar/:idCandidata/:idTrabalho" isPrivate component={Convidar} />
            <Route path="/servicesHired" isPrivate component={ServicesHired} />
            <Route path="/listaServicos/:idTrabalho" isPrivate component={ListaServicos} />
        </Switch>
    );
};
