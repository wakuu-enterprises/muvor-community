import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Paper,
} from '@mui/material'; // Material-UI components
import { styled } from 'styled-components';

const StyledContainer = styled(Container)`
  /* Add your styles here */
`;

const StyledTableContainer = styled(TableContainer)`
  /* Add your styles here */
`;

// const CarouselContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   max-height: 400px; /* Adjust the maximum height as needed */
//   overflow: hidden;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   transition: transform 0.3s ease;
// `;

// const CarouselImage = styled.img<{ isActive: boolean }>`
//   width: 100%;
//   opacity: ${(props) => (props.isActive ? '1' : '0')};
//   transition: opacity 0.3s ease;
// `;

// const CarouselArrow = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 24px;
//   cursor: pointer;
//   z-index: 2;
//   padding: 8px;
//   background: rgba(255, 255, 255, 0.6);
//   border-radius: 50%;
//   user-select: none;

//   &:first-child {
//     left: 20px;
//   }

//   &:last-child {
//     right: 20px;
//   }
// `;

// const images = [
//   'image1.jpg',
//   'image2.jpg',
//   'image3.jpg',
//   // Add more image paths as needed
// ];

const CommunityView: React.FC = () => {
  // Placeholder data for platform available offerings
  const offerings = [
    { id: 1, name: 'Offering 1', type: 'Type A', price: 100 },
    { id: 2, name: 'Offering 2', type: 'Type B', price: 150 },
    // Add more offerings as needed
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };


  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Welcome to Muvor Community
      </Typography>
      {/* <CarouselContainer>
        <CarouselArrow onClick={prevSlide}>&#8249;</CarouselArrow>
        <ImageContainer>
          {images.map((image, index) => (
            <CarouselImage key={index} src={image} alt={`Slide ${index + 1}`} isActive={index === currentIndex} />
          ))}
        </ImageContainer>
        <CarouselArrow onClick={nextSlide}>&#8250;</CarouselArrow>
      </CarouselContainer> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Search Offerings"
            variant="outlined"
            fullWidth
            // Add search functionality here
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Join the Community
          </Button>
        </Grid>
        <Grid item xs={12}>
          <StyledTableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {offerings.map(offering => (
                  <TableRow key={offering.id}>
                    <TableCell>{offering.name}</TableCell>
                    <TableCell>{offering.type}</TableCell>
                    <TableCell>{offering.price}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default CommunityView;
