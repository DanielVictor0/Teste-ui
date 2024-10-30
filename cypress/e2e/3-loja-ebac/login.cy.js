  /// <reference types="cypress"/>

describe('Funcionalidade: Login',  () => {
     
     
      beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

      });

      afterEach(() => {
         cy.screenshot()  //serve para tirar print dos testes
      });
    
    it('Deve fazer login com sucesso', () => {
      cy.get('#username').type('victor.0418@teste.com')
      cy.get('#password'). type('Victorteste123')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, victor.0418 ')



    })
    

     it('deve exibir uma mensagem de erro ao inserir usuário inválido ', () => {
      cy.get('#username').type('victor.teste@teste.com')
      cy.get('#password'). type('Victorteste123')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
      cy.get('.woocommerce-error').should('exist')
      

     });


     it('deve exibir uma mensagem de erro ao inserir senha invalida ', () => {
      cy.get('#username').type('victor.0418@teste.com')
      cy.get('#password'). type('victor00')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail victor.0418@teste.com está incorreta. Perdeu a senha?')
      cy.get('.woocommerce-error').should('exist')
  
});



  })