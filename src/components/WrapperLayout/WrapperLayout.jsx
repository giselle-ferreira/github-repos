import  Header  from "../Header/Header"
import { WrapperStyle } from './style'

const WrapperLayout = ({ children }) => {
  return (
    <WrapperStyle>
        <Header />
        {children}
    </WrapperStyle>
  )
}

export default WrapperLayout