import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Raphael de Falco Ayres</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <div className="box-img">
              <img
                src={'https://api.adorable.io/avatars/50/abott@adorable.png'}
                alt="avatar"
              />
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
