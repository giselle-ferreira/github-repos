import { Wrapper } from "./style";
import useGithub from '../../Hooks/github.hooks'
import { useState } from "react";

const Header = () => {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch)
  }
  
  return (
    <Wrapper>
      <input
      type="text"
      placeholder="Digite o username"
      onChange={(ev) => setUsernameForSearch(ev.target.value)}
      />

      <button type="submit" onClick={submitGetUser}>
        <span>Buscar</span>
      </button>
    </Wrapper>
  )
}

export default Header