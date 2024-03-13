import SetupWallets from 'SetupWallets.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react' 

import { AccountsContextProvider } from '@contexts/AccountsContext.tsx';
import { ModalStatusContextProvider } from '@contexts/ModalStatusContext.tsx';

const SetupApp = () => (
  <BrowserRouter>
    <Auth0Provider domain="wakuuenterprises.auth0.com" clientId="RHao1hD22yLZK9MAnNM2JTXJc0z5kYAQ" authorizationParams={{ redirect_uri: window.location.origin }}>
      <ModalStatusContextProvider>
        <AccountsContextProvider>
          <SetupWallets />
        </AccountsContextProvider>
      </ModalStatusContextProvider>
    </Auth0Provider>
  </BrowserRouter>
);

export default SetupApp;
