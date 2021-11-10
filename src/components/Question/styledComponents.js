import styled, {css} from 'styled-components'
import {maxDeviceWidth, customDevice} from '../utils/MixinUtils'
import {TABLET_MAX_WIDTH} from '../utils/ResponsiveConstants'

const multiFormatTextCSS = css`
  .mjx-mrow {
    ${maxDeviceWidth(400)} {
      font-size: 80%;
    }
    ${customDevice(401, 767)} {
      font-size: 92%;
    }
  }
  .markdownEditor .ace_scrollbar-h {
    overflow-x: auto;
    cursor: pointer;
  }
  ${maxDeviceWidth(TABLET_MAX_WIDTH - 1)} {
    font-family: ${BaseFontFamily};
    font-size: 14px;
    line-height: 1.43 !important;
    color: ${Colors.darkBlueGreyFive};
    .markdownEditor .ace_editor ::-webkit-scrollbar {
      height: 3px;
      width: 3px;
    }
  }
`
