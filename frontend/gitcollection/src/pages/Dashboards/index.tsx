import React from 'react'
import { Form, Title } from './styles'

import logo from '../../assets/logo.svg'
export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de Repositório do GitHub </Title>
            <Form>
                <input placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
        </>
    )
}