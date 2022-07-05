## El primer cmd que vamos utilizar posicionados en la raiz de nuestro proyecto es:

**git init**

Este comando inicializa mi repositorio

**git status**

Nos va a dar información, sobre los commit, sobre la rama en la que estamos posicionados.

También tenemos un mensaje de que a estos archivos no se le esta dando seguimiento:

Untracked files:
(use "git add <file>..." to include in what will be committed)

    01-bases/
    cmd-git-config.md
    git-cmd-projects.md

**git add .**

Podemos añadir todos los archivos que no estan trackeados o sincronizados con nuestro repositorio.

Podemos ver como todos los archivos están listos para que se tome una fotografía.

**git reset nameFile**

Ese archivo que nombramos ya no es parte del stage, lo saca del stage.

**git commit -m "nombre primer commit"**

Sirve para tener un registro un historial de nuestros cambios del repositorio, con en registro podemos viajar en tiempo y ver que como
era nuestro proyecto en ese punto.

Si aplicamos este comando podemos ver que que el arbol dtrabajo esta limpio.

Lo importante que ahora tenemos esa fotografía o registro que es el commit.

**git log**

Podemos ve el status o resumen de nuetros commit.

## Branch

**git branch -- master main**

cambia el nombre de la rama

**git checkout -- .**

Re-construye el proyecto a como estaba en el ultimo commit.
Re-construye Los directorios borrados.

**git config --global init.defaultBranch main**

Configura a nivel global por defecto que el nombre de la rama sea de main.
Vamos a notar con esto que automaticamente vamos estar trabajando en la rama main al aplicar el
comando **git branch**

# añadir file: puesta en escena y commits

**git add .**

Con este comando digo a todos los archivos preparalos para una fotografía.
Podemos notar que esta añadiendo los archivos los añade
al stage se agrega al lado del file la letra A.
**Quiere decir de que esta añadido al stage**

**git reset README.md**
Con este comando le estamos diciendo que regresa a su estado anterior de Untracked que lo saque del
stage. Podemos notar el contenido sigue igual dentro del archivo.

**git commit -am "Readme actualizado"**

Nos evitamos hacer los 2 pasos de:
git add .  
git commit -m "commit"

- git commit -am con este comando lo aplicamos los 2 comando en 1 solo.
- Este comando funciona solamente si ya le estamos dando seguimiento al archivo.
- Si esta Untracked posiblemente no lo va añadir.

# Log Repositorio

**git log"**

Podemos ver el historial de nuestros gif
El hash es el identificador único de commit

# Diferentes formas de agregar commit al escenario

**git add index.html main.html"**

Agrega 2 archivos para la parte principal de mi web o 2 archivos que quiera dejar en mi stage.
Si luego doy git status puedo ver que estos 2 archivos están en el stage con color verde.

**git add \*.html"**

Este comando agregando el \* agrega todos los archivos con extension .html a mi proyecto.

**git add js/\*.js"**

Agrega todos los archivos con extension .js pero que están dentro de un directorio.

(use "git reset HEAD <file>..." to unstage)

    new file:   js/bootstrap.min.js
    new file:   js/jquery.min.js
    new file:   js/main.js
    new file:   js/popper.js

podemos ver que añade todos los archivos del directorio que especificamos dentro de nuestro proyecto.

**Git no le da seguimiento a las carpetas almenos que le agregamos un archivo dentro**

# Diferentes formas de agregar commit al escenario

.gitkeep - Es un archivo que pesa 0 bytes nos serive para decirle a git que agregue una carpeta al repositorio
pero sin ningún archivo que hemos agregado al stage.

para añadir el archivo .gitkeep debemos aplicar el siguiente comando.

**git add uploads/.gitkeep**

**git add css/**

toma todo lo que se encuentra en sus directorios y sub-directorios que se encuentran dentro de la carpeta css
y lo sube al stage.

# Cambios en los archivos

**git diff**

Puedes ver los cambios anteriores y actuales el archivo

Puede ser que al inicio esta sintaxis no es tan sencilla.
Me muestra el lugar donde cambio.

diff --git a/install/instalaciones.md b/install/instalaciones.md
index 87c8a79..8d29750 100644
--- a/install/instalaciones.md
+++ b/install/instalaciones.md
@@ -3,5 +3,5 @@
Seguir estos pasos:

```
-npm install
+yarn install
```

El problema de git diff: es muy difícil de leer

**git diff --staged**

Para ver lo que esta en el stage

## source control

Si veo el **source control** puedo ver los cambios igual pero de una forma visual mas amigable
podemos ver como esta quedando el archivo final.

## Actualizar mensaje de commit

Hay veces donde damos enter a nuestro commit por equivocación esto podemos solucionarlo, si aplicamos
git log podemos ver que esta ese último commit por error.

Como lo arreglo:
Hay varias formas comencemos con la mas sencilla:

**git commit --amend -m "nuevo mensaje"**

Podemos escribir nuestro nuevo mensaje en las comillas, podemos comprobar esto con git log,

- Recordemos que esto commit se aplica para el ultimo mensaje agregado.

Que pasa si olvidamos de agregar algunos cambios a nuestro ultimo commit que deben de ser parte de
de ese último commit, simplemente agregamos la data adicional y guardamos los cambios. Pero nos damos
cuenta que este cambio tiene que ser parte del último pero actualmente esta separado. Hay varias formas
de resolver este inconveniente

**git reset --soft HEAD^**

Estan estas otras posibilidades
--soft --hard --mix

Hay que tener cuidado porque el reset hard si elimina los cambios.

Analizando nuestro comando **git reset --soft HEAD^**

- HEAD está apuntando al último commit -> si estoy en la rama main quiere decir que este
  es el último commit que se encuentra en la rama main
- En teoría pueden colocar le HASH del commit y para no tener que memorizar el HASH aplicamos el HEAD
  con este singo ^ me mueve al commit antes de HEAD
- Aplicamos git status y vemos que tenemos modificaciones en archivo que estaba en el stage
- Aplicamos git log y vemos que ya no aparece el último commit si no el anterior a ese, estoy en ese punto anterior
