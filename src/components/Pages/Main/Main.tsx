import { memo } from 'react';
import { styled } from 'styled-components';

// import Title from '@common/Title.tsx';

import { CssFontRegularL, CssFontRegularM, mediaQueries } from '@helpers/reusableStyles.ts';
// import CommunityView from '@pages/Community/CommunityView.tsx';
import { ProfileXt } from '@pages/MyAssets/Auth/profileXt.tsx';

const STitle = styled.h1`
  max-width: 320px;
  margin: 0 auto;
  text-align: center;

  @media ${mediaQueries.tablet} {
    max-width: 624px;
  }

  @media ${mediaQueries.desktop} {
    max-width: 100%;
  }
`;

const SIntroText = styled.p`
  ${CssFontRegularM}

  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.textAndIconsSecondary};

  @media ${mediaQueries.tablet} {
    ${CssFontRegularL}
    max-width: 624px;
  }

  @media ${mediaQueries.laptop} {
    max-width: 820px;
  }

  @media ${mediaQueries.desktop} {
    max-width: 924px;
  }
`;

const ListInfo = styled.div`
  ${CssFontRegularM}

  max-width: 100%;
  width: 50rem;
  height: 25rem;
  border: 4mm ridge rgba(136, 143, 136, .6);
  background: #B5B5B5B5;
  border-radius: 30%;
  margin: 5rem auto;
  padding: 2rem auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.textAndIconsSecondary};

  @media ${mediaQueries.tablet} {
    ${CssFontRegularL}
    max-width: 624px;

  }

  @media ${mediaQueries.laptop} {
    max-width: 820px;
  }

  @media ${mediaQueries.desktop} {
    max-width: 924px;
  }
`;

const Main = () => {
  return (
    <>
      <STitle className='main'>Welcome to Muvor Community!</STitle>
        <ProfileXt />
      <ListInfo>
        <SIntroText>
          Muvor Xchange Address: {}
        </SIntroText>
        <SIntroText>
          Muvor Coin Address: {}
        </SIntroText>
        <SIntroText>
          Bitcoin Address: {}
        </SIntroText>
        <SIntroText>
          Ethereum Address: {}
        </SIntroText>
        <SIntroText>
          Litecoin Address: {}
        </SIntroText>        
      </ListInfo>
      <SIntroText>
        To Exchange for Muvor Xchange Tokens:
      </SIntroText>
      <ListInfo>
        <SIntroText>
          Send Muvor X to: e71017104f2d33b2ccd40e93153acb2963d6806276f9cfecdc815b4cffe4e94f9d8baec62fbe890b42b3b100534fdcc7d5703de8f015e03567fe43f8687441e8
        </SIntroText>
        <SIntroText>
          Send Bitcoin to: bc1q8s3qcwwvjcztcg2g0ckd7e52ahut70pz9yrrnm
        </SIntroText>
        <SIntroText>
          Send Ethereum to: 0x48e75C2d4C925a21018cc36A25AB832423Dadf2a
        </SIntroText>
        <SIntroText>
          Send Litecoin to: ltc1qvxan4tx7al7ng3yyjzhsvzwzy55kmpv505km8q
        </SIntroText>        
      </ListInfo>
      
    </>
  );
};

export default memo(Main);
