// HomePage.tsx

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const HomePage: React.FC = () => {
    const [, setIndex] = useState(0);

    const items = [
      '/path_to_image1.jpg',
      '/path_to_image2.jpg',
      '/path_to_image3.jpg',
      '/path_to_image4.jpg',
      '/path_to_image5.jpg',
      '/path_to_image6.jpg',
    ];
  
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    });
  
    const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
    

  const circleData = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'green' },
    { color: 'yellow' },
    { color: 'purple' },
  ];

    return (
        <Container>
        <Header>
            <Logo src="/path_to_your_logo.png" alt="Logo" />
            <NavLink>Sign On</NavLink>
            <NavLink>Community</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Careers</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Cart</NavLink>
        </Header>
        <animated.div style={{ ...props, display: 'flex' }}>
            {items.map((item, i) => (
            <div key={i} style={{ width: '100%', padding: '0 10px' }}>
                <img src={item} alt={`Slide ${i + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            ))}
        </animated.div>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        <PriceBlocks>
            <PriceBlock>
            <PriceLabel>Bitcoin</PriceLabel>
            <PriceValue>$48,500</PriceValue>
            </PriceBlock>
            <PriceBlock>
            <PriceLabel>Ethereum</PriceLabel>
            <PriceValue>$3,200</PriceValue>
            </PriceBlock>
        </PriceBlocks>
        <SubCarouselContainer>
        <animated.div style={{ ...props, display: 'flex' }}>
            {items.map((item, i) => (
            <div key={i} style={{ width: '100%', padding: '0 10px' }}>
                <img src={item} alt={`Slide ${i + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            ))}
        </animated.div>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        </SubCarouselContainer>
        <Grid>
            {circleData.map((circle, index) => (
            <Circle key={index} color={circle.color}></Circle>
            ))}
        </Grid>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const PriceBlocks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const PriceBlock = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  margin: 10px;
`;

const PriceLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PriceValue = styled.div`
  font-size: 24px;
`;

const SubCarouselContainer = styled.div`
  margin: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  gap: 20px;
  margin-top: 20px;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
