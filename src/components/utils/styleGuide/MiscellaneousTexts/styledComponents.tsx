import styled from 'styled-components'

import { maxDeviceWidth, mobile, mobileOrTablet } from '../../utils/MixinUtils'

import { BaseInterText } from '../Typos'

export const ReferAndEarnTitleText = styled(BaseInterText)`
   color: ${props => props.theme.colors.baseWhite};
   margin-right: 5px;
   font-size: 14px;
   font-weight: 500;
   line-height: 1.43;
`

export const ReferAndEarnDetailsText = styled(BaseInterText)`
   color: ${props => props.theme.colors.baseWhite};
   font-size: 16px;
   line-height: 1.25;
   ${maxDeviceWidth(1023)} {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.33;
   }
   ${mobile} {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.54;
   }
`

export const MacBookProText = styled(BaseInterText)`
   color: ${props => props.theme.colors.baseWhite};
   margin-left: 4px;
   font-size: 18px;
   font-weight: 500;
   line-height: 1.33;
   ${mobileOrTablet} {
      margin-right: 8px;
      font-weight: normal;
   }
   ${maxDeviceWidth(1023)} {
      font-size: 20px;
      line-height: 1.2;
   }
   ${mobile} {
      font-size: 16px;
      line-height: 1.5;
   }
`
