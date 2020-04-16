export function SendData(ADDRESS, DATA) {
    let socket = new WebSocket('ws://' + ADDRESS);
    console.log("[Communications] : Opening communications")
    
    socket.onopen = function (e) {
        socket.send(DATA);
        console.log("[Communications] : Sent data successfully")
        socket.close();
    };
    socket.onclose = function (event) {
        console.log("[Communications] : Closed communications")
    };
}