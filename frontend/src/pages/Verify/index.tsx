import { Box, Button } from '@mui/material';
import { Input, message, Upload } from 'antd';
import { useState } from 'react';
import { FlexAlignCenterSx } from '../../theme/utils';
import { validateProof } from '../../api';

export default function Verify() {
  const { TextArea } = Input;
  const [proofData, setProofData] = useState('');
  const tryVerify = async () => {
    const result = await validateProof(proofData);
    alert(result);
  }

  return (
    <Box sx={[FlexAlignCenterSx, { flexDirection: 'column' }]}>
      <Box sx={[{ textAlign: 'center', fontSize: '30px', margin: '50px 0 30px 0' }]}>Verify</Box>
      <Box>
        <TextArea cols={50} value={proofData} rows={20} onChange={(e) => setProofData(e.target.value)} />
      </Box>
      <Box>
        <Button
          className="ant-dropdown-link"
          onClick={(e) => {e.preventDefault(); tryVerify();}}
          sx={[
            {
              background: 'linear-gradient(101deg,#27d59d 0%,#28bdd9 100.3%)',
              width: '300px',
              margin: '30px',
              color: '#ffffff',
            },
          ]}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
}
