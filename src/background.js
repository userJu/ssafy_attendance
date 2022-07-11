// function sayHello() {
//   alert("hello, world back");
// }
// window.onload = sayHello;

// let open = true;

// function handleMessage(request) {
//   console.log(request);
//   alert("background");

// chrome.storage.sync.set({ Hours, Minutes });
// console.log("Default background color set to %cgreen", `color:${hours}`);
// if (Hours === 16) {
//   console.log(Hours, Minutes);
// } else if (Hours === 18 && Minutes === 3) {
// }
// }

// chrome.runtime.onMessage.addListener(handleMessage);

let loder;

function startLoader() {
  loader = setInterval(async () => {
    console.log("지금시간은?");
  }, 2000);
}

function stopLoader() {
  clearInterval(loader);
  loader = null;
}

startLoader();
