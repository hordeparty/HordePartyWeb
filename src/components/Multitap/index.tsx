import Slot from 'components/Slot'
import * as S from './styles'

const Multitap = () => (
  <S.Wrapper>
    <S.FrontTap>
      <Slot />
      <Slot />
      <Slot />
      <Slot />
      <Slot />
    </S.FrontTap>
  </S.Wrapper>
)

export default Multitap
