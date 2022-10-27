// SetTimeOut function to create countdown

// Creating h1 element

const h1Ele = document.createElement("h1");
h1Ele.style.textAlign = "center";
h1Ele.style.marginTop = "35vh";

document.body.append(h1Ele); //appending h1 Element to the body of the document

// Countdown using SetTimeOut Callback Hell

setTimeout(() => {
  h1Ele.innerText = "10";
  setTimeout(() => {
    h1Ele.innerText = "9";
    setTimeout(() => {
      h1Ele.innerText = "8";
      setTimeout(() => {
        h1Ele.innerText = "7";
        setTimeout(() => {
          h1Ele.innerText = "6";
          setTimeout(() => {
            h1Ele.innerText = "5";
            setTimeout(() => {
              h1Ele.innerText = "4";
              setTimeout(() => {
                h1Ele.innerText = "3";
                setTimeout(() => {
                  h1Ele.innerText = "2";
                  setTimeout(() => {
                    h1Ele.innerText = "1";
                    setTimeout(() => {
                      h1Ele.innerText = "Happy Independence Day";
                      h1Ele.style.color = "green";
                      h1Ele.style.fontSize = "100px";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
