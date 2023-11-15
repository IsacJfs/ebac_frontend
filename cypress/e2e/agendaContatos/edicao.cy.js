/// <reference types="cypress" />

const nome = 'Nome Teste de Edit'
const email = 'email@testedit.com'
const telefone = '88888888888'
const nomeEdit = 'Nome Teste Modificado'
const emailEdit = 'edit@editado.com'
const telefoneEdit = '77777777777'

describe('inclusão de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve preencher e enviar o formulário, após deverá editar', () => {
    // preenche e envia o formulário
    cy.get('[type="text"]').type(nome)
    cy.get('[type="email"]').type(email)
    cy.get('[type="tel"]').type(telefone)
    cy.get('.adicionar').click()
    cy.wait(500);

    // verifica se as informações constam no documento
    cy.get('.sc-eDDNvR li').contains(nome)
    cy.get('.sc-eDDNvR li').contains(email)
    cy.get('.sc-eDDNvR li').contains(telefone)

    // busca pelo nome e clica no .edit que está no mesmo container que o nome
    cy.contains('ul', nome).then((lista) => {
      cy.wrap(lista).parents('.contato').find('.edit').click();
    })
    cy.get('[type="text"]').clear().type(nomeEdit)
    cy.get('[type="email"]').clear().type(emailEdit)
    cy.get('[type="tel"]').clear().type(telefoneEdit)
    cy.get('.alterar').click()
    cy.wait(1000);
  })

  it('Verifica se as modificações passaram a constar no documento', () => {
    cy.get('.sc-eDDNvR li').contains(nomeEdit)
    cy.get('.sc-eDDNvR li').contains(emailEdit)
    cy.get('.sc-eDDNvR li').contains(telefoneEdit)
  })
})
