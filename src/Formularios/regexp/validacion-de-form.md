# Validación Formularios

- Form validation (opens new window): Antes de enviar datos al servidor, es importante asegurarse de que se completan todos los controles de formulario requeridos, y en el formato correcto.
- Esto se denomina validación de **formulario en el lado del cliente** y ayuda a garantizar que los datos que se envían coinciden con los requisitos establecidos en los diversos controles de formulario.

- La validación en el lado del cliente es una verificación inicial y una característica importante para garantizar una buena experiencia de usuario.
  Sin embargo, ¡la validación en el lado del cliente no debe considerarse una medida de seguridad exhaustiva! Tus aplicaciones siempre deben realizar comprobaciones de seguridad de los datos enviados por el formulario en el lado del servidor.
  Website security

- La validación de formularios incorporada utiliza características de validación de formularios HTML5, Esta validación generalmente no requiere mucho JavaScript. La validación de formularios incorporada tiene un mejor rendimiento que JavaScript, pero no es tan personalizable como la validación con JavaScript.
- La validación con JavaScript se codifica utilizando JavaScript. Esta validación es completamente personalizable, pero debes crearlo todo (o usar una biblioteca).

# HTML5

Esto se realiza mediante el uso de atributos de validación en los elementos del formulario.

- required: (opens new window)Especifica si un campo de formulario debe completarse antes de que se pueda enviar el formulario.

- minlength (opens new window)y maxlength (opens new window): Especifican la longitud mínima y máxima de los datos de texto (cadenas).

- min (opens new window)y max (opens new window): Especifican los valores mínimo y máximo de los tipos de entrada numéricos.

- type: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo de preajuste específico.

- pattern (opens new window): Especifica una expresión regular que define un patrón que los datos que se introduzcan deben seguir.

las validaciones del lado del ciente si pueden ser vulnerables
