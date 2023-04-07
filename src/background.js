// // 实现浏览器扩展的右键菜单事件的callback,打印选择的内容
import nlp from 'compromise'

let contextMenuItem = {
  "id": "workTime",
  "title": "WorkTime",
  "contexts": ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "workTime") {
    let doc = nlp(info.selectionText)
    const taggedWords = doc.out('tags');
    console.log(taggedWords);
  }
});
