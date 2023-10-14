import { Box, Button } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Menu } from 'antd';
import { useState } from 'react';
import { FlexAlignCenterSx } from '../../theme/utils';
import Card from './Card';

const ButtonStyle: SystemStyleObject<Theme> = {
  background: 'linear-gradient(101deg,#27d59d 0%,#28bdd9 100.3%)',
  color: '#ffffff',
  ':disabled': {
    background: 'grey',
  },
};

const menuArr = [
  {
    key: 0,
    text: 'Block Number',
  },
  {
    key: 1,
    text: 'Block TimeStamp',
  },
  {
    key: 2,
    text: 'Balance of Account',
  },
];
export default function Home() {
  const [dropdownNum, useDropdownNum] = useState(0);
  const OnDropdownClick = ({ key }: any) => {
    console.log(key);
    useDropdownNum(key);
  };
  const menu = (
    <Menu onClick={OnDropdownClick}>
      {menuArr.map((item, idx) => (
        <Menu.Item key={idx}>
          <Box>{item.text}</Box>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Box sx={[FlexAlignCenterSx, { flexDirection: 'column' }]}>
      <Box sx={[{ textAlign: 'center', fontSize: '80px', margin: '50px 0 40px 0' }]}>Banner</Box>
      <Box sx={[{ textAlign: 'center', fontSize: '30px', margin: '0 0 30px 0' }]}>Generate Proof Based On</Box>
      <Box sx={[FlexAlignCenterSx]}>
      {menuArr.map((item, idx) => (
        <Card name={item.text} address={''} num={idx} />
      ))}
      </Box>
    </Box>
  );
}
