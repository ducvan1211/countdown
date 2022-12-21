let endDay = new Date("01/01/2023 00:00:00").getTime();

let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDay - now;
  let day = Math.floor(distance / (24 * 60 * 60 * 1000));

  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let munite = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let second = Math.floor((distance % (60 * 1000)) / 1000);

  //   console.log(second);
  //   console.log(document.getElementById("day"));
  document.getElementById("day").innerText = day;
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = munite;
  document.getElementById("second").innerText = second;
  if (distance <= 0) {
    clearInterval(check);
  }
}, 1000);
