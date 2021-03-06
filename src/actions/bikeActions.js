import BIKES from "../constants/bikes";

export function createBike(payload) {
    return {
        type: BIKES.CREATE,
        payload
    };
}
export function destroyBike(index, bikeHash) {
    return {
        type: BIKES.DESTROY,
        index: index,
        hash: bikeHash
    };
}
export function uploadNewBikeToIPFS(bike) {
    return {
        type: BIKES.UPLOAD_TO_IPFS,
        payload: bike
    };
}
export function uploadModifiedBikeToIPFS(bikeInfo, index) {
    return {
        type: BIKES.UPLOAD_MODIFIED_TO_IPFS,
        payload: {bikeInfo: bikeInfo, index: index}
    };
}
export function transferBike(payload) {
    return {
        type: BIKES.TRANSFER,
        payload
    };
}
export function initUserBikes(payload) {
    return {
        type: BIKES.USER_INIT,
        payload
    };
}
export function initNetworkBikes(payload) {
    return {
        type: BIKES.NETWORK_INIT,
        payload
    };
}
export function rentBike(payload) {
    return {
        type: BIKES.RENT_BIKE,
        payload
    };
}
export function returnBike(payload) {
    return {
        type: BIKES.RETURN_BIKE,
        payload
    };
}
export function adjustBikePrice(payload) {
    return {
        type: BIKES.ADJUST_BIKE_PRICE,
        payload
    };
}
export function cancelAdjustBikePrice(payload) {
    return {
        type: BIKES.CANCEL_ADJUST_BIKE_PRICE,
        payload
    };
}
export function changeBikeStatus(payload) {
    return {
        type: BIKES.CHANGE_BIKE_FORENT_STATUS,
        payload
    };
}
export function finishReturnBike() {
    return {
        type: BIKES.FINISH_RETURN_BIKE,
    };
}
