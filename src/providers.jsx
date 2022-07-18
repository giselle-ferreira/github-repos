import { GlobalStyle } from "./GlobalStyle/GlobalStyle"
import  GithubProvider  from "./Providers/Github-provider"
import App from './App';

const Providers = () => {
  return (
    <div>
        <GithubProvider>
            <GlobalStyle />
            <App />
        </GithubProvider>
    </div>
  )
}

export default Providers;