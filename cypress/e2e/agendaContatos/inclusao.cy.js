/// <reference types="cypress" />

const nome = 'Primeiro Nome Cadastrado'
const email = 'email@email.com'
const telefone = '99999999999'

describe('inclusão de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve preencher e enviar o formulário', () => {
    cy.get('[type="text"]').type(nome)
    cy.get('[type="email"]').type(email)
    cy.get('[type="tel"]').type(telefone)
    cy.get('.adicionar').click()
  })

  it('Verifica se as informações passaram a constar no documento', () => {
    cy.get('.sc-eDDNvR li').contains(nome)
    cy.get('.sc-eDDNvR li').contains(email)
    cy.get('.sc-eDDNvR li').contains(telefone)
  })
})
