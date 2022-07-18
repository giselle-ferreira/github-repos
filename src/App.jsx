import  Profile  from './components/Profile/Profile'
import  Repos  from './components/Repos/Repos'
import  useGithub  from './Hooks/github.hooks'
import  WrapperLayout  from './components/WrapperLayout/WrapperLayout'
import  NoSearch  from './components/NoSearch/NoSearch'

const App = () => {

  const { github } = useGithub();

  return (

    <WrapperLayout>

      {github.hasUser ? (
        <>
          {github.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repos />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
      
    </WrapperLayout>

  )
}

export default App;
