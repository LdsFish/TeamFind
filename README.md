# 活動尋找器
> 輸入時間與地點，如果有找到活動則顯示名稱，否則則會提示沒有活動
* 輸入格式：`<時間><地點>`
* 輸入範例：`20171010金門大學`

## 安裝
```
git clone https://github.com/istar0me/TeamFind.git
cd TeamFind
npm install
```

## 測試
```
mocha
```

## 範例
資料庫中有這幾筆資料
```json
[
    { "name": "跨欄比賽", "loc": "金門大學", "time": "20170101" },
    { "name": "新生接機", "loc": "金門機場", "time": "20171231" }
]
```
此時若輸入`20170101金門大學`，將會輸出以下內容：<br>
註：原先有針對內容排版，但為除錯方便改成一行的輸出
```
// 輸入20170101金門大學
跨欄比賽, 20170101, 金門大學
```
就算輸入的地點沒有活動，但若其他地點有活動，系統將會活動名稱與地點：
```
// 輸入20170101金門賭場
此地點找不到任何活動，但這個時間金門大學有跨欄比賽的活動
```
如果完全沒有活動，系統會也會告知
```
// 輸入20170807金門機場
這個時間找不到任何活動
```