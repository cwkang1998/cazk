import { Box, Button } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
// import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import { Flex, Input } from 'antd';
import { requestProof } from '../../api';


const ClaimCard: SystemStyleObject<Theme> = {
  flexDirection: 'column',
  width: '300px',
  border: '0.5px solid rgba(91,88,77,1)',
  borderRadius: '20px',
  padding: '20px',
  color: '#ffffff',
  fontSize: '12px',
  margin: '30px 20px',
};

const HeadText: SystemStyleObject<Theme> = {
  marginTop: '20px',
  fontSize: '26px',
  color: '#000000',
  lineHeight: '22px',
  fontWeight: 700,
};
const BottomText: SystemStyleObject<Theme> = {
  marginTop: '20px',
  fontFamily: 'SourceHanSansCN-Regular',
  fontSize: '16px',
  color: '#9CA3AF',
  lineHeight: '22px',
  fontWeight: 500,
};
const ButtonStyle: SystemStyleObject<Theme> = {
  background: 'linear-gradient(101deg,#27d59d 0%,#28bdd9 100.3%)',
  color: '#ffffff',
  width: '120px',
  ':disabled': {
    background: 'grey',
  },
};

const Card: React.FC<{ name: string; content: string; num: number }> = ({ name, content, num }) => {
  const [identifier, setIdentifier] = useState<string>("");
  const OnRequestClick = async () => {
    const res = await requestProof(identifier);
  };

  return (
    <Box sx={[ClaimCard]}>
      <Box sx={[HeadText]}>
        {name}
      </Box>
      <Box sx={[BottomText]}>
        {content}
      </Box>
      <Flex gap="middle" vertical align='center'>
        <Input onChange={(e) => setIdentifier(e.target.value)}/>
        <Button
          onClick={OnRequestClick}
          fullWidth
          sx={[
            ButtonStyle,
          ]}
        >
          Generate
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
