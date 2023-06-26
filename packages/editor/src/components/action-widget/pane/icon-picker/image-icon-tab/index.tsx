import Box from '@mui/material/Box';
import React, { ReactElement } from 'react';
import iconGroups from './iconGroups.json';
import { SvgImageIcon } from '@edifice/mindplot';
import NodeProperty from '../../../../../classes/model/node-property';
import { SvgIcon } from './styled';

type IconImageTab = {
  iconModel: NodeProperty<string>;
  triggerClose: () => void;
};
const IconImageTab = ({ iconModel, triggerClose }: IconImageTab): ReactElement => {
  return (
    <Box sx={{ width: '350px' }}>
      {iconGroups.map((family, i) => (
        <span key={i}>
          {family.icons.map((icon: string) => (
            <SvgIcon
              key={icon}
              src={SvgImageIcon.getImageUrl(icon)}
              onClick={() => {
                iconModel.setValue(`image:${icon}`);
                triggerClose();
              }}
            />
          ))}
        </span>
      ))}
    </Box>
  );
};
export default IconImageTab;
