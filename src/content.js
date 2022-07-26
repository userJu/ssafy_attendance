// // alert("hello");
// const time = new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());
// const Hours = time.getHours();
// const Minutes = time.getMinutes();

// // console.log(Hours, Minutes);
// // if (Hours === 13 && Minutes >= 30) {
// //   alert(Hours, Minutes);
// // } else if (Hours === 18 && Minutes === 3) {
// // }

// // 메시지를 보낸다.
// chrome.runtime.sendMessage({ hours: Hours }, async function (response) {
//   console.log(response);
// });

const sendMessageToCurrentPage = (name, message) => {
  console.log(name, message);
  chrome.runtime.sendmessage({ name: name, message: message });
};

// const isAttentionTIme = () => {
//   chrome.tabs.query({ active });
// };

const interval = () => {
  setInterval(() => {
    sendMessageToCurrentPage("firstMessage", "Hi Content Script!");
  }, 2000);
};
Interval();
