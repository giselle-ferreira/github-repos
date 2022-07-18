import { useContext } from "react";
import { GithubContext } from '../Providers/Github-provider';

const useGithub = () => {
    const { github, getUser, getUserRepos } = useContext(GithubContext)

    return { github, getUser, getUserRepos };
}

export default useGithub;