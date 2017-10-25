/* eslint-disable no-undef */
var expect = require('chai').expect

describe('findEvent', function () {
    var M = require('../lib/findEvent')

    describe('findEvent', function () {
        it("findEvent('20170101金門大學')).to.equal('跨欄比賽, 20170101, 金門大學')", function () {
            expect(M.findEvent('20170101金門大學')).to.equal('跨欄比賽, 20170101, 金門大學')
        })

        it("findEvent('20170101金門賭場')).to.equal('此地點找不到任何活動，但這個時間金門大學有跨欄比賽的活動')", function () {
            expect(M.findEvent('20170101金門賭場')).to.equal('此地點找不到任何活動，但這個時間金門大學有跨欄比賽的活動')
        })

        it("findEvent('20170807金門機場')),to.equal('這個時間找不到任何活動')", function () {
            expect(M.findEvent('20170807金門機場')).to.equal('這個時間找不到任何活動')
        })
    })
})