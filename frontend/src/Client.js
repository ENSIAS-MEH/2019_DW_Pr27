export default class Client {

    creatures() {
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/creatures/");
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let objectified = JSON.parse(raw);
                resolve(objectified);
            }
            request.send();
        });
        
        return result;
    }
}