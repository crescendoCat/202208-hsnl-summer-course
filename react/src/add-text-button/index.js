/**
 * 這份檔案用於button.html的React部分
 * 掛載在root div上，當按下按鈕時在其中新增一段文字
 * 請不要直接在HTML中引入此檔案，請引入此檔案的編譯結果：
 *     react/assets/add-text-button/index.js
 */

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
	let [textCount, setTextCount] = useState(1);
	let [textList, setTextList] = useState([]);
	const handleClick = () => {
		setTextList([...textList, `text-react-${textCount}`])
		setTextCount(textCount + 1)
	}
	return (
		<>
			<button id="add-text-btn-react" onClick={handleClick}>Add Text Using React</button>
			<div id="text-home-react">
				{
					textList.map((t, index) => <p key={"btn-"+index}>{t}</p>)
				}
			</div>
		</>
	)
}
console.log("react script loaded")
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);