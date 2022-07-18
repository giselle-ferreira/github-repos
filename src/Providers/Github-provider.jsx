import { useState, useCallback, createContext } from 'react';
import api from '../Services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
})

const GithubProvider = ({ children }) => {
    const [github, setGithub] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar_url: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    })
    

    const getUser = (username) => {
        setGithub((prevState) => ({
            ...prevState,
            loading: !prevState.loading,           
        }));

        api
        .get(`users/${username}`)
        .then(({ data }) => {
            setGithub((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar_url: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                },
            }));
        })
        .finally(() => {
            setGithub((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        })
    }


    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`)
        .then(({ data }) => {
            console.log(`data: ${JSON.stringify(data)}`)

            setGithub((prevState) => ({
                ...prevState,
                repositories: data,
            }))
        })
    }

    const contextValue = {
        github,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
    }


    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
    
}

export default GithubProvider;