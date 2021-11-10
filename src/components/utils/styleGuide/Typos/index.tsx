import styled from 'styled-components'

import Colors from '../../themes/Colors'
import { mobile, mobileOrTablet, tablet } from '../../utils/MixinUtils'

export const BaseFontFamily = 'Inter'

export const JetBrainsMonoFontFamily = 'JetBrains Mono'

//TODO: remove duplicates
export const BaseText = styled.span`
   font-family: ${BaseFontFamily};
   white-space: pre-wrap;
`

export const BaseInterText = styled(BaseText)`
   font-family: ${BaseFontFamily};
`

export const BaseJetBrainsMonoText = styled(BaseText)`
   font-family: ${JetBrainsMonoFontFamily};
`

export const BaseDMSansMediumText = styled(BaseInterText)`
   font-weight: 500;
`

export const BaseDMSansSemiBoldText = styled(BaseInterText)`
   font-weight: 600;
`

export const BaseDMSansBoldText = styled(BaseInterText)`
   font-weight: bold;
`

export const BaseOswaldBoldText = styled(BaseInterText)`
   font-weight: bold;
`

export const BaseHKGroteskBoldText = styled(BaseInterText)`
   font-weight: bold;
`

export const BaseHKGroteskSemiBoldText = styled(BaseInterText)`
   font-weight: 600;
`

export const BaseHKGroteskMediumText = styled(BaseInterText)`
   font-weight: 500;
`

export const BaseRobotoMediumText = styled(BaseText)`
   font-weight: 500;
`

export const BaseRobotoBoldText = styled(BaseText)`
   font-weight: bold;
`

export const BaseRobotoLightText = styled(BaseText)`
   font-weight: 300;
`

export const BasePoppinsMedium = styled(BaseInterText)`
   font-weight: 500;
`

export const BasePoppinsSemiBold = styled(BaseInterText)`
   font-weight: 600;
`

export const BaseInterMediumText = styled(BaseInterText)`
   font-weight: 500;
`

export const BaseInterSemiBoldText = styled(BaseInterText)`
   font-weight: 600;
`

export const BaseInterBoldText = styled(BaseInterText)`
   font-weight: bold;
`

export const BaseSourceCodeProText = styled(BaseText)`
   font-family: ${JetBrainsMonoFontFamily};
`

export const BaseFiraCodeText = styled(BaseText)`
   font-family: ${JetBrainsMonoFontFamily};
`

export const BaseFiraCodeLight = styled(BaseFiraCodeText)`
   font-weight: 300;
`

//font-size: 8px

export const Typo8SlateBaseDMMono = styled(BaseInterText)`
   font-size: 8px;
   color: ${Colors.whiteSeven};
`

//font-size: 10px

export const Typo10SlateBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 10px;
   color: ${Colors.slateBlue};
`

export const Typo10CornFlowerBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 10px;
   color: ${Colors.cornFlowerBlue};
`

export const Typo10MidBlueRoboto = styled(BaseInterText)`
   font-size: 10px;
   color: ${Colors.midBlue};
`

export const Typo10RedRoboto = styled(BaseInterText)`
   font-size: 10px;
   color: ${Colors.red};
`

export const Typo10WhiteRoboto = styled(BaseInterText)`
   font-size: 10px;
   color: ${Colors.white};
`

export const Typo10WhiteRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 10px;
   color: ${Colors.white};
`

export const Typo10WhiteRobotoBold = styled(BaseRobotoBoldText)`
   font-weight: bold;
   font-size: 10px;
   color: ${Colors.white};
`

export const Typo10CharcoalGreyTwoRoboto = styled(BaseInterText)`
   font-size: 10px;
   color: ${Colors.charcoalGreyTwo};
`

export const Typo10Poppins = styled(BaseInterText)`
   font-size: 10px;
`

export const Typo10Roboto = styled(BaseInterText)`
   font-size: 10px;
`

export const Typo10IDPBlueyGreyDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 10px;
   color: ${Colors.idpBlueyGrey};
`

//font-size: 11px

export const Typo11DuckEggBlueOpenSans = styled(BaseInterText)`
   font-size: 11px;
   color: ${Colors.duckEggBlue};
`

export const Typo11WhiteRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 11px;
   color: ${Colors.white};
`

export const Typo11CoralRoboto = styled(BaseInterText)`
   font-size: 11px;
   color: ${Colors.coral};
`
//font-size : 12px

export const Typo12IDPPaleGreyFiveDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.idpPaleGreyFive};
`

export const Typo12SlateGreyThreeDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.slateGreyThree};
`

export const Typo12SlateGreyThreeDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 12px;
   color: ${Colors.slateGreyThree};
`

export const Typo12MetallicBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.metallicBlue};
`

export const Typo12MidBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.midBlue};
`

export const Typo12NiceBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.niceBlue};
`

export const Typo12WaterBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.waterBlueNew};
`

export const Typo12PinkishOrangeRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.pinkishOrange};
`

export const Typo12PickledBlueWoodDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.pickledBlueWood};
`

export const Typo12CornFlowerBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.cornFlowerBlue};
`

export const Typo12BlueRoboto = styled(BaseInterText)`
   color: ${Colors.blue};
   font-size: 12px;
`

export const Typo12DarkGreyBlueTwoRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo12BlueGreyRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo12BrightSkyBlueThreeRobotoMedium = styled(
   BaseRobotoMediumText
)`
   font-size: 12px;
   color: ${Colors.brightSkyBlueThree};
`

export const Typo12DuckEggBlueRoboto = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.duckEggBlue};
`

export const Typo12SlateGreyRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.slateTwo};
`

export const Typo12SlateEightRoboto = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.slateEight};
`

export const Typo12SteelThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.steelThree};
`

export const Typo12SlateNineRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.slateNine};
`
export const Typo12LightNavyThreeRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.lightNavyThree};
`

export const Typo12MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.marineBlueTwo};
`

export const Typo12MarineBlueTwoRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.marineBlueTwo};
`

export const Typo12WhiteRobotoNormal = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12WhiteRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12WhiteRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.whiteSeven};
`

export const Typo12WhiteRoboto = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12Dusk = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.dusk};
`

export const Typo12DuskTwoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.duskTwo};
`

export const Typo12DuskTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.duskTwo};
`

export const Typo12WaterBlueNewRoboto = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.waterBlueNew};
`

export const Typo12BlackSevenRoboto = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.black7};
`

export const Typo12GreyOpenSans = styled(BaseText)`
   font-family: ${BaseFontFamily};
   font-size: 12px;
   color: ${Colors.charcoalGreyThree};
`

export const Typo12CharcoalGreyFiveRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.charcoalGreyFive};
`

export const Typo12CharcoalGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.charcoalGreyFive};
`

export const Typo12KelleyGreenRobotoRegular = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.kelleyGreen};
`

export const Typo12OrangeYellowRobotoRegular = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.orangeYellow};
`

export const Typo12SlateBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.slateBlue};
`

export const Typo12SlateBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.slateBlue};
`

export const Typo12MetallicBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.metallicBlue};
`
export const Typo12BattleShipGrayTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.battleshipGreyTwo};
`

export const Typo12DarkSlateBlueTwoPoppinsMedium = styled(BasePoppinsMedium)`
   font-size: 12px;
   color: ${Colors.darkSlateBlueTwo};
`

export const Typo12BlackPoppins = styled(BaseInterText)`
   font-size: 12px;
`

export const Typo12MarineBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.marineBlueTwo};
`

export const Typo12DuckEggBlueRI = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.duckEggBlue};
   font-style: italic;
`

export const Typo12DarkSlateBlueTwoPoppins = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.darkSlateBlueTwo};
`

export const Typo12DarkSkyBlue = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo12MarineBlueOneRoboto = styled(BaseRobotoMediumText)`
   color: ${Colors.marineBlueOne};
   font-size: 12px;
`

export const Typo12DarkSkyBlueThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo12MarineBlueThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.marineBlueThree};
`

export const Typo12PaleSkyBlueTwoRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.paleSkyBlueTwo};
`

export const Type12WaterBlueRobotoBold = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.waterBlueNew};
   font-weight: bold;
`

export const Typo12LightNavyTwoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.lightNavyTwo};
`

export const Typo12LightNavyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.lightNavyTwo};
`

export const Typo12CharcoalGreyTwoRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.charcoalGreyTwo};
`

export const Typo12IceBlueRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.iceBlueThree};
`

export const Typo12IceBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.iceBlueThree};
`

export const Typo12MarineBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.marineBlueTwo};
`

export const Typo12WhiteTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12DarkBlueGreyFiveRoboto = styled(BaseInterText)`
   font-size: 12px;
   line-height: 1.5;
`
export const Typo12TomatoRedRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.tomatoRed};
   line-height: 1.5;
`

export const Typo12DarkSkyBlueThreeRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo12WarmBlueHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 12px;
   color: ${Colors.warmBlue};
`
export const Typo12WhiteHkGroteskSemiBold = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.white};
   font-weight: 600;
`
export const Typo12WhiteCeruleanThreeSemiBold = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.ceruleanThree};
   font-weight: 600;
`

export const Typo12LynchDMSans = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.lynch};
`

export const Typo12SlateGreyThreeDMSans = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.slateGreyThree};
`

export const Typo12BluishPurpleDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.bluishPurple};
`

export const Typo12WhiteDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12BlueGreenNewRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.blueGreenNew};
`

export const Typo12GreyishBlueDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.greyishBlue};
`

export const Typo12pickledBlueWoodDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.pickledBlueWood};
`

export const Typo12PickledBlueWoodDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 12px;
   color: ${Colors.pickledBlueWood};
`

export const Typo12WhiteBlueTwo = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12WhiteInterMedium = styled(BaseInterMediumText)`
   font-size: 12px;
   color: ${Colors.white};
`

export const Typo12dodgerBlueFourRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.dodgerBlueFour};
`

export const Typo12IDPBlueGrayFourDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 12px;
   color: ${Colors.idpBlueyGrey};
`

export const Typo12DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 12px;
   color: ${Colors.darkBlueGreyFive};
`

//font-size : 13px

export const Typo13WhiteSeven = styled(BaseInterText)`
   font-size: 13px;
   color: ${Colors.whiteSeven};
`

export const Typo13DarkSkyBlueRoboto = styled(BaseInterText)`
   font-size: 13px;
   color: ${Colors.darkSkyBlue};
`

export const Typo13WhiteRoboto = styled(BaseInterText)`
   font-size: 13px;
   color: ${Colors.white};
`

export const Typo13WhiteSevenRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 13px;
   color: ${Colors.whiteSeven};
`

export const Typo13GreyBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 13px;
   color: ${Colors.greyBlue};
`

export const Typo13WhiteRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 13px;
   color: ${Colors.whiteFourNew};
`

//font-size : 14px

export const Typo14GrayChateauRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.grayChateau};
`

export const Typo14DarkBlueGreyFiveRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkBlueGreyFive};
`
export const Type14ElephantDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.elephant};
`

export const Typo14GrayChateauRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.grayChateau};
`

export const Typo14DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo14FadedBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.fadedBlueTwo};
`

export const Typo14PumpkinRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.pumpkin};
`

export const Typo14AzureTwoRobotoBoldText = styled(BaseText)`
   font-size: 14px;
   font-weight: bold;
   color: ${Colors.azureTwo};
`

export const Typo14AzureTwoText = styled(BaseText)`
   font-size: 14px;
   color: ${Colors.azureTwo};
`

export const Typo14Bold = styled(BaseInterText)`
   font-size: 14px;
   font-weight: bold;
`

export const Typo14IDPSlateDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.idpSlate};
`

export const Typo14IDPSlateInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.idpSlate};
`

export const Typo14WhiteDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14RobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
`

export const Typo14BlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.blue};
`

export const Typo14BlackRobotoSeven = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.black7};
`

export const Typo14BlackRobotoMono = styled(BaseJetBrainsMonoText)`
   font-size: 14px;
`

export const Typo14BlueBlueRobotoMono = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.blueBlue};
`

export const Typo14BlackRoboto = styled(BaseInterText)`
   font-size: 14px;
`

export const Typo14MetallicBlueRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.metallicBlue};
`

export const Typo14SlateEightInter = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.slateEight};
`
export const Typo14SlateEightTwoInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.slateEightTwo};
`

export const Typo14SlateEightInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.slateEight};
`

export const Typo14GunMetalTWoRR = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.gunMetalTwo};
`

export const Typo14BlueGreyRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo14blueyGreenRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.blueyGreen};
`

export const Typo14DarkGreyBlueTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo14SteelThreeRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.steelThree};
`

export const Typo14SteelThreeDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.steelThree};
`

export const Typo14SteelThreeHKGroteskMedium = styled(BaseHKGroteskMediumText)`
   font-size: 14px;
   color: ${Colors.steelThree};
`

export const Typo14DarkGreyTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkGreyTwo};
`

export const Typo14DuckEggBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.duckEggBlue};
`

export const Typo14WhiteOpenSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14LightNavyThreeRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.lightNavyThree};
`

export const Typo14LightNavyTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.lightNavyTwo};
`

export const Typo14LightNavyTwoInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.lightNavyTwo};
`

export const Typo14WhiteRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.white};
   font-weight: bold;
`

export const Typo14DarkRR = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.dark};
`

export const Typo14WhiteRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14WhiteRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14WhiteRobotoSemiBold = styled(BaseHKGroteskSemiBoldText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14BrightSkyBlueThreeRobotoMedium = styled(
   BaseRobotoMediumText
)`
   font-size: 14px;
   color: ${Colors.brightSkyBlueThree};
`

export const Typo14RedTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.redTwo};
`
export const Typo14MetallicBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.metallicBlue};
`

export const LinkButtonText = styled(Typo14AzureTwoText)`
   cursor: pointer;
`

export const LinkButtonBoldText = styled(Typo14AzureTwoText)`
   cursor: pointer;
   font-weight: 500;
`

export const Typo14RosePinkFiraCodeLight = styled(BaseFiraCodeLight)`
   color: ${Colors.rosePink};
`

export const Typo14SeaweedRobotoRegular = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.seaweed};
`

export const Typo14SlateBlueRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.slateBlue};
`

export const Typo14DarkSlateBlueTwoPoppins = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkSlateBlueTwo};
`

export const Typo14MarineBlueRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.marineBlueTwo};
`

export const Typo14MarineBlueRM = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.marineBlueTwo};
`

export const Typo14MarineBlueThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.marineBlueThree};
`

export const Typo14DarkSkyBlue = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo14DarkSkyBlueThreeRoboto = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo14CharcoalGreyTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.charcoalGreyTwo};
`
export const Typo14CharcoalGreyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.charcoalGreyTwo};
`

export const Typo14WaterBlueRoboto = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.waterBlueNew};
`

export const Typo14BlueWithAHintOfPurpleRoboto = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.blueWithAHintOfPurple};
`

export const Typo14WhiteInter = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.whiteFourNew};
`

export const Typo14BluePurpleBoldRoboto = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.blueWithAHintOfPurple};
`

export const Typo14BluePurpleMediumRoboto = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.blueWithAHintOfPurple};
`

export const Typo14AzulOneMediumRoboto = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.azulOne};
`

export const Typo14MarineBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.marineBlueTwo};
`

export const Typo14BlackPSB = styled(BasePoppinsSemiBold)`
   font-size: 14px;
`

export const Typo14BlackPoppinsMedium = styled(BasePoppinsMedium)`
   font-size: 14px;
`
export const Typo14SlateNineRobotoNormal = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.slateNine};
`

export const Typo14BlackSevenText = styled(BaseText)`
   font-size: 14px;
   color: ${Colors.black7};
`

export const Typo14WaterBlueNewRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.waterBlueNew};
`

export const Typo14WaterBlueNewRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.waterBlueNew};
`

export const Typo14WaterBlueNewRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.waterBlueNew};
`

export const Typo14MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.marineBlueTwo};
`
export const Typo14BattleshipGreyTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.battleshipGreyTwo};
`
export const Typo14MarineBlueTwoRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.marineBlueTwo};
`

export const Typo14WindowsBlue2RM = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.blueWithAHintOfPurple};
`

export const Typo14CoralRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.coral};
`

export const Typo14Black15HKGroteskMedium = styled(BaseHKGroteskMediumText)`
   font-size: 14px;
   color: ${Colors.black15};
`

export const Typo14WhiteHKGroteskSemiBold = styled(BaseHKGroteskSemiBoldText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14WhiteInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14CeruleanThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.ceruleanThree};
`

export const Typo14CeruleanThreeRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.ceruleanThree};
`

export const Typo14CeruleanThreeDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.ceruleanThree};
`

export const Typo14CeruleanThreeRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.ceruleanThree};
`

export const Typo14SteelThreeHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 14px;
   color: ${Colors.steelThree};
`

export const Typo14SlateGreyThreeDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 14px;
   color: ${Colors.slateGreyThree};
`

export const Typo14PolarDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.polar};
`

export const Typo14PickledBlueWoodDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 14px;
   color: ${Colors.pickledBlueWood};
`

export const Typo14SlateGreyThreeDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.slateGreyThree};
`

export const Typo14PickledBlueWoodDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.pickledBlueWood};
`

export const Typo14PickledBlueWoodDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.pickledBlueWood};
`

export const Typo14PickledInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.pickledBlueWood};
`

export const Typo14SlateGreyThreeDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.slateGreyThree};
`

export const Typo14ZumthorHKGroteskSemi = styled(BaseHKGroteskSemiBoldText)`
   font-size: 14px;
   color: ${Colors.zumthor};
`

export const Typo14IDPSlateDMSans = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.idpSlate};
`

export const Typo14BluishPurpleDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14;
   color: ${Colors.bluishPurple};
`

export const Typo14WhiteDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.white};
`

export const Typo14SolitudeRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 14px;
   color: ${Colors.solitude};
`
export const Typo14SilverFourHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 14px;
   color: ${Colors.silverFour};
`

export const Typo14CeruleanThreeHKGroteskSemibold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 14px;
   color: ${Colors.ceruleanThree};
`

export const Typo14DarkGreyBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo14MidNightExpressRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.midNightExpress};
`

export const Typo14LightSlateGreyRoboto = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.lightSlateGrey};
`

export const Typo14CharcoalGreyFourInterRegular = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.charcoalGreyTwo};
`

export const Typo14SlateTwoInterSemiBold = styled(BaseInterSemiBoldText)`
   font-size: 14px;
   color: ${Colors.idpSlate};
`

export const Typo14IDPPaleGreyFiveInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.idpPaleGreyFive};
`

export const Typo14GunMetalThreeInterMedium = styled(BaseInterMediumText)`
   font-size: 16px;
   color: ${Colors.gunMetalThree};
`

//font-size: 15px

export const Typo15WhiteOpenSans = styled(BaseInterText)`
   font-size: 15px;
   color: ${Colors.white};
`

export const Typo15DodgerBlueTwo = styled(BaseInterText)`
   font-size: 15px;
   color: ${Colors.dodgerBlueTwo};
`

export const Typo15BlackRoboto = styled(BaseInterText)`
   font-size: 15px;
`

//font-size: 16px

export const Typo16MirageDMSansBold = styled(BaseDMSansSemiBoldText)`
   font-size: 16px;
   color: ${Colors.mirage};
`
export const Typo16IdpBlueyGreyDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 16px;
   color: ${Colors.idpBlueyGrey};
`

export const Typo16IDPSlateInter = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.idpSlate};
`

export const Typo16WhiteDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 16px;
   color: ${Colors.white};
`

export const Typo16DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkBlueGreyFive};
`
export const Typo16BattleshipGreyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.battleshipGreyTwo};
`
export const Typo16OceanBlueFourRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.oceanBlueFour};
`

export const Typo16DuskRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.dusk};
`

export const Typo16MetallicBlueRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.metallicBlue};
`

export const Typo16MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.marineBlueTwo};
`

export const Typo16MarineBlueTwoRobotoNormal = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.marineBlueTwo};
`

export const Typo16KelleyGreenRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.kelleyGreen};
`

export const Typo16MetallicBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.metallicBlue};
`

export const Typo16LightNavyTwoRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.lightNavyTwo};
`

export const Typo16LightNavyTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 16px;
   color: ${Colors.lightNavyTwo};
`

export const Typo16DarkGreyBlueTwoRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo16DarkGreyBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo16EmeraldRM = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.emerald};
`

export const Typo16DarkBlueGreyRM = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkBlueGrey};
`

export const Typo16BlackRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.black};
`
export const Typo16BlueyGreenRobotoSemiBold = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.blueyGreen};
`
export const Typo16WhiteRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.white};
`

export const Typo16LightPeriwinkleTwoRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.lightPeriwinkleTwo};
`

export const Typo16WhiteRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 16px;
   color: ${Colors.white};
`

export const Typo16GreyishRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.greyish};
`

export const Typo16WaterBlueNewRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.waterBlueNew};
`

export const Typo16BlackFourRobotoBold = styled(BaseInterText)`
   font-size: 16px;
   font-weight: bold;
   color: ${Colors.blackFour};
`

export const Typo16OceanBlueRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.oceanBlue};
`

export const Typo16DuskRR = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.dusk};
`

export const Typo16OceanBlueTwoRoboto = styled(BaseRobotoBoldText)`
   font-size: 16px;
   color: ${Colors.oceanBlueTwo};
`

export const Typo16MontserratTexasRose = styled(BaseInterText)`
   font-size: 16px;
   font-weight: 300;
   font-family: 'Montserrat';
   color: ${Colors.texasRose};
`

export const Typo16LightNavyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.lightNavyTwo};
`

export const Typo16DarkSlateBlueRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.darkSlateBlue};
`

export const Typo16BlackPoppins = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.black};
`

export const Typo16BlackPSB = styled(BasePoppinsSemiBold)`
   font-size: 16px;
`

export const Typo16PumpkinPoppins = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.pumpkin};
`

export const Typo16MarineBlueRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.marineBlueTwo};
`

export const Typo16MarineBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.marineBlueTwo};
`

export const Typo16MarineBlueThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.marineBlueThree};
`

export const Typo14DarkSkyBlue3RM = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo16DuckEggBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.duckEggBlue};
`

export const Typo16CharcoalGreyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.charcoalGreyTwo};
`

export const Typo16WaterBlueNewRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 16px;
   color: ${Colors.waterBlueNew};
`

export const Typo16DarkBlueGreyFiveRobotoRegular = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo16DarkBlueGreyFiveSourceCodeProRegular = styled(
   BaseSourceCodeProText
)`
   font-size: 16px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo16slateGreyTwoNewRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.slateGreyTwoNew};
`
export const Typo16SlateNineRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.slateNine};
`
export const Typo16GreyishBrownOneHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.greyishBrownOne};
`

export const Typo16Black15HKGroteskMedium = styled(BaseHKGroteskMediumText)`
   font-size: 16px;
   color: ${Colors.black15};
`
export const Typo16WhiteDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 16px;
   color: ${Colors.white};
`
export const Typo16SteelThreeHKGroteskMedium = styled(BaseHKGroteskMediumText)`
   font-size: 16px;
   color: ${Colors.steelThree};
`
export const Typo16WhiteHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.whiteSeven};
`

export const Typo16WhiteSevenInterMedium = styled(BaseInterMediumText)`
   font-size: 16px;
   color: ${Colors.whiteSeven};
`

export const Typo16BattleShipGreyHKGroteskMedium = styled(
   BaseHKGroteskMediumText
)`
   font-size: 16px;
   color: ${Colors.battleshipGrey};
`

export const Typo16BattleShipGreyHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.battleshipGrey};
`

export const Typo16Black15HKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.black15};
`

export const Typo16WarmBlueHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.warmBlue};
`

export const Typo16BattleshipGreyTwoRoboto = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.battleshipGreyTwo};
`

export const Typo16pickledBlueWoodDMSans = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.pickledBlueWood};
`
export const Typo16PickledBlueWoodDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 16px;
   color: ${Colors.pickledBlueWood};
`

export const Typo16DarkGreyBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 16px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo16MetallicBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.metallicBlueTwo};
`
export const Typo16BrownishOrangeHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 16px;
   color: ${Colors.brownishOrange};
`

export const Typo16PickledBlueWoodInterSemiBold = styled(BaseInterSemiBoldText)`
   font-size: 16px;
   color: ${Colors.pickledBlueWood};
`

export const Typo16PickledBlueWoodInterBold = styled(BaseInterBoldText)`
   font-size: 16px;
   color: ${Colors.pickledBlueWood};
`

export const Typo16SlateGreyTwoNewInter = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.slateGreyTwoNew};
`

export const Typo16SlateGreyThreeInterRegular = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.slateGreyThree};
`

export const Typo16DarkSeaGreenRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkSeaGreen};
`

export const Typo16DarkishBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.darkishBlue};
`

//font-size : 17px

export const Typo17BlackPoppins = styled(BaseInterText)`
   font-size: 17px;
   color: ${Colors.black};
`

//font-size : 18px

export const Typo18BattleShipGreyTwoHkGrotestMedium = styled(
   BaseHKGroteskMediumText
)`
   font-size: 18px;
   color: ${Colors.battleshipGreyTwo};
`

export const Typo18MirageDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 18px;
   color: ${Colors.mirage};
`

export const Typo18KelleyGreenRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 18px;
   color: ${Colors.kelleyGreen};
`
export const Typo18GreenishTealTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.greenishTealTwo};
`

export const Typo18PumpkinRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 18px;
   color: ${Colors.pumpkin};
`

export const Typo18WaterBlueNewRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.waterBlueNew};
`

export const Typo18WhiteRoboto = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.white};
`

export const Typo18DarkSlateBlueTwoPoppins = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.darkSlateBlueTwo};
`

export const Typo18Bold = styled(BaseInterText)`
   font-size: 18px;
   font-weight: bold;
`

export const Typo18GunMetalTWoRM = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.gunMetalTwo};
`
export const Typo18GunMetal = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.gunMetal};
`

export const Typo18MarineBlueThreeRobotoNormal = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.marineBlueThree};
`

export const Typo18BlackSixRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.blackSix};
`

export const Typo18NavyBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.navyBlue};
`

export const Typo18MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.marineBlueTwo};
`

export const Typo18MarineBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 18px;
   color: ${Colors.marineBlueTwo};
`

export const Typo18EmeraldRM = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.emerald};
`

export const Typo18DuckEggBlueRoboto = styled(BaseRobotoLightText)`
   font-size: 18px;
   color: ${Colors.duckEggBlue};
`

export const Typo18SlateThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.slateThree};
`

export const Typo18DarkBlueGreyRoboto = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.darkBlueGrey};
`

export const Typo18DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo18IceBlueThreeHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 18px;
   color: ${Colors.iceBlueThree};
`

export const Typo18TangaroaDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 18px;
   color: ${Colors.tangaroa};
`

export const Typo18IceBlueThreeHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 18px;
   color: ${Colors.iceBlueThree};
`

export const Typo18GreyishBrownOneHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 18px;
   color: ${Colors.greyishBrownOne};
`

export const Typo18VeryDarkBrownOneHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 18px;
   color: ${Colors.veryDarkBrownOne};
`

export const Typo18Black15HKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 18px;
   color: ${Colors.black15};
`
export const Typo18SlateNineRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.slateNine};
`
export const Typo18AzulTwoHKGroteskSemiBold = styled(BaseHKGroteskSemiBoldText)`
   font-size: 18px;
   color: ${Colors.azulTwo};
`

export const Typo18MarineBlueTwoRoboto = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.marineBlueTwo};
`
export const Typo18PickledBlueWoodInter = styled(BaseInterMediumText)`
   font-size: 18px;
   color: ${Colors.pickledBlueWood};
`

export const Typo18MetallicBlueRoboto = styled(BaseInterText)`
   font-size: 18px;
   color: ${Colors.metallicBlue};
`

export const Typo18PickledBlueWoodInterBold = styled(BaseInterBoldText)`
   font-size: 18px;
   color: ${Colors.pickledBlueWood};
`
//font-size : 20px;

export const Typo20DarkGreyBlueTwo = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo20LightNavyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.lightNavyTwo};
`

export const Typo20Poppins = styled(BaseInterText)`
   font-size: 20px;
`

export const Typo20FadedBlueTwoRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.fadedBlueTwo};
`

export const Typo20BlackFourRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.blackFour};
`

export const Typo20DarkGreyBlueTwoRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo20MetallicBlueRoboto = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.metallicBlue};
`

export const Typo20NavyBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.navyBlue};
`
export const Typo20CeruleanThreeRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.ceruleanThree};
`
export const Typo16CeruleanThreeHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 16px;
   color: ${Colors.ceruleanThree};
`

export const Typo20MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.marineBlueTwo};
`

export const Typo20MarineBlueThreeRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.marineBlueThree};
`

export const Typo20DarkBlueGreyFiveRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo20DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 20px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo20NavyBlueRoboto = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.navyBlue};
`

export const Typo20WindowBlueTwoHKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 20px;
   color: ${Colors.windowsBlueTwo};
`

export const Typo20Black15HKGroteskBold = styled(BaseHKGroteskBoldText)`
   font-size: 20px;
   color: ${Colors.black15};
`

export const Typo20SlateBlueDMSansSemiBold = styled(BaseDMSansSemiBoldText)`
   font-size: 20px;
   color: ${Colors.tangaroa};
`

export const Typo20PickledBlueWoodInterMedium = styled(BaseInterMediumText)`
   font-size: 20px;
   color: ${Colors.pickledBlueWood};
`

//font-size : 22px;
export const Typo22GreenBlueBold = styled(BaseRobotoMediumText)`
   font-size: 22px;
   font-weight: bold;
   color: ${Colors.greenBlue};
`
export const Typo22LightNavyTwoRobotoBold = styled(BaseRobotoBoldText)`
   color: ${Colors.lightNavyTwo};
   font-size: 22px;
`

export const Typo22BlackRoboto = styled(BaseInterText)`
   font-size: 22px;
`

//font-size : 24px;

export const Typo24DarkGrayBlueDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 24px;
   color: ${Colors.pickledBlueWood};
`

export const Typo24SlateBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.slateBlue};
`

export const Typo24MidNightExpressRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.midNightExpress};
`

export const Typo24MarineBlueTwoRoboto = styled(BaseInterText)`
   font-size: 24px;
   color: ${Colors.marineBlueTwo};
`

export const Typo24VeryDarkBrownRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.black21};
`

export const Typo24MarineBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 24px;
   color: ${Colors.marineBlueTwo};
`

export const Typo24LightNavyTwoRobotoBold = styled(BaseInterText)`
   font-size: 24px;
   color: ${Colors.lightNavyTwo};
   font-weight: bold;
`

export const Typo24LightNavyTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.lightNavyTwo};
`

export const Typo24LightNavyTwoInterMedium = styled(BaseInterMediumText)`
   font-size: 24px;
   color: ${Colors.lightNavyTwo};
`

export const Typo24LightNavyTwoInterBold = styled(BaseInterBoldText)`
   font-size: 24px;
   color: ${Colors.lightNavyTwo};
`

export const Typo24DarkBlueGreyFiveRoboto = styled(BaseInterText)`
   font-size: 24px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo24DarkBlueGreyFiveRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo24MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 24px;
   color: ${Colors.marineBlueTwo};
`

export const Typo24DarkSlateBlueThreeRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 24px;
   color: ${Colors.darkSlateBlueThree};
`

export const Typo24PickledBlueWoodDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 24px;
   color: ${Colors.pickledBlueWood};
`

export const Typo24PaleGrayTwoInterMedium = styled(BaseInterMediumText)`
   font-size: 24px;
   color: ${Colors.paleGrayTwo};
`

export const Typo24DarkGreyBlueTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 24px;
   color: ${Colors.darkGreyBlueTwo};
`

export const Typo24WhiteInterBold = styled(BaseInterBoldText)`
   font-size: 24px;
   color: ${Colors.white};
`

export const Typo24RegentGreyInter = styled(BaseInterText)`
   font-size: 24px;
   color: ${Colors.regentGrey};
`

export const Typo24PickleBlueWoodInterBold = styled(BaseInterBoldText)`
   font-size: 24px;
   color: ${Colors.pickledBlueWood};
`

//font-size: 25px

export const Typo25SlateThreeOswaldBold = styled(BaseOswaldBoldText)`
   font-size: 25px;
   color: ${Colors.slateThree};
`

export const Typo25ItalicWhite = styled(BaseInterText)`
   color: ${Colors.white};
   font-size: 25px;
   font-style: italic;
`

//font-size: 26px

export const Typo26BlackRoboto = styled(BaseInterText)`
   font-size: 26px;
   color: ${Colors.blackFive};
`

export const Typo26Black7Roboto = styled(BaseRobotoBoldText)`
   font-size: 26px;
   color: ${Colors.black7};
`

//font-size: 28px

export const Typo28DarkSlateBlueTwoMedium = styled(BasePoppinsMedium)`
   font-size: 28px;
   color: ${Colors.darkSlateBlueTwo};
`

export const Typo28Black21Roboto = styled(BaseRobotoMediumText)`
   font-size: 28px;
   color: ${Colors.black21};
`

//font-size : 30px

export const Typo30BlackRoboto = styled(BaseInterText)`
   font-size: 30px;
`

export const Typo30SlateBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 30px;
   color: ${Colors.slateBlue};
`

export const Typo30NavyBlueRoboto = styled(BaseInterText)`
   font-size: 30px;
   font-weight: bold;
   color: ${Colors.navyBlue};
`

export const Typo30LightNavyTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 30px;
   color: ${Colors.lightNavyTwo};
`

export const Typo30VeryDarkBrownRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 30px;
   color: ${Colors.black21};
`

export const Typo30MarineBlueTwoRobotoLightText = styled(BaseRobotoLightText)`
   font-size: 30px;
   color: ${Colors.marineBlueTwo};
`

export const Typo30MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 30px;
   color: ${Colors.marineBlueTwo};
`

export const Typo30DarkSkyBlue = styled(BaseInterText)`
   font-size: 30px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo30WaterBlueNewRoboto = styled(BaseInterText)`
   font-size: 30px;
   color: ${Colors.waterBlueNew};
`

export const Typo30PickledBlueWoodDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 30px;
   color: ${Colors.pickledBlueWood};
`

//font-size : 32px

export const Typo32DodgerBlueThreeRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 32px;
   color: ${Colors.dodgerBlueThree};
`

export const Typo32MarineBlueTwoRobotoMedium = styled(BaseRobotoBoldText)`
   font-size: 32px;
   color: ${Colors.marineBlueTwo};
`

//font-size : 36px

export const Typo36MarineBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 36px;
   color: ${Colors.marineBlueTwo};
`

export const Typo36DarkGreyThreeCodeTwoRobotoLight = styled(
   BaseRobotoLightText
)`
   font-size: 36px;
   color: ${Colors.darkGreyThreeCode};
`

export const Typo36LightNavyTwoRobotoBold = styled(BaseRobotoBoldText)`
   font-size: 36px;
   color: ${Colors.lightNavyTwo};
`

export const Typo36WhiteRobotoLight = styled(BaseRobotoLightText)`
   font-size: 36px;
   color: ${Colors.white};
`

export const Typo45SlateRobotoBold = styled(BaseRobotoMediumText)`
   font-size: 45px;
   color: ${Colors.slate};
`
export const Typo14AzulTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.azulTwo};
`
export const Typo14IdpSlateDMSansBold = styled(BaseDMSansBoldText)`
   font-size: 14px;
   color: ${Colors.idpSlate};
`
export const Typo18GunMetalRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 18px;
   color: ${Colors.gunMetal};
`
export const Typo14BattleshipGreyRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.battleshipGrey};
`
export const Typo14BattleshipGreyHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 14px;
   color: ${Colors.battleshipGrey};
`

export const Typo14BattleshipGreyTwoHKGroteskSemiBold = styled(
   BaseHKGroteskSemiBoldText
)`
   font-size: 14px;
   color: ${Colors.battleshipGreyTwo};
`

export const Typo14TomatoRedTwoSourceCodeProRegular = styled(
   BaseSourceCodeProText
)`
   font-size: 14px;
   color: ${Colors.tomatoRedTwo};
`

export const Typo12DarkGreyBlueThreeRoboto = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.darkGreyBlueThree};
`

export const Typo12DarkBlueGreyFiveSourceCodeProRegular = styled(
   BaseSourceCodeProText
)`
   font-size: 12px;
   color: ${Colors.darkBlueGreyFive};
`

export const Typo14GreenBlueTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.greenBlueTwo};
`

export const Typo14DarkBlueGrayTwoRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 14px;
   color: ${Colors.idpDarkBlueGreyTwo};
`

export const Typo14IDPDarkInterMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   color: ${Colors.idpDark};
`

export const Typo14IdpPumkinDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 14px;
   color: ${Colors.idpPumkin};
`

export const Typo16DarkSkyBlueThreeRobotoRegular = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.darkSkyBlueThree};
`

export const Typo16DarkBlueGrayTwoRobotoRegular = styled(BaseInterText)`
   font-size: 16px;
   color: ${Colors.idpDarkBlueGreyTwo};
`

export const Typo16DarkBlueGrayTwoInterMedium = styled(BaseInterMediumText)`
   font-size: 16px;
   color: ${Colors.idpDarkBlueGreyTwo};
`

export const Typo16SlateBlueDMSansSemiBold = styled(BaseDMSansSemiBoldText)`
   font-size: 16px;
   color: ${Colors.tangaroa};
`

export const Typo14fadedBlueTwoRobotoMedium = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.fadedBlueTwo};
`
export const Typo12BlackFourteenRobotoRegular = styled(BaseInterText)`
   font-size: 12px;
   color: ${Colors.black};
`

export const Typo14BlackFourteenRobotoRegular = styled(BaseInterText)`
   font-size: 14px;
   color: ${Colors.black};
`

export const Typo24BlackFourteenRobotoRegular = styled(BaseInterText)`
   font-size: 24px;
   color: ${Colors.black};
`

export const Typo24PaleGrayTwoDMSansMedium = styled(BaseDMSansMediumText)`
   font-size: 24px;
   color: ${Colors.paleGrayTwo};
`

export const Typo20DarkSkyBlueThreeRobotoRegular = styled(BaseInterText)`
   font-size: 20px;
   color: ${Colors.darkSkyBlueThree};
`
export const Typo16OxfordBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 16px;
   color: ${Colors.oxfordBlue};
`

export const Typo36OxfordBlueTwoRobotoMedium = styled(BaseDMSansSemiBoldText)`
   font-size: 36px;
   color: ${Colors.darkSlateBlueThree};
`
export const Typo30SlateEightRoboto = styled(BaseRobotoMediumText)`
   font-size: 30px;
   color: ${Colors.slateEight};
`
export const Typo30OxfordBlueRobotoMedium = styled(BaseRobotoMediumText)`
   font-size: 30px;
   color: ${Colors.oxfordBlueTwo};
`
// NOTE: According to our new style guide structure typos

export const DocsPageTitle = styled(BaseInterBoldText)`
   font-size: 560px;
   line-height: normal;
   letter-spacing: 11.2px;
`
export const DisplayLargeHeavy = styled(BaseInterSemiBoldText)`
   font-size: 72px;
   line-height: 1.06;
   letter-spacing: normal;
   ${tablet} {
      line-height: 1.16;
   }
   ${mobile} {
      font-size: 48px;
      line-height: 1;
   }
`
export const DocsSectionTitle = styled(BaseInterBoldText)`
   font-size: 160px;
   line-height: normal;
   letter-spacing: 1.6px;
`
export const DisplaySmallMedium = styled(BaseInterMediumText)`
   font-size: 60px;
   line-height: 1.07;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 36px;
      line-height: 1.33;
   }
   ${mobile} {
      line-height: 1.11;
   }
`
export const DisplaySmallRegular = styled(BaseInterText)`
   font-size: 60px;
   line-height: 1.07;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 36px;
      line-height: 1.33;
   }
   ${mobile} {
      line-height: 1.11;
   }
`
export const DocsCategoryTitle = styled(BaseInterBoldText)`
   font-size: 54px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const DisplaySmallHeavy = styled(BaseInterSemiBoldText)`
   font-size: 60px;
   line-height: 1.07;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 36px;
      line-height: 1.33;
   }
   ${mobile} {
      line-height: 1.11;
   }
`
export const DisplayLargeMedium = styled(BaseInterMediumText)`
   font-size: 72px;
   line-height: 1.06;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 48px;
      line-height: 1.16;
   }
   ${mobile} {
      line-height: 1;
   }
`
export const DisplayLargeRegular = styled(BaseInterText)`
   font-size: 72px;
   line-height: 1.06;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 48px;
      line-height: 1.16;
   }
   ${mobile} {
      line-height: 1;
   }
`
export const Heading1Heavy = styled(BaseInterSemiBoldText)`
   font-size: 48px;
   line-height: 1.08;
   letter-spacing: normal;
   ${tablet} {
      font-size: 36px;
      line-height: 1.22;
   }
   ${mobile} {
      font-size: 30px;
      line-height: 1.2;
   }
`
export const Heading1Medium = styled(BaseInterMediumText)`
   font-size: 48px;
   line-height: 1.08;
   letter-spacing: normal;
   ${tablet} {
      font-size: 36px;
      line-height: 1.22;
   }
   ${mobile} {
      font-size: 30px;
      line-height: 1.2;
   }
`
export const Heading1Regular = styled(BaseInterText)`
   font-size: 48px;
   line-height: 1.08;
   letter-spacing: normal;
   ${tablet} {
      font-size: 36px;
      line-height: 1.22;
   }
   ${mobile} {
      font-size: 30px;
      line-height: 1.2;
   }
`
export const ParagraphLargeHeavy = styled(BaseInterSemiBoldText)`
   font-size: 24px;
   line-height: 1.67;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 20px;
      line-height: 1.6;
   }
`
export const ParagraphLargeMedium = styled(BaseInterMediumText)`
   font-size: 24px;
   line-height: 1.67;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 20px;
      line-height: 1.6;
   }
`
export const ParagraphLargeRegular = styled(BaseInterText)`
   font-size: 24px;
   line-height: 1.67;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 20px;
      line-height: 1.33;
   }
`
export const DocsComponentName = styled(BaseInterBoldText)`
   font-size: 24px;
   line-height: normal;
   letter-spacing: normal;
`
export const DocsComponentDescription = styled(BaseInterText)`
   font-size: 18px;
   line-height: 1.55;
   letter-spacing: normal;
`
export const ParagraphBaseHeavy = styled(BaseInterSemiBoldText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ParagraphBaseMedium = styled(BaseInterMediumText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ParagraphBaseRegular = styled(BaseInterText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const DocsComponentSubtitle = styled(BaseInterBoldText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ParagraphSmallHeavy = styled(BaseInterSemiBoldText)`
   font-size: 14px;
   line-height: 1.71;
   letter-spacing: normal;
`
export const ParagraphSmallMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   line-height: 1.71;
   letter-spacing: normal;
`
export const ParagraphSmallRegular = styled(BaseInterText)`
   font-size: 14px;
   line-height: 1.71;
   letter-spacing: normal;
`
export const Heading2Heavy = styled(BaseInterSemiBoldText)`
   font-size: 36px;
   line-height: 1.22;
   letter-spacing: normal;
   ${tablet} {
      font-size: 20px;
      line-height: 1.4;
   }
   ${mobile} {
      font-size: 24px;
      line-height: 1.33;
   }
`
export const Heading2Regular = styled(BaseInterText)`
   font-size: 36px;
   line-height: 1.22;
   letter-spacing: normal;
   ${tablet} {
      font-size: 30px;
      line-height: 1.2;
   }
   ${mobile} {
      font-size: 24px;
      line-height: 1.33;
   }
`
export const Heading2Medium = styled(BaseInterMediumText)`
   font-size: 36px;
   line-height: 1.22;
   letter-spacing: normal;
   ${tablet} {
      font-size: 30px;
      line-height: 1.2;
   }
   ${mobile} {
      font-size: 24px;
      line-height: 1.33;
   }
`
export const Heading5Medium = styled(BaseInterMediumText)`
   font-size: 20px;
   line-height: 1.6;
   letter-spacing: normal;
   ${tablet} {
      font-size: 18px;
      line-height: 1.33;
   }
   ${mobile} {
      font-size: 16px;
      line-height: 1.5;
   }
`
export const Heading5Heavy = styled(BaseInterSemiBoldText)`
   font-size: 20px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 18px;
      line-height: 1.33;
   }
   ${mobile} {
      font-size: 16px;
      line-height: 1.5;
   }
`
export const Heading5Regular = styled(BaseInterText)`
   font-size: 20px;
   line-height: 1.33;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 18px;
      line-height: 1.33;
   }
   ${mobile} {
      line-height: 1.5;
   }
`
export const ActionLinkLarge = styled(BaseInterMediumText)`
   font-size: 20px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ActionButtonLarge = styled(BaseInterSemiBoldText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ActionButtonLargeRegular = styled(BaseInterText)`
   font-size: 16px;
   line-height: 1.75;
   letter-spacing: normal;
`
export const ActionLinkMedium = styled(BaseInterMediumText)`
   font-size: 16px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const ActionButtonMedium = styled(BaseInterMediumText)`
   font-size: 14px;
   line-height: 1.71;
   letter-spacing: normal;
`
export const DocsComponentSmallDescription = styled(BaseInterText)`
   font-size: 14px;
   line-height: 1.67;
   letter-spacing: normal;
`
export const ActionLinkSmall = styled(BaseInterMediumText)`
   font-size: 14px;
   line-height: 1.43;
   letter-spacing: normal;
`
export const ParagraphXsmallHeavy = styled(BaseInterSemiBoldText)`
   font-size: 12px;
   line-height: 1.67;
   letter-spacing: normal;
`
export const ParagraphXsmallMedium = styled(BaseInterMediumText)`
   font-size: 12px;
   line-height: 1.67;
   letter-spacing: normal;
`
export const ParagraphXsmallRegular = styled(BaseInterText)`
   font-size: 12px;
   line-height: 1.67;
   letter-spacing: normal;
`
export const SmallCapsHeavy = styled(BaseInterSemiBoldText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: 0.6px;
`
export const SmallCapsMedium = styled(BaseInterMediumText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: 0.6px;
`
export const SmallCapsRegular = styled(BaseInterText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: 0.72px;
`
export const ActionButtonSmall = styled(BaseInterMediumText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const ActionButtonSmallHeavy = styled(BaseInterSemiBoldText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const ParagraphTinyHeavy = styled(BaseInterSemiBoldText)`
   font-size: 10px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const ParagraphTinyMedium = styled(BaseInterMediumText)`
   font-size: 10px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const ParagraphTinyRegular = styled(BaseInterText)`
   font-size: 10px;
   line-height: 1.33;
   letter-spacing: normal;
`
export const Heading3Heavy = styled(BaseInterSemiBoldText)`
   font-size: 30px;
   line-height: 1.2;
   letter-spacing: normal;
   ${mobileOrTablet} {
      font-size: 24px;
      line-height: 1.33;
   }
`
export const Heading4Medium = styled(BaseInterMediumText)`
   font-size: 24px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 20px;
      line-height: 1.4;
   }
   ${mobile} {
      font-size: 18px;
      line-height: 1.33;
   }
`
export const Heading3Regular = styled(BaseInterText)`
   font-size: 30px;
   line-height: 1.2;
   letter-spacing: normal;
   ${tablet} {
      font-size: 24px;
      line-height: 1.33;
   }
   ${mobile} {
      font-size: 20px;
      line-height: 1.6;
   }
`
export const Heading4Heavy = styled(BaseInterSemiBoldText)`
   font-size: 24px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 20px;
      line-height: 1.4;
   }
   ${mobile} {
      line-height: 1.33;
      font-size: 18px;
   }
`
export const Heading3Medium = styled(BaseInterMediumText)`
   font-size: 30px;
   line-height: 1.2;
   letter-spacing: normal;
   ${tablet} {
      font-size: 24px;
      line-height: 1.33;
   }
   ${mobile} {
      font-size: 20px;
      line-height: 1.6;
   }
`
export const Heading4Regular = styled(BaseInterText)`
   font-size: 24px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 20px;
      line-height: 1.4;
   }
   ${mobile} {
      font-size: 18px;
      line-height: 1.33;
   }
`
export const Heading6Heavy = styled(BaseInterSemiBoldText)`
   font-size: 18px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 16px;
      line-height: 1.43;
   }
   ${mobile} {
      font-size: 14px;
   }
`

export const Heading6Regular = styled(BaseInterText)`
   font-size: 18px;
   line-height: 1.33;
   letter-spacing: normal;
   font-weight: normal;
   ${tablet} {
      font-size: 16px;
      line-height: 1.25;
   }
   ${mobile} {
      font-size: 14px;
      line-height: 1.43;
   }
`

export const Heading6Medium = styled(BaseInterMediumText)`
   font-size: 18px;
   line-height: 1.33;
   letter-spacing: normal;
   ${tablet} {
      font-size: 16px;
      line-height: 1.75;
   }
   ${mobile} {
      font-size: 14px;
      line-height: 1.43;
   }
`

export const ActionLinkTiny = styled(BaseInterMediumText)`
   font-size: 12px;
   line-height: 1.33;
   letter-spacing: normal;
`
