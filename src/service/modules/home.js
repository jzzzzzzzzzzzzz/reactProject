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

export function getHomeLongFor() {
    return hyRequest.get({
        url:"/home/longfor"
    })
}
export function getHomePlusData() {
    return hyRequest.get({
        url:"/home/plus"
    })
}