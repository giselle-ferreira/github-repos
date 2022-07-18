import { Container, ContainerImage, ContainerStatusCount, ContainerUser, ContainerUserGeneric } from "./style"
import useGithub  from "../../Hooks/github.hooks";

const Profile = () => {

  const { github } = useGithub();

  return (
    <Container>
      <ContainerImage src={github.user.avatar_url} alt="User's Avatar" />

      <ContainerUser>
        <div>
          <h1> {github.user.name} </h1>

          <ContainerUserGeneric>
            <h3>Username: </h3>
            <a href={github.user.html_url} target="_blank" rel="noreferrer"> {github.user.login} </a>
          </ContainerUserGeneric>

          <ContainerUserGeneric>
            <h3>Company: </h3>
            <span> {github.user.company} </span>
          </ContainerUserGeneric>

          <ContainerUserGeneric>
            <h3>Location: </h3>
            <span> {github.user.location} </span>
          </ContainerUserGeneric>

          <ContainerUserGeneric>
            <h3>Blog: </h3>
            <a href={github.user.blog} target="_blank" rel="noreferrer"> {github.user.blog} </a>
          </ContainerUserGeneric>

        </div>
            <ContainerStatusCount>
              <div>
                <h4>Followers</h4>
                <span> {github.user.followers} </span>
              </div>

              <div>
                <h4>Following</h4>
                <span> {github.user.following} </span>
              </div>

              <div>
                <h4>Repos</h4>
                <span> {github.user.public_repos} </span>
              </div>
            </ContainerStatusCount>

      </ContainerUser>
    </Container>
  )
}

export default Profile;