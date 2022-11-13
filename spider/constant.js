const requestlist = [
    "/",
    "/so.asp?id=1&page=1&pl=hit",
    "/so.asp?id=2&page=1&pl=hit",
    "/so.asp?id=3&page=1&pl=hit",
    "/so.asp?id=4&page=1&pl=hit",
];

const publishList = [
    "Home-html", // 首页
    "Movie-html", // 电影
    "day_comic-html", // 日漫
    "National_comics-html", // 国漫
    "American_comic-html", // 美国漫画
];

const serverObj = new Map(); // 所有数据都在这里

module.exports = {
    requestlist,
    publishList,
    serverObj
}