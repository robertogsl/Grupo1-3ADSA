import { FaStore, FaCity, FaIdCard, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

import { Container, SideBar, Logo, Options, Helper, Content, PrimaryCard, SecondCard, Title } from './styles';
import logoSVG from '../../assets/Logo.svg';

export function Dashboard(){
    return (
        <Container>
            <SideBar>
                <div>
                <Logo>
                    <img src={logoSVG} alt="Logo iClean" />
                    <strong>iClean</strong>
                    <div/>
                </Logo>                   

                <Options>
                    <li>
                        <div>
                            <FaStore size={20} color='#ffffff'/>
                        </div>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <div>
                            <FaCity size={20} color='#ffffff'/>
                        </div>
                        <span>Serviços</span>
                    </li>
                    <li>
                        <div>
                            <FaIdCard size={20} color='#ffffff'/>
                        </div>
                        <span>Perfil</span>
                    </li>
                    <li>
                        <div>
                            <FaFileAlt size={20} color='#ffffff'/>
                        </div>
                        <span>Novo serviço</span>
                    </li>
                </Options>
                </div>
                <div style={{ height:"100px"}}>
                    <Helper>
                        <span>SingOut</span>
                        <FaSignOutAlt size={32} color='var(--primary)'/>
                        
                    </Helper>
                </div>
            </SideBar>
            <Content>
                <Title>

                </Title>

                <PrimaryCard>
                </PrimaryCard>
                <PrimaryCard>
                </PrimaryCard>
                <SecondCard>
                    <div>

                    </div>
                    <div>

                    </div>
                </SecondCard>
            </Content>     
        </Container>
    )
}