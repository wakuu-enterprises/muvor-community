import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

// import { createCommunityMember } from '../../../../../actions/community';
// import logo from '../../../assets/Muvor.png';

// Define your styled components here
const Body = styled.div`
  // Add your styles here
`;

const Form = styled.form`
  // Add your styles here
`;

// const Logo = styled.img`
//   // Add your styles here
// `;

const Title = styled.span`
  // Add your styles here
`;

const PhotoList = styled.div`
  // Add your styles here
`;

const PhotoItem = styled.div`
  // Add your styles here
`;

const Image = styled.img`
  // Add your styles here
`;

const VerifyPage: React.FC = () => {
  const [code, setCode] = useState('');
  const [photo, setPhoto] = useState<File[]>([]);
  // const datum = JSON.parse(sessionStorage.getItem('formDatum'));

  // const dispatch = useDispatch();
  // const loading = useSelector((state) => state.main.loading);
  // const progress = useSelector((state) => state.main.progress);

  // const invalid = code !== datum.accessCode;

  const handleUpload = (newPhoto: File) => {
    setPhoto((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    photo.forEach((p) => {
      formData.append('file', p);
    });
    // formData.append('data', JSON.stringify(datum));

    // dispatch(createCommunityMember(formData));
  };

  const renderPhotoItem = (photo: File) => (
    <PhotoItem key={photo.name}>
      <Image className="image" src={URL.createObjectURL(photo)} />
      <button onClick={() => setPhoto([])}>Remove</button>
    </PhotoItem>
  );

  return (
    <Body>
      <Form>
        {/* <Logo src={logo} /> */}
        <Title>Muvor Coin: Community Token</Title>
        <br />
        <br />

        <label>Coin Photo (You can change this later):</label>

        <PhotoList>
          {photo.length ? (
            photo.map(renderPhotoItem)
          ) : (
            <span>None</span>
          )}
        </PhotoList>

        <input
          type="file"
          id="add-photo"
          accept="image/jpeg,image/png"
          // disabled={loading}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleUpload(e.target.files[0]);
            }
          }}
        />

        <br />

        <label>Verify Access Code:</label>
        <input
          type="text"
          placeholder="..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <br />

        <button
          // disabled={invalid || loading}
          onClick={handleVerify}
        >
          Verify
        </button>
      </Form>
    </Body>
  );
};

export default VerifyPage;
