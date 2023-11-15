/// <reference types="cypress" />

const nome = 'Nome Teste Exclusão'
const email = 'email@emailtesteremocao.com'
const telefone = '22222222222'

describe('verifica a remoção de contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve preencher e enviar o formulário que será removido, após irá remover o contato', () => {
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

    // busca pelo nome e clica no .delete que está no mesmo container que o nome
    cy.contains('ul', nome).then((lista) => {
      cy.wrap(lista).parents('.contato').find('.delete').click();
    })
    cy.wait(1000);
  })

  it('Verifica se as informações deixaram de constar no documento', () => {
    cy.get('.sc-eDDNvR li').should('not.contain', nome)
    cy.get('.sc-eDDNvR li').should('not.contain', email)
    cy.get('.sc-eDDNvR li').should('not.contain', telefone)
  })
})