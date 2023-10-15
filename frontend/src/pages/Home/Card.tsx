import { Box, Button } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
// import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';


const ClaimCard: SystemStyleObject<Theme> = {
  flexDirection: 'column',
  width: '300px',
  border: '1px solid rgba(91,88,77,1)',
  borderRadius: '20px',
  padding: '20px',
  color: '#ffffff',
  fontSize: '12px',
  fontFamily: 'SourceHanSansCN-Medium, SourceHanSansCN',
  margin: '30px 20px',
};

const CardImg: SystemStyleObject<Theme> = {
  fontSize: '12px',
  color: '#9CA3AF',
  lineHeight: '22px',
  fontWeight: 400,
  background: 'grey',
  width: '100%',
  textAlign: 'center',
  borderRadius: '15px',
  height: '200px'
};
const HeadText: SystemStyleObject<Theme> = {
  marginTop: '20px',
  fontFamily: 'SourceHanSansCN-Regular',
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

// const DataLine: React.FC<{ title: string; num: string; total: string }> = ({ title, num, total }) => {
//   return (
//     <Box sx={[FlexAlignCenterSx, DataLineBox]}>
//       <Box sx={[FlexAlignCenterSx, { width: '100%' }]}>
//         <Box sx={[{ width: '18px', marginRight: '10px' }]} component={'img'} src={ARKLogo}></Box>
//         <Box sx={[DataLineTitle]}>{title}</Box>
//         <Box sx={[DataLineCoin]}>{num === 'NaN' ? 0 : num}</Box>
//       </Box>
//       <Box sx={[FlexAlignCenterSx, DataLineU]}>≈${total === 'NaN' ? 0 : total}</Box>
//     </Box>
//   );
// };

const Card: React.FC<{ name: string; content: string; num: number }> = ({ name, content, num }) => {

  const OnRequestClick = ({ key }: any) => {
    console.log('Request');
  };
  const OnDownloadClick = () => {
    console.log('Download');
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
