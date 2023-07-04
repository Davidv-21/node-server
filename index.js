const readline = require('readline');

// Crea una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  rl.question('Introduce el indicador de la tarea: ', (indicator) => {
    rl.question('Introduce la descripción de la tarea: ', (description) => {
      const task = {
        indicator,
        description,
        completed: false
      };
      tasks.push(task);
      console.log('Tarea añadida con éxito.');
      showMenu();
    });
  });
}

// Función para eliminar una tarea
function deleteTask() {
  if (tasks.length === 0) {
    console.log('La lista de tareas está vacía.');
    showMenu();
    return;
  }

  rl.question('Introduce el índice de la tarea que deseas eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('El índice de tarea es inválido.');
    }
    showMenu();
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  if (tasks.length === 0) {
    console.log('La lista de tareas está vacía.');
    showMenu();
    return;
  }

  rl.question('Introduce el índice de la tarea que deseas marcar como completada: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea completada con éxito.');
    } else {
      console.log('El índice de tarea es inválido.');
    }
    showMenu();
  });
}

// Función para mostrar la lista de tareas
function showTasks() {
  console.log('--- Lista de Tareas ---');
  tasks.forEach((task, index) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${index}. ${status} ${task.indicator}: ${task.description}`);
  });
  console.log('------------------------');
}

// Función para mostrar el menú de opciones
function showMenu() {
  console.log('\n--- Menú ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Elige una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        showMenu();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Inténtalo de nuevo.');
        showMenu();
        break;
    }
  });
}

// se Iniciara el programa mostrando el menú de opciones
showMenu();
