import React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@material-ui/core';
import { styled } from 'styled-components';

const Container = styled.div`
  /* Add your styled-components styles here */
`;

interface PayoutPageProps extends ReactStripeElements.InjectedStripeProps {}

const PayoutPage: React.FC<PayoutPageProps> = ({ stripe }) => {
  const [payoutMethod, setPayoutMethod] = React.useState<string>('card');

  const handlePayoutMethodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPayoutMethod(event.target.value as string);
  };

  const handlePayoutSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (payoutMethod === 'card') {
      const { token } = await stripe.createToken({ type: 'card' });
      // Handle the token (send to server, etc.)
    } else if (payoutMethod === 'bank') {
      // Implement bank payout handling logic here
    }
  };

  return (
    <Container>
      <form onSubmit={handlePayoutSubmit}>
        <FormControl fullWidth>
          <InputLabel htmlFor="payout-method">Payout Method</InputLabel>
          <Select
            value={payoutMethod}
            onChange={handlePayoutMethodChange}
            inputProps={{ id: 'payout-method' }}
          >
            <MenuItem value="card">Credit/Debit Card</MenuItem>
            <MenuItem value="bank">Bank Account</MenuItem>
          </Select>
        </FormControl>

        {payoutMethod === 'card' && <CardElement />}

        <Grid container justify="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Payout
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default injectStripe(PayoutPage);
