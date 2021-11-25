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
import { Convites } from '../pages/Convites';
import { Escolher } from '../pages/Escolher';
import { Detalhes } from '../pages/Detalhes';
import { Candidaturas } from '../pages/Candidaturas';
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
            <Route path="/profile/:idProprietaria" isPrivate component={Profile} />
            <Route path="/services" isPrivate component={Services} />
            <Route path="/convites" isPrivate component={Convites} />
            <Route path="/candidaturas" isPrivate component={Candidaturas} />
            <Route path="/detalhes/:idTrabalho/:tipo" isPrivate component={Detalhes} />
            <Route path="/escolher/:idCandidata/:idTrabalho" isPrivate component={Escolher} />
            <Route path="/interessados/:idTrabalho" isPrivate component={Interessados} />
            <Route path="/servicosAbertosConvite/:idCandidata" isPrivate component={ServicosAbertosConvite} />
            <Route path="/convidar/:idCandidata/:idTrabalho" isPrivate component={Convidar} />
            <Route path="/servicesHired" isPrivate component={ServicesHired} />
            <Route path="/listaServicos/:idTrabalho" isPrivate component={ListaServicos} />
        </Switch>
    );
};
