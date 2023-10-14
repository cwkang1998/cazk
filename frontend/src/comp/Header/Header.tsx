import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { FlexAlignCenterSx, FlexBaseSx, FlexCenterSx, FlexJustifyBetweenSx, GridCenterSx } from '../../theme/utils';

// import Web3Status from '../Web3Status';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #666484;
  word-break: break-word;
  white-space: nowrap;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #28bdd9;
  }
`;

const LogoStyle = {
  height: [30, 32],
};

function Logo() {
  return <Box component={'img'} src={'/images/logo.png'} sx={[FlexBaseSx, LogoStyle]} />;
}

function Links() {
  return (
    <Box sx={[FlexCenterSx, { gap: [6, 6] }]}>
      <StyledLink to={'/proof'}>{'Proof'}</StyledLink>
      <StyledLink to={'/mint'}>{'Mint'}</StyledLink>
    </Box>
  );
}

function WalletActions() {
  return (
    <Box>
      {/* <Web3Status /> */}
      <ConnectButton />
    </Box>
  );
}

export default function Header() {
  return (
    <MuiContainer>
      <Box
        sx={[{ pt: [5, 5], rowGap: [3, null] }].concat(
          ([FlexJustifyBetweenSx, FlexAlignCenterSx]) as any
        )}
      >
        <Logo />
        <Links />
        <WalletActions />
      </Box>
    </MuiContainer>
  );
}
