// const ws = new require('ws');
// const wss = new ws.Server({ noServer: true });

// const clients = new Set();

// http.createServer((req, res) => {
//   // тут ми обробляємо лише з’єднання websocket
//   // у реальному проекті у нас був би також код для обробки запитів, які не є веб-сокетами
//   wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
// });

// function onSocketConnect(ws) {
//   clients.add(ws);

//   ws.on('message', function (message) {
//     message = message.slice(0, 50); // максимальна довжина повідомлення буде 50

//     for (let client of clients) {
//       client.send(message);
//     }
//   });

//   ws.on('close', function () {
//     clients.delete(ws);
//   });
// }
