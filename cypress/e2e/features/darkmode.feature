Feature: Modo oscuro

  Scenario: El usuario activa el modo oscuro
    Given el usuario navega a la home
    When el usuario pulsa el botón de modo oscuro
    Then el fondo de la página debería ser oscuro
    And el icono del modo oscuro debería iluminarse en amarillo al pasar el ratón