import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';
import { FlexAlignCenterSx, FlexBaseSx, FlexCenterSx, FlexJustifyBetweenSx, GridCenterSx } from '../../theme/utils';

// import Web3Status from '../Web3Status';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

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

function WalletActions() {
  return (
    <Box>
      <ConnectButton />
    </Box>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  return (
    <MuiContainer>
      <Box sx={[{ pt: [5, 5], rowGap: [3, null] }].concat([FlexJustifyBetweenSx, FlexAlignCenterSx] as any)}>
        <Box sx={[FlexCenterSx, { gap: [6, 6] }]}>
          <StyledLink to={'/proof'}>{'Proof'}</StyledLink>
          <StyledLink to={'/mint'}>{'Mint'}</StyledLink>
        </Box>
        {pathname === '/mint' ? <WalletActions /> : <></>}
      </Box>
    </MuiContainer>
  );
}
