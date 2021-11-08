import React from 'react'
import { Form, Title, Repos } from './styles'

import logo from '../../assets/logo.svg'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

interface GithubRepository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}
export const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = React.useState<String >('') 

    const [repos, setRepos] = React.useState<GithubRepository[]>([])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNewRepo(event.target.value)
    }

    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>,): Promise<void>{

        event.preventDefault() // evita de atualizar a página inteira
        if (!newRepo){
            alert(`Não foi informado um repositório`)
            return
        }
        // tentar procurar
        try {
            // consome a API
            const response = await api.get<GithubRepository>(`repos/${newRepo}`)
            // recebe o resultado
            const repository = response.data
            // atualiza o vetor
            setRepos([...repos, repository])
        }
        catch {
            alert(`Repositório não existe`)
        }
    }
    return (
        <>
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de Repositório do GitHub </Title>
            <Form onSubmit={handleAddRepo}>
                <input onChange={handleInputChange} placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
            <Repos>
                {
                    repos.map((repository, index) => (
                        <Link 
                            to={`/repositories/${repository.full_name}`} 
                            key={repository.full_name + index}>
                                <img src={repository.owner.avatar_url} 
                                     alt={repository.owner.login}/>
                                <div>
                                    <strong> {repository.full_name} </strong>
                                    <p>  {repository.description} </p>
                                </div>
                        </Link>
                    ))
                } 
            </Repos>

        </>
    )
}