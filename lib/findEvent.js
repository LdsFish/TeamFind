var M = module.exports = {}

var db = [
    { "name": "跨欄比賽", "time": "20170101", "loc": "金門大學" },
    { "name": "新生接機", "time": "20171231", "loc": "金門機場" }
]

M.findEvent = function (s) {
    var time = s.substr(0, 8)
    var loc = s.slice(8)
    for (i = 0; i < db.length; i++) {
        if (time == db[i].time) {
            if (loc == db[i].loc) {
                return (
                    db[i].name+', '+db[i].time+', '+db[i].loc)
            }
            else return ('此地點找不到任何活動，但這個時間'+db[i].loc+'有'+db[i].name+'的活動')
        }
        else return ('這個時間找不到任何活動')
    }
}

console.log(M.findEvent('20170101金門大學'))
// console.log(M.findEvent('20170101金門賭場'))
// console.log(M.findEvent('20170807金門機場'))