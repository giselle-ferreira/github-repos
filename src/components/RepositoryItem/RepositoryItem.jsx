import { Container, ContainerFullName, ContainerLink, ContainerTitle } from './style';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <Container>
        <ContainerTitle> {name} </ContainerTitle>
        <ContainerFullName>Full name: </ContainerFullName>
        <ContainerLink
            href={linkToRepo}
            target="_blank"
            rel="noreferrer"
        >
            {fullName}
        </ContainerLink>
    </Container>
  )
}

export default RepositoryItem;