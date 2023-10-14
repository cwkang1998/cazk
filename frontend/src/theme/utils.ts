import { Theme } from '@mui/system/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

export const FlexBaseSx: SystemStyleObject<Theme> = {
  display: 'flex',
};

export const FlexAlignCenterSx: SystemStyleObject<Theme> = {
  ...FlexBaseSx,
  alignItems: 'center',
};

export const FlexJustifyCenterSx: SystemStyleObject<Theme> = {
  ...FlexBaseSx,
  justifyContent: 'center',
};

export const FlexJustifyCenterWrapSx: SystemStyleObject<Theme> = {
  ...FlexBaseSx,
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export const FlexCenterSx: SystemStyleObject<Theme> = {
  ...FlexAlignCenterSx,
  ...FlexJustifyCenterSx,
};

export const FlexJustifyBetweenSx: SystemStyleObject<Theme> = {
  ...FlexBaseSx,
  justifyContent: 'space-between',
};

export const FlexJustifyAroundSx: SystemStyleObject<Theme> = {
  ...FlexBaseSx,
  justifyContent: 'space-around',
};

export const GridBaseSx: SystemStyleObject<Theme> = {
  display: 'grid',
};

export const GridJustifyItemsCenterSx: SystemStyleObject<Theme> = {
  ...GridBaseSx,
  justifyItems: 'center',
};

export const GridJustifyContentCenterSx: SystemStyleObject<Theme> = {
  ...GridBaseSx,
  justifyContent: 'center',
};

export const GridAlignItemsCenterSx: SystemStyleObject<Theme> = {
  ...GridBaseSx,
  alignItems: 'center',
};

export const GridAlignContentCenterSx: SystemStyleObject<Theme> = {
  ...GridBaseSx,
  alignContent: 'center',
};

export const GridItemsCenter: SystemStyleObject<Theme> = {
  ...GridBaseSx,
  ...GridAlignItemsCenterSx,
  ...GridJustifyItemsCenterSx,
};

export const GridCenterSx: SystemStyleObject<Theme> = {
  ...GridJustifyItemsCenterSx,
  ...GridJustifyContentCenterSx,
  ...GridAlignItemsCenterSx,
  ...GridAlignContentCenterSx,
};

export const TextEllipsis: SystemStyleObject<Theme> = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const HoverPointer: SystemStyleObject<Theme> = {
  ':hover': {
    cursor: 'pointer',
  },
};
