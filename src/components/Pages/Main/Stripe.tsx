import React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@material-ui/core';
import { styled } from 'styled-components';

const Container = styled.div`
  /* Add your styled-components styles here */
`;

interface BankPaymentProps extends ReactStripeElements.InjectedStripeProps {}

const BankPayment: React.FC<BankPaymentProps> = ({ stripe }) => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>('card');

  const handlePaymentMethodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPaymentMethod(event.target.value as string);
  };

  const handlePaymentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (paymentMethod === 'card') {
      const { token } = await stripe.createToken({ type: 'card' });
      // Handle the token (send to server, etc.)
    } else if (paymentMethod === 'bank') {
      // Implement bank account handling logic here
    }
  };

  return (
    <Container>
      <form onSubmit={handlePaymentSubmit}>
        <FormControl fullWidth>
          <InputLabel htmlFor="payment-method">Payment Method</InputLabel>
          <Select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            inputProps={{ id: 'payment-method' }}
          >
            <MenuItem value="card">Credit/Debit Card</MenuItem>
            <MenuItem value="bank">Bank Account</MenuItem>
          </Select>
        </FormControl>

        {paymentMethod === 'card' && <CardElement />}

        <Grid container justify="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Pay
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default injectStripe(BankPayment);
