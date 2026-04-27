/*
Assincronismo em JavaScript

-Event Loop
-promises
-async/await
-try/catch
*/

//Event Loop
/*
conceito: O Event Loop é um mecanismo que permite que o JavaScript 
execute código de forma assíncrona, mesmo sendo uma linguagem de thread única.
Ele é responsável por gerenciar a execução de tarefas, como callbacks, timers e eventos, 
garantindo que o código seja executado de maneira eficiente e sem bloqueios.
*/

const loginUser = (email, password, callback) => {
    setTimeout(() => {
        console.log('user logged!');
        callback({ email });
    }, 1500);

    console.log("after setTimeout");
}

const user = loginUser("lucascosta@gmail.com", "123456");
console.log({user});