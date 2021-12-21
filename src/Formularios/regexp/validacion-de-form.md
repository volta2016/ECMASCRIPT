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

# form in HTLM

Si doy enviar en mi formulario el navegador hacer un comportamiento por defecto, el comportamiento por defecto
es el método get, quiere decir que esta enviando la información a través del método get.

por eso en la url aparece toda la información, jamas se hace esto para un metodo login que por el método get nos aparasca la contraseña
en la url pesima práctica.

ademas desaparecen los datos y parece los valores por en la url por ejemplo el userName

**required**

Quiere decir que los campos deben ser obligatorios, son validaciones de HTML5

**minlength="3"**

Validad la cantidad minima de texto, corresponde a campo de tipo texto

**maxlength="10"**

valida un maximo de caracteres

**min**

Valida a un número su cantidad minima

un input de html5 con required no validad el dominio de un correo mientras tenga el caracter @ y cualquier texto lo deja pasar
eso lo debemos validar por medio de js con regex expresiones, email html5 lo hace a medias

para solucionar esto usamos

**pattern**

nos va permitir validar el dominio desde nuestro html5 los con los caracteres de nuestra expresión que valide mail

```html
<input
  class="form-control mb-2"
  name="userEmail"
  placeholder="Ingrese su correo"
  id="userEmail"
  autocomplete="off"
  type="email"
  required
  pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
  title="Ingresa un email válido"
/>
```

esta validacion para solo texto puede ser para un campo de nombre

```html
<input
  class="form-control mb-"
  name="userName"
  placeholder="Ingrese su nombre"
  autocomplete="of"
  id="userName"
  type="text"
  required
  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
  title="Solo letras"
  minlength="3"
  maxlength="10"
/>
```
