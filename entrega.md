# Obligatorio 1 FIS - Guitarra para niños
#### Participantes
 - **Alfonso Diaz**
 - **Alejandro Iglesias**

<br><br>

## Elicitación

### Investigar el problema usando técnicas de elicitación adecuadas para el caso

#### [Brain storm](https://i.imgur.com/8EnojWS.png)

#### Encuesta

##### *Preguntas*

  1. ¿Cómo arrancaste a tocar la guitarra?  <br>
  2. ¿Qué problemas o virtudes tienen las clases presenciales?  <br>
  3. ¿Te hubiese gustado aprender a tocar la guitarra online? ¿Por qué?  <br>
  4. ¿Qué opinas de tener las clases grabadas como videos?  <br>
  5. ¿Qué actividades facilitaban que aprendieras a tocar?  <br>

##### *Respuestas*

Alejo González, 20 años. Va a clase de guitarra desde los 10 años.  <br>

  1. Arranqué a tocar la guitarra porque estaba de moda, todos mis amigos estaban tocando la guitarra o algún instrumento. Después eso pasó, pero yo quede porque me gustaba el rock y me tiraba a tocar un instrumento. Cuando arranqué, empecé con la guitarra acústica en Todo Música porque era una de las escuelas que me quedaba más cerca. Hice un año de acústica y después empecé guitarra eléctrica y seguí 8 o 9 años. <br>
  2. Uno de los problemas que tienen es el traslado, mover la guitarra que es grande, ir en ómnibus te complica. Igualmente, la clase presencial es mejor. Conozco gente que está teniendo clases por Zoom pero los micrófonos de la computadora no son muy buenos, por ejemplo puede pasar que el profesor no escuche algún sonido. El profesor, si es presencial puede ver lo que estás haciendo y corregir más fácilmente, y también transmitir mas fácilmente. También puede haber problemas de delay. La clase presencial tiene de bueno el trato personal sin un intermediario que es la computadora.  <br>
  3. De chico, si, a veces, por un tema de comodidad. Iba caminando y a veces llovía o lo que sea y no estaba bueno. Pero creo que por el tipo de clase que yo tuve, que era mano a mano con un profesor, que era muy amigo, me hubiera perdido de todo ese lado de acercarme más a la persona y conocerla y hacerme amigo, terminábamos haciendo chistes. Ese lado lo perdés, porque online con todos los contratiempos que tenés el online, ese tiempo lo perdés. Lo que tiene el online es que es una especie de intermediario que retrasa un poco el proceso de aprendizaje.  <br>
  4. Si bien el trato no es muy personal, me parece que para la modalidad online es un poco mejor para explicar. Cuando grabás para video te permite hacer ediciones y tenés más tiempo para prepararlo como profesor, tenés más tiempo para preparar el video. No tenés determinadas pérdidas de tiempo, como explicar las cosas 2 o 3 veces si alguien no entiende, la persona va para atrás el video. Pero no creo que puedan ser todas las clases así, porque perdés la parte personal de trabajar en conjunto con el alumno, de mostrarle y ver las cosas que hace acorde a sus problemas, sus dificultades y sus virtudes.  <br>
  5. Tocar todos los días. Me pasaba que era un poco vago, que no practicaba los ejercicios. En un momento empecé a meterle mucho más, con media hora o una hora por día que practicara lo que dimos en clase llegaba lo más bien. Empecé a notar los cambios fuertes ahí. El instrumento no lo aprendés o masterizas sino practicas con bastante constancia. Hay cosas ya más teóricas, que está bueno siempre estar leyendo. Todo guitarrista tiene que interesarse por lo que se está haciendo ahora y lo que se hizo antes. A vos te puede gustar un género determinado, y capaz no te gusta nada un género, pero hay guitarristas buenos en todos lados que tenés que escucharlos si es que realmente te gusta perfeccionar tu sonido.


Martin Bajac, 20 años.  <br>

  1. Me enseñó mi padre.  <br>
  2. El problema es que no puedo concentrarme bien a través de una pantalla, pero la virtud es que no pierdo tiempo en traslado. <br>
  3. Por un lado, sí, ya que tiene varias ventajas donde resultaría más cómodo, por otro lado, hay cosas prácticas y teóricas con la guitarra que se pueden ver mejor con la presencialidad. Llega un punto en donde se necesita ver que es lo que el profesor está explicando/mostrando y es mejor la presencialidad en este sentido. <br>
  5. Es lo mejor. Creo que tener un backup de las clases es esencial, ya sea para hacer un repaso, terminar de sacar notas o estudiar. <br>
  6. Creo que lo que más me ayudó a tocar fue escuchar música y tocar sobre ella, al igual que tratar de aprender el sonido de diferentes notas para pasarlo a la guitarra. Otra actividad fue mirar la tele mientras practicas tocar. <br>


### Modelar a los usuarios del sistema (perfiles, tareas y contexto)  <br>

#### Alumno  <br>

El alumno es el usuario que usa la app para aprender a tocar la guitarra. Las tareas que realiza son ver las clases y elegir a que clase asistir. También puede ser que resuelva ejercicios propuestos por el profesor.  <br>

#### Profesor  <br>

El profesor es el que da las clases de guitarra. Puede subir las clases o darlas en vivo. También puede subir tareas, evaluaciones y notas del curso. Debe poder programar el horario del curso.  <br>

#### Responsable  <br>

El que autoriza el pago de la clase al niño (padre, familiar o cualquier responsable del niño). Puede autorizar el pago de la clase que el alumno eligió. También puede ver el progreso del alumno.  <br>


## Especificación  <br>

### User stories  <br>

***Id: #1*** <br>
***Título: Vincular cuenta con responsable*** <br>

*Narrativa:* <br>
- Como: usuario alumno <br>
- Quiero: vincular mi cuenta con la de mi responsable <br>
- Para: poder registrarme a un curso <br>

*Criterios de aceptación.* <br>
- la cuenta con la que se vincula tiene que existir
- la cuenta con la que se vincula tiene que ser una cuenta "responsable" (tener métodos de pago, ser mayor de edad)

***Id: #2*** <br>
***Título: Registrar curso*** <br>

*Narrativa:* <br>
- Como: usuario profesor <br>
- Quiero: poder crear un curso <br>
- Para: utilizar la plataforma para poder dictar clases online de guitarra, subir evaluaciones, ejercicios y notas del curso <br>

*Criterios de aceptación.*
- no existe otro curso con el mismo nombre

***Id: #3***
***Título: autorizar el pago del curso***

*Narrativa:* <br>
- Como: usuario responsable <br>
- quiero: pagar el curso del niño <br>
- para: que el niño asista a las clases <br>

*Criterios de aceptación.* <br>
- estar registrado a la app <br>
- tener la cuenta vinculada con la del niño y que el niño seleccione un curso al que quiere inscribirse <br>
- tener un método de pago válido <br>


### Use cases

**Título:** Vincular cuenta con responsable. <br>
**ID:** #1. <br>
**Actor:** Usuario Alumno. <br> <br>
**Curso normal:** <br>  <br>

| Acción del actor                                  | Respuesta del sistema                                 |
|---------------------------------------------------|-------------------------------------------------------|
| 1. Ingresar el email del responsable              | 2. -                                                  |
| 3. Presionar el botón "Siguiente"                 | 4. Se envía un email con un código al email ingresado |
| 5. Ingresar el código en el espacio para escribir | 6. -                                                  |
| 7. Presionar el botón "Confirmar"                 | 8. Se vinculan las cuentas                            |

<br>

**Curso alternativo:**<br><br>
**1.1:** El usuario toca el botón volver y vuelve al menú. <br>
**4.1:** El usuario ingreso un email que no esta registrado en la aplicación como responsable y el sistema no envía email y aparece un mensaje de error. El usuario puede volver a ingresar un email.<br>
**8.1:** El usuario ingreso un código incorrecto y no se vinculan las cuentas y aparece un mensaje de error.<br>

<br>

---

<br>

**Título:** Registrar curso. <br>
**ID:** #2. <br>
**Actor:** Usuario Profesor. <br> <br>
**Curso normal:** <br>  <br>

| Acción del actor                                             | Respuesta del sistema                                 |
|--------------------------------------------------------------|-------------------------------------------------------|
| 1. Ingresar el nombre e información del curso                | 2. -                                                  |
| 3. Presionar el botón "Siguiente"                            | 4. Se reserva el nombre del curso                     |
| 5. Elegir método de pago para recibir los pagos por el curso | 6. -                                                  |
| 7. Presionar el botón "Confirmar"                            | 8. Crear el curso y mostrar que se creó en pantalla   |

<br>

**Curso alternativo:**<br><br>
**1.1:** El usuario toca el botón volver y vuelve al menú. <br>
**4.1:** El usuario ingresó un nombre de curso que ya estaba registrado, no se reserva nada y el usuario vuelve al paso 1 otra vez. <br>
**5.1:** EL usuario no tiene métodos de pago registrados, el sistema muestra como agregar un método de pago. <br>
**8.1:** El usuario puso un método de pago que no es válido, le pide que intente con otro y vuelve al paso 5. <br>

<br>

---

<br>

**Título:** Autorizar el pago del curso. <br>
**ID:** #3. <br>
**Actor:** Usuario Responsable. <br> <br>
**Curso normal:** <br>  <br>

| Acción del actor                              | Respuesta del sistema                                                                                                                  |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| 1. Ingresar a "Cursos pendientes"             | 2. Muestra los cursos no activos de los niños vinculados a la cuenta                                                                   |
| 3. Seleccionar curso que se quiere activar    | 4. -                                                                                                                                   |
| 5. Presionar el botón "Siguiente"             | 6. Muestra la información del curso y los métodos de pago. También muestra cuanto sale la suscripción mensual.                         |
| 7. Seleccionar método de pago                 | 8. -                                                                                                                                   |
| 9. Presionar el botón "Confirmar"             | 10. Se activa el curso en la cuenta del niño, se paga el primer mes y queda registrado el método de pago para pagar los próximos meses |

<br>

**Curso alternativo:** <br><br>

**2.1:** No hay ninguna cuenta vinculada o las cuentas vinculadas no tienen cursos pendientes (sin activar la suscripción), se muestra "No hay cursos pendientes" y un botón de volver al menú. <br>
**3.1:** El usuario presiona "Volver" y vuelve al menú. <br>
**7.1:** No hay métodos de pago disponibles. Muestra como agregar uno nuevo. <br>
**10.1:** El método de pago no es válido, vuelve al paso 7. <br>

## Requerimientos

### Requerimientos funcionales

**RF1: Registro de un usuario(alumno)** <br>

*Actor:* Usuario (alumno) <bra>

*Descripción:* El sistema deberá contar con una funcionalidad para que el niño pueda crear un usuario. El sistema deberá recolectar datos como nombre, edad, nacionalidad, dirección, idiomas, nivel de experiencia, entre otros. <br>

*Prioridad:* Alta <br>

---

**RF2: Registro de un usuario(responsable)** <br>

*Actor:* Usuario (Responsable) <br>

*Descripción:* El sistema deberá contar con una funcionalidad para que el responsable pueda crear un usuario. El sistema debe recolectar datos como nombre, edad, nacionalidad, dirección. Deberá verificar también la relación con el usuario niño para así vincular el método de pago al curso correspondiente. <br>

*Prioridad:* Alta <br>

---

**RF3: Seleccionar curso** <br>

*Actor:* Usuario (niño) <br>

*Descripción:* El usuario puede ver una lista de los cursos disponibles y seleccionar uno que le guste. Se podrá filtrar entre distintas características (nivel, género, horario) para que la lista sea más exacta(ver RF5). <br>

*Prioridad:* Alta <br>


---

**RF4: Inscripción a curso** <br>

*Actor:* Usuario (Responsable) <br>

*Descripción:* El sistema debe contar con una funcionalidad para que el responsable puede inscribir a su niño al curso. Para esto se mostrará una lista de los cursos que el niño selecciono (ver RF4). Se validará el método de pago del usuario y en caso de que se confirme se completara la inscripción. <br>

*Prioridad:* Alta <br>

---

**RF5: Filtrar posibles cursos para un usuario determinado** <br>

*Actor:* Sistema <br>

*Descripción:* El sistema deberá contar con una funcionalidad que filtre los posibles cursos disponibles de acuerdo con las características seleccionadas por el usuario. El usuario debe llenar un formulario con preguntas sobre sus preferencias musicales y objetivos. El sistema muestra una lista con posibles cursos que coinciden con las preferencias del usuario. <br>

*Prioridad:* Media <br>

---

**RF5: Dar "like" o "dislike" a los videos tutoriales** <br>

*Actor:* Usuario

*Descripción:* El sistema permite seleccionar "like" o "dislike" en los videos del curso, en caso de que les haya gustado o no. Esta funcionalidad permite dar feedback a los profesores para futuras mejoras. <br>

*Prioridad:* Baja <br>

---

**RF6: Comentar en los videos tutoriales** <br>

*Actor:* Usuario <br>

*Descripción:* El sistema deberá contar con una funcionalidad que permita al usuario comentar en los videos. Este espacio cumpliría el rol de aclaración de dudas y inquietudes de los usuarios, el sistema permite también que el profesor pueda responder a los comentarios de los usuarios. <br>

*Prioridad:* Baja <br>

---

**RF7: Agregar método de pago** <br>

*Actor:* Usuario(responsable y profesor) <br>

*Descripción:* El usuario deberá poder agregar un método de pago. El sistema tiene que validar ese método de pago para que se agregue, y que quede registrado en la cuenta. <br>

*Prioridad:* Alta <br>

---

**RF8: Subir videos de clases** <br>

*Actor:* Usuario (profesor) <br>

*Descripción:* El profesor deberá poder subir videos de clases hasta 500mb a su curso, tendrán que quedar guardados para que los alumnos puedan acceder cuando quieran. <br>

*Prioridad:* Alta <br>

---

**RF9: Transmisión de clases en vivo** <br>

*Actor:* Usuario (profesor) <br>

*Descripción:* El profesor deberá tener la opción de transmitir clases en vivo con la cámara del celular o computadora <br>

*Prioridad:* Alta <br>

---

**RF10: Ver clases en vivo**

*Actor:* Usuario (alumno)

*Descripción:*  el alumno tiene que poder ver clases que se estén transmitiendo en vivo de un curso al cual está inscripto

*Prioridad:* Alta <br>


### Requerimientos No Funcionales

**RNF1:** Primera version de app solo disponible para IOS 10 o superior y Android 11.0 o superior. <br>
**RNF2:** La funcionalidad de la aplicacion y sus funciones solo estaran disponibles mediante conexion a internet. <br>
**RNF3:** La primera version estara desarrollada en JavaScript ES2020 <br>

## Verificación de requerimientos

|                                                             | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 |
|:-----------------------------------------------------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|
|                ¿tiene la prioridad correcta?                |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|              ¿están los usuarios identificados?             |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|              ¿respeta la estructura utilizada?              |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|               ¿tiene una única interpretación?              |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|       ¿está escrito con un nivel de detalle adecuado?       |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|                          ¿es único?                         |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
| ¿hay otro requerimiento que pueda tener conflicto con este? |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|            ¿está dentro del alcance del problema?           |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |
|            ¿puede ser identificado correctamente?           |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí |  sí  |

<br>

---

<br>

## Prototipo (aplicación vista como alumno)

El primer prototipo que se realizó puede verse en este [enlace](https://imgur.com/a/pbcAiVP). <br>

Para recibir feedback más exacto se realizó un [user test](https://marvelapp.com/start-user-test/eKrkvcJZHMD1Sc2uGkWk). El objetivo del test era que el usuario llegue a ver un video de una clase en la cual está inscripto.  <br>

[Grabación de un user test](https://youtu.be/TJm-Cq6h8bw)  <br>

Al ver ese user test y recibir feedback de los participantes, se llegó a la conclusión que el menú no era muy descriptivo, lo que hacía que el usuario hiciese clicks no necesarios entrando a partes de la interfaz que no debía.  <br>

Se modificó las etiquetas de los botones en el menú y algunos títulos para que quedara más intuitivo. Ver el [prototipo 2](https://marvelapp.com/prototype/945dj27) <br>
