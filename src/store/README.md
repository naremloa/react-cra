# Redux, Redux Toolkit

這邊提供了主要的三種建立 `Redux` 的寫法。由於 `ts` 的類型限制，暫不做動態替換，可直接在 `index.ts` 內自由切換。

## connected-react-router

1. 使用後會在 `Redux DevTool` 裡面看到，每次頁面跳轉，都會附帶有重複兩次的 `dispatch` 的問題。導致出現這個的原因是 `React.StrictMode`

1. `history` 需要鎖住在 v4 版本。升上 v5 會有報錯 [issue](https://github.com/ReactTraining/history/issues/803)