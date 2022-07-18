import { useEffect, useState } from 'react';
import useGithub from '../../Hooks/github.hooks'
import  RepositoryItem  from '../RepositoryItem/RepositoryItem';
import { ContainerTabs, ContainerTabList, ContainerTab, ContainerTabPanel, ContainerList } from './style'

const Repos = () => {

    const { github, getUserRepos } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

    useEffect(() => {
      if(github.user.login) {
        getUserRepos(github.user.login);        
      }
      setHasUserForSearchRepos(github.repos);

    }, [github.user.login]);


    return (
      <div>
        {hasUserForSearchRepos ? (
          <ContainerTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <ContainerTabList>
              <ContainerTab>Repositories</ContainerTab>
            </ContainerTabList>

            <ContainerTabPanel>
              <ContainerList>
                {github.repositories.map((item) => (
                  <RepositoryItem 
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                ))}
              </ContainerList>
            </ContainerTabPanel>
          </ContainerTabs>
        ) : (
          <></>
        )}
        
      </div>
    )
  }
  
export default Repos;
