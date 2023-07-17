¿Qué sucedio al usar async y await?
Al usar async/await, podemos escribir el código de manera más sincrónica y legible. Podemos esperar a que las promesas se resuelvan utilizando la palabra clave await, lo que evita el anidamiento excesivo de callbacks y facilita la comprensión del flujo del programa.


¿Qué sucedio al usar el método then()?
Al usar el método then(), podemos encadenar acciones a las promesas para ejecutar código una vez que las promesas se resuelvan o rechacen. En el ejemplo, utilizamos el método then() para manejar la resolución de la función main(), lo que nos permite mostrar un mensaje de finalización o capturar cualquier error que ocurra durante la ejecución.

¿Qué diferencias encontraste entre async, await y el método then()?
La principal diferencia esta  en la forma en que se manejan las promesas y se estructura el código. Con async/await, podemos escribir código más secuencial y parecido a la programación sincrónica, mientras que con el método then(), la ejecución se basa en encadenar callbacks para manejar el resultado de las promesas. async/await ofrece una sintaxis más limpia y legible, pero el método then() sigue siendo útil cuando se trabaja con código antiguo o bibliotecas que utilizan promesas.