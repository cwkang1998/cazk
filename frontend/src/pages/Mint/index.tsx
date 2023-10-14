import { Box, Button } from '@mui/material';
import { Input, message, Upload } from 'antd';
import { useState } from 'react';
import { FlexAlignCenterSx } from '../../theme/utils';

export default function Home() {
  const { TextArea } = Input;
  const [textarea, useTextarea] = useState('');
  const props = {
    name: 'file',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      console.log(info.file.originFileObj);
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Box sx={[FlexAlignCenterSx, { flexDirection: 'column' }]}>
      <Box sx={[{ textAlign: 'center', fontSize: '30px', margin: '50px 0 30px 0' }]}>Exclusive NFT Mint</Box>
      <Box>
        <Upload {...props}>
          <Button
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            sx={[
              {
                background: 'linear-gradient(101deg,#27d59d 0%,#28bdd9 100.3%)',
                width: '300px',
                margin: '30px',
                color: '#ffffff',
              },
            ]}
          >
            Import Proof
          </Button>
        </Upload>
      </Box>
      <Box>
        <TextArea cols={50} value={textarea} rows={20} />
      </Box>
      <Box>
        <Button
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          sx={[
            {
              background: 'linear-gradient(101deg,#27d59d 0%,#28bdd9 100.3%)',
              width: '300px',
              margin: '30px',
              color: '#ffffff',
            },
          ]}
        >
          Mint
        </Button>
      </Box>
    </Box>
  );
}
