import constants from "./constants";

export default class ServerService {
    request(path,params){
        return fetch(constants.REMOTE_API_HOST + path, {
            method: "post",
            body: JSON.stringify(params),
            headers: {
                "content-type": "application/json"
            },
        }).then(function(response) {
            return response.json();
        });
    }

    callApiReplayTx(txData){
        return this.request("/api/relayTx",txData);
    }
    collectToken(payload){
        return this.request("/api/collectToken",payload);
    }
}
