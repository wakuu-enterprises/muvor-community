// MemberView.tsx
import React from 'react';
import { styled } from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Billboard = styled.div`
  background-image: url('path/to/billboard-image.jpg');
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const FloatNumber = styled.span`
  font-size: 24px;
`;

const Section = styled.div`
  margin: 20px 0;
`;

const Dashboard = styled(Section)`
  // Your dashboard styles here
`;

const Offerings = styled(Section)`
  // Your offerings styles here
`;

const Portfolio = styled(Section)`
  // Your portfolio styles here
`;

const Timeline = styled(Section)`
  // Your timeline styles here
`;

// Main Component
const MemberViews: React.FC = () => {
  return (
    <Container>
      <Billboard>
        <h1>Welcome to Your DAO</h1>
      </Billboard>

      <Dashboard>
        <h2>Dashboard</h2>
        <FloatNumber>Crypto Price: 2.9878</FloatNumber>
        <FloatNumber>DAO Price: 2.9878</FloatNumber>
      </Dashboard>

      <Offerings>
        <h2>Offerings</h2>
        {/* Add your offerings content here */}
      </Offerings>

      <Portfolio>
        <h2>Portfolio</h2>
        {/* Add your portfolio content here */}
      </Portfolio>

      <Timeline>
        <h2>Timeline</h2>
        {/* Add your timeline content here */}
      </Timeline>
    </Container>
  );
};

export default MemberViews;
