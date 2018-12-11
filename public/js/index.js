    //initiates a request by calling it
    //A request is being made from the client to the server
    //to open up a web socket and keep a connection open.
    var socket = io();

    socket.on('connect', function () {
      console.log('Connected to Server');

      socket.emit('createMessage', {
        from: 'Michael',
        text: 'Hey. This is Michael.'
      });
    });

    socket.on('disconnect', function () {
      console.log('Disconnected to Server');
    });
    //event listener
    socket.on('newMessage', function (message) {
      console.log('New message', message);
    });