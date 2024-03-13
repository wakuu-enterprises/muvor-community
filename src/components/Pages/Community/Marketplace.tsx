// MarketPlace.tsx

import React, { useState } from 'react';
// import { Canvas } from 'react-three-fiber';
import { styled, keyframes } from 'styled-components';

// Styled Components
const Billboard = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;

const PriceDisplay = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
`;

// Scrolling Animation
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-250%);
  }
`;

const ascroll = keyframes`
  100% {
    transform: translateX(-250%);
  }
  0% {
    transform: translateX(250%);
  }
`;

const ScrollingPrices = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 20px; // Add space between prices
  animation: ${ascroll} 20s linear infinite;
`;

const ScrollingProducts = styled.div`
  margin-top: 30px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 20px; // Add space between products
  animation: ${scroll} 60s linear infinite;
`;

const SubCarousel = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

// const GridContainer = styled.div`
//   margin-top: 30px;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
// `;

const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const LeaderboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: #fff;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const LeaderboardHeader = styled.th`
  padding: 10px;
  background: #4e54c8;
  color: #fff;
  text-align: left;
`;

const LeaderboardRow = styled.tr`
  &:nth-child(even) {
    background: #3c3e54;
  }
`;

const LeaderboardData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const InfiniteListGridContainer = styled.div`
  margin-top: 30px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4CAF50;
  }

  &:focus + span {
    box-shadow: 0 0 1px #4CAF50;
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const InfiniteListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ListItem = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 150px; // Adjust as needed
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 10px;
`;

const ItemTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ItemDescription = styled.p`
  font-size: 12px;
  color: #666;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Leaderboard: React.FC = () => {
  // Dummy data for the leaderboard
  const leaderboardData = [
    { rank: 1, product: 'Top Product 1', views: 500 },
    { rank: 2, product: 'Top Product 2', views: 450 },
    { rank: 3, product: 'Top Product 3', views: 400 },
    // Add more data as needed
  ];

  return (
    <LeaderboardPanel>
      <h2>Leaderboard</h2>
      <LeaderboardTable>
        <thead>
          <tr>
            <LeaderboardHeader>Rank</LeaderboardHeader>
            <LeaderboardHeader>Product</LeaderboardHeader>
            <LeaderboardHeader>Views</LeaderboardHeader>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => (
            <LeaderboardRow key={item.rank}>
              <LeaderboardData>{item.rank}</LeaderboardData>
              <LeaderboardData>{item.product}</LeaderboardData>
              <LeaderboardData>{item.views}</LeaderboardData>
            </LeaderboardRow>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderboardPanel>
  );
};

const MarketPlace: React.FC = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };
  return (
    <>
      {/* Landing Image Carousel */}
      <Billboard>
        Discover a World of Possibilities
      </Billboard>

      {/* Cryptocurrency Prices Display */}
      <PriceDisplay>
        <ScrollingPrices>
          <div>Bitcoin: $42,000</div><br />
          <div>Ethereum: $2,800</div><br />
          <div>Ripple: $1.20</div><br />
          <div>Litecoin: $150</div><br />
          {/* Add more prices as needed */}
        </ScrollingPrices>
      </PriceDisplay>

      {/* Leaderboard Panel */}
      <Leaderboard />

      {/* Scrolling Products */}
      <SubCarousel>
        <ScrollingProducts>
          <Card>
            <Image src="https://via.placeholder.com/300" alt="Product" />
            <Content>
              <Title>Product 1</Title>
              <Description>Explore the amazing features of this product.</Description>
            </Content>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/300" alt="Product" />
            <Content>
              <Title>Product 2</Title>
              <Description>Discover the latest trends in technology.</Description>
            </Content>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/300" alt="Product" />
            <Content>
              <Title>Product 3</Title>
              <Description>Find the perfect solution for your needs.</Description>
            </Content>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/300" alt="Product" />
            <Content>
              <Title>Product 4</Title>
              <Description>Enhance your lifestyle with our cutting-edge products.</Description>
            </Content>
          </Card>
          {/* Add more products as needed */}
        </ScrollingProducts>
      </SubCarousel>

      {/* Infinite List/Grid */}
      <InfiniteListGridContainer>
        <h2>List/Grid View</h2>
        <ToggleSwitch>
          <ToggleInput type="checkbox" checked={isGrid} onChange={toggleView} />
          <ToggleSlider />
        </ToggleSwitch>
        <SearchBar type="text" placeholder="Search..." />
        {isGrid ? (
          <InfiniteListGrid>
            {/* Sample List Items */}
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            {/* Add more items as needed */}
          </InfiniteListGrid>
        ) : (
          <div>
            {/* Sample List Items */}
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemImage src="https://via.placeholder.com/250" alt="Item" />
              <ItemContent>
                <ItemTitle>Item 1</ItemTitle>
                <ItemDescription>Description of Item 1</ItemDescription>
              </ItemContent>
            </ListItem>
            {/* Add more items as needed */}
          </div>
        )}
      </InfiniteListGridContainer>

    </>
  );
};

export default MarketPlace;
