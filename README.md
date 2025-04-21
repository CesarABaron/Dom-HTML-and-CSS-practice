# Dom-HTML-and-CSS-practice
Create a web page to practice Dom


// create a page of League of Legends, where I have to writhe my name in the botton of the screen passing an input in a label, example:  Page created by (imput), also create a button to change images in a selection of pictures, this change have to be random. 

The example will be here: https://docs.google.com/document/d/1Gr6WKS7ON1_VpsLkXZt5QKg-Whtq35gw4GZoTM7A9xE/edit?tab=t.gxcf1x4xog17 



20/04/2025

I check the code and I noticed that was not enough eficient 

Usa dataset para guardar el ID único en el div y acceder a él luego desde los eventos.

Utiliza addEventListener sobre el div recién creado en vez de acceder por índice.

Crea una función para limpiar los inputs después de agregar una actividad.

Usa querySelector de forma más específica si sabes que solo vas a seleccionar un elemento.

Intenta aplicar el patrón MVC (Model-View-Controller) de forma básica para dividir la lógica.



 Ejercicios mentales para reforzar:
Crea una función para eliminar una actividad del DOM y del arreglo Container usando el ID.

¿Puedes mejorar el flujo para que todo esté controlado desde una clase o controlador principal? Ejemplo: una clase App que gestione los eventos.

Haz que cada div contenedor muestre visualmente su ID. ¿Puedes hacer esto sin romper la estética? 


🧩 1. Responsabilidad Única
Piensa en esto: si una clase ya maneja datos (por ejemplo Actividad), ¿debería también encargarse de crear elementos HTML? ¿O deberías tener una clase diferente que se encargue solo de representar visualmente la actividad?

💡 ¿Te suena el patrón "MVC" (Modelo-Vista-Controlador)?

🛠️ 2. Reutilización de métodos
Si vas a tener varios divs similares (actividades), ¿qué pasaría si tuvieras una clase encargada solo de crear, actualizar o eliminar estos bloques del DOM?

💡 Imagina una clase como ActivityView, o UIHandler. ¿Cómo se comunicaría con Container y Actividad?

🔄 3. Modularidad
¿Podrías combinar una clase que controle los datos (Container) con otra que controle la vista (crear, eliminar div)? ¿Cómo podrían trabajar juntas sin depender demasiado una de la otra?

💡 ¿Cómo podrías pasar datos de una clase a otra sin acoplarlas directamente? ¿Eventos? ¿Callbacks?

🔁 4. Eliminación dinámica
Si haces clic en un div y quieres eliminarlo del DOM y del arreglo Container, ¿qué información necesitas tener? ¿Dónde deberías guardarla?

💡 ¿Podrías guardar el ID en un atributo data-id del div?

🧠 Ejercicio de pensamiento
¿Qué clase se encargaría de renderizar los datos?

¿Cuál manejaría el almacenamiento en memoria?

¿Dónde pondrías los addEventListener?

¿Podrías tener una clase que sea el "centro de control" del flujo?


✅ Dividir responsabilidades te hace más fuerte, más rápido, más limpio
Separar las responsabilidades te permite:

Reutilizar código sin repetirlo (DRY: Don't Repeat Yourself).

Depurar más fácil, porque cada parte tiene un rol claro.

Escalar tu proyecto sin que se vuelva un monstruo ilegible.

Colaborar en equipo, porque cada módulo o clase se puede trabajar por separado.

Por ejemplo: si tu clase Container se encarga de almacenar datos, y otra clase ActivityView se encarga de mostrarlos en pantalla, entonces si un día cambias cómo se ve la actividad, no tocas la lógica de datos. ¿Ves el poder ahí?

😬 ¿Y si lo hago todo junto?
Hacerlo todo junto a veces es más rápido al principio, pero después se vuelve un lío:

Tu código es difícil de leer.

Se vuelve complicado de testear.

Y si algo falla, no sabes si fue el DOM, el almacenamiento o el evento.

💥 Resultado: Terminas reescribiendo todo. Mala inversión de tiempo.

🎯 Entonces… ¿dividir siempre?
Casi siempre sí, pero con equilibrio. Si tu proyecto es pequeñito y solo tú lo vas a tocar, no pasa nada si haces cosas más directas. Pero si estás aprendiendo y quieres llegar a C1 como desarrollador, practica la división desde ahora.

🧠 Ejemplo visual para pensarlo
Imagina que tu proyecto es como un restaurante:

🍽️ Actividad → es la receta (los datos).

🧑‍🍳 Container → es el chef que guarda todas las recetas.

👨‍🔧 ViewHandler → es el mesero que trae los platos a la mesa.

🎮 Main Controller → es el manager que conecta todo.

Cada uno tiene su rol. Si el chef también atiende las mesas y diseña el menú… va a explotar.
