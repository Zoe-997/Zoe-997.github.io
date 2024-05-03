'use client';

import Container from '../Common/Container';
import Logo from './logo';
import MainMenu from '@/app/components/Header/mainMenu'

const Header = () => {
    return (
        <header className="bg-[#001529]">
          <Container>
            <div className="flex items-center">
              <Logo/>
              <MainMenu/>
            </div>
          </Container>
        </header>
    );
}
 
export default Header;