Feature: Footer

  Scenario: El usuario ve los nombres del equipo en el footer
    Given el usuario navega a la home
    Then debería ver el texto "Javier Moyano Vizcaino" en el footer
    And debería ver el texto "Rubén Rabanedo Aldonza" en el footer
    And debería ver el texto "Adrián Sanz Contreras" en el footer
    And debería ver el texto "Antonio Serrano Fernández" en el footer
    And debería ver el texto "Jon Zarate Martínez" en el footer
