import hyRequest from "..";

export function getHomeDataPrice() {
    return hyRequest.get({
        url:"/home/goodprice"
    })
}

export function getHomeHighScore() {
    return hyRequest.get({
        url:"/home/highscore"
    })
}

export function getHomeDiscount() {
    return hyRequest.get({
        url:"/home/discount"
    })
}