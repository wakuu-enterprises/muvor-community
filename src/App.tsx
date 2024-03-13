import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';

// import PrivateRoute from '@common/PrivateRoute.tsx';

import Header from '@header/Header.tsx';

import { ALTERNATE_BACKGROUND_CLASSNAME, mediaQueries } from '@helpers/reusableStyles.ts';
import { routes } from '@helpers/routes.ts';

import Main from '@pages/Main/Main.tsx';
import CollectionEdit from '@pages/MyAssets/Collections/CollectionEdit.tsx';
import CollectionsView from '@pages/MyAssets/Collections/CollectionsView.tsx';
import CreateCollection from '@pages/MyAssets/MintNft/CreateCollection.tsx';
import MintNft from '@pages/MyAssets/MintNft/MintNft.tsx';
import MintNftIndex from '@pages/MyAssets/MintNft/MintNftIndex.tsx';
import SelectCollection from '@pages/MyAssets/MintNft/SelectCollection.tsx';
import NftEdit from '@pages/MyAssets/Nfts/NftEdit.tsx';
import MyNfts from '@pages/MyAssets/Nfts/Nfts.tsx';
import CommunityView from '@pages/Community/CommunityView.tsx';
import AddMember from '@pages/Community/AddMember.tsx';
import MemberView from '@pages/Community/MemberView.tsx';
import VerifyPage from '@pages/Community/VerifyPage.tsx';
import Marketplace from '@pages/Community/Marketplace.tsx';
import LandingPage from '@pages/Community/LandingPage.tsx';
import HomeHeader from '@pages/Main/Header.tsx';
import Footer from '@pages/Main/Footer.tsx';
import SendPage from '@pages/Community/SendPage.tsx';
// import HomePage from '@pages/Community/HomePage.tsx';

const SMainContainer = styled.main`
color: ${({ theme }) => theme.textAndIconsPrimary};
background: ${({ theme }) => theme.backgroundSystem};

@media ${mediaQueries.laptop} {
  width: 100%;
  height: 100%;
}

@media ${mediaQueries.desktop} {
  width: 100%;
  height: 100%;
}
;
`

const GlobalStyle = createGlobalStyle`
html, body {
  overflow-y: scroll;
  height: 105%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  background: #21282a;
  color: ${({ theme }) => theme.textAndIconsSecondary};

  &.${ALTERNATE_BACKGROUND_CLASSNAME} {
    background: ${({ theme }) => theme.backgroundPrimary};
  }
}

.modal-backdrop {
  background-color: ${({ theme }) => theme.appliedOverlay};
  z-index: 2;

  &.show {
    opacity: 1;
  }
}
};
`
const me = {}
// const me = ""
const App = () => (
  <>
    <GlobalStyle />
    <SMainContainer>
    {me ? <Header /> : <HomeHeader />}
      <Routes>
        <Route path={routes.homepage}>
          {me ? <Route index element={<Main />} /> : <Route index element={<LandingPage />} />}
        </Route>

        <Route
          path="/home/market"
          element={<Marketplace/>}
        />


        <Route
          path="/send"
          element={<SendPage/>}
        />

        <Route
          path="/home/community/add"
          element={<AddMember/>}
        />

        <Route
          path="/home/community"
          element={<MemberView/>}
        />

        <Route
          path="/home/lander"
          element={<CommunityView/>}
        />

        <Route
          path="/home/community/add/verify"
          element={<VerifyPage />
              // content={props.verify}
              // onClickAway={() => window.location.replace('/home/community/add')} />
            }
          />
{/* 
        <Route
          path="/home/community/add/paywall"
          render={() => <Paywall />
          }
        /> */}

        <Route path={routes.myAssets.index} element={<Outlet />}>
          <Route index element={<Navigate to={routes.myAssets.mintNftMain} replace />} />

          <Route path={routes.myAssets.mintNftMain} element={<MintNftIndex />}>
            <Route
              index
              element={
                // <PrivateRoute>
                  <SelectCollection />
                // </PrivateRoute>
              }
            />

            <Route
              path={routes.myAssets.createCollection}
              element={
                // <PrivateRoute>
                  <CreateCollection />
                // </PrivateRoute>
              }
            />

            <Route
              path={routes.myAssets.mintNft()}
              element={
                // <PrivateRoute>
                  <MintNft />
                // </PrivateRoute>
              }
            />
          </Route>

          <Route path={routes.myAssets.collections} element={<Outlet />}>
            <Route
              index
              element={
                // <PrivateRoute>
                  <CollectionsView />
                // </PrivateRoute>
              }
            />

            <Route
              path={routes.myAssets.collectionEdit()}
              element={
                // <PrivateRoute redirectTo={routes.myAssets.collections}>
                  <CollectionEdit />
                // </PrivateRoute>
              }
            />

            <Route path={routes.myAssets.nfts()} element={<Outlet />}>
              <Route
                index
                element={
                  // <PrivateRoute redirectTo={routes.myAssets.collections}>
                    <MyNfts />
                  // </PrivateRoute>
                }
              />

              <Route
                path={routes.myAssets.nftEdit()}
                element={
                  // <PrivateRoute redirectTo={routes.myAssets.collections}>
                    <NftEdit />
                  // </PrivateRoute>
                }
              />
            </Route>
          </Route>
        </Route>

        <Route path='*' element={<Navigate to={routes.homepage} replace />} />
      </Routes>
      <Footer />
    </SMainContainer>
  </>
);

export default App;