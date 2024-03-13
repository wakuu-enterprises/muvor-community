import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  TextField,
  Tabs,
  Tab,
} from '@mui/material'; // Material-UI components
import { styled } from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { Line } from '@react-three/drei';

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

const Section = styled.div`
  margin: 20px 0;
`;

const Dashboard = styled(Section)`
  // Your dashboard styles here
  display: flex;
  justify-content: space-between;
`;

const FloatNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;

const StyledInput = styled(TextField)`
  margin-right: 10px;
`;

const StyledButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const StyledTab = styled(Tab)`
  text-transform: none;
`;

const GraphContainer = styled.div`
  margin-top: 20px;
  /* Add styling for the graph container */
`;

const LineGraph: React.FC = () => {
  // Sample data for the line graph (replace it with your actual data)
  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 0.5 },
    { x: 3, y: 1.5 },
    { x: 4, y: 0.2 },
  ];

  return (
    <Canvas>
      {/* Axes */}
      <Line
        points={[
          [-1, 0, 0],
          [5, 0, 0],
        ]}
        color="gray"
      />
      <Line
        points={[
          [0, -1, 0],
          [0, 2, 0],
        ]}
        color="gray"
      />

      {/* Line Graph */}
      <Line
        points={data.map(point => [point.x, point.y, 0])}
        color="blue"
        lineWidth={5}
      />
    </Canvas>
  );
};

const MemberView: React.FC = () => {
  // Placeholder data for client's offerings
  const [offerings/*, setOfferings*/] = useState([
    { id: 1, name: 'Offering 1', type: 'License 1' },
    { id: 2, name: 'Offering 2', type: 'License 2' },
    // Add more offerings as needed
  ]);

  // Placeholder data for active users
  const [activeUsers/*, setActiveUsers*/] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more active users as needed
  ]);

  // Placeholder data for purchased offerings
  const [purchasedOfferings /*, setPurchasedOfferings*/] = useState([
    { id: 1, name: 'Purchased Offering 1', type: 'License 3' },
    { id: 2, name: 'Purchased Offering 2', type: 'License 4' },
    // Add more purchased offerings as needed
  ]);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
    <Billboard>
      <h1>Welcome to Your DAO</h1>
    </Billboard>

    <Dashboard>
      <Typography variant="h4" gutterBottom>
        Cryptocurrency Offerings/Client Reviewal Page
      </Typography>

      <FloatNumber>Crypto Price: 2.9878</FloatNumber>
      <FloatNumber>DAO Price: 2.9878</FloatNumber>
    </Dashboard>

    <StyledPaper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledInput
            label="Search"
            variant="outlined"
            fullWidth
          />
          <StyledButtonGroup>
            <Button variant="contained" color="primary">
              Add Offering
            </Button>
            <Button variant="outlined">Filter</Button>
          </StyledButtonGroup>
        </Grid>
      </Grid>
    </StyledPaper>

    <StyledPaper>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <StyledTab label="Client's Offerings" />
        <StyledTab label={`Active Users (${activeUsers.length})`} />
        <StyledTab label={`Purchased Offerings (${purchasedOfferings.length})`} />
      </Tabs>
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            {offerings.map(offering => (
              <Grid item key={offering.id} xs={12} sm={6} md={4}>
                <Paper>
                  <Typography variant="h6">{offering.name}</Typography>
                  <Typography variant="body1">Type: {offering.type}</Typography>
                  <Button variant="outlined">Edit</Button>
                  <Button variant="outlined">Delete</Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {selectedTab === 1 && (
          <Grid container spacing={3}>
            {activeUsers.map(user => (
              <Grid item key={user.id} xs={12} sm={6} md={4}>
                <Paper>
                  <Typography variant="h6">{user.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {selectedTab === 2 && (
          <Grid container spacing={3}>
            {purchasedOfferings.map(offering => (
              <Grid item key={offering.id} xs={12} sm={6} md={4}>
                <Paper>
                  <Typography variant="h6">{offering.name}</Typography>
                  <Typography variant="body1">Type: {offering.type}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </StyledPaper>
      <GraphContainer>
        {/* Add your line graph component here */}
        <Typography variant="h5">Line Graph</Typography>
        <LineGraph />
      </GraphContainer>
    </Container>
  );
};

export default MemberView;
