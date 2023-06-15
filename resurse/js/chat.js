io.on("connection", (socket) => {  
    console.log("Conectare!");
	//if(!conexiune_index)
	//	conexiune_index=socket
    socket.on('disconnect', () => {conexiune_index=null;console.log('Deconectare')});
});