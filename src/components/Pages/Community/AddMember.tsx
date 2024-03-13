import { FormEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
// import { verifyEmail } from '../../../../../actions/community';

// Styled Components
const Body = styled.div`
max-width: 320px;
margin: 0 auto;
text-align: center;
`;

// const Logo = styled.img`
//   /* Add your styles here */
// `;

const Title = styled.div`
  /* Add your styles here */
`;

// const Form = styled.form`
//   /* Add your styles here */
// `;

const Label = styled.label`
  /* Add your styles here */
`;

const Input = styled.input`
  /* Add your styles here */
`;

const Buttons = styled.div`
  /* Add your styles here */
`;

const AddMember = () => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accessCode = generateAccessCode(16);
    // const access = {
    //   contact,
    //   accessCode
    // };
    const data = {
      accessCode,
      name,
      contact
    };
    sessionStorage.setItem('formDatum', JSON.stringify(data));
    // dispatch(verifyEmail(access));
    window.location.replace('/home/community/add/verify');
  }

  const generateAccessCode = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // const invalid = !(name.length > 0 && contact.length > 0);

  return (
    <Body>
      {/* <Logo src={logo} /> */}
      <Title>Muvor Coin: Community Token</Title>
      <form className="form" onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
        <br />
        <Label>Pseudonym:</Label>
        <Input
          placeholder="..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <Label>Contact (Email):</Label>
        <Input
          placeholder="..."
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <br />
        <Buttons>
          {/* <Button
            large
            cancel
            link="/home/community"
            title="CANCEL"
          />
          <Button
            large
            type="submit"
            title="Fork Yourself!"
            inactive={invalid}
          /> */}
        </Buttons>
      </form>
    </Body>
  );
}

export default AddMember;
