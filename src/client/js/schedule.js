const form = document.getElementById("kokuForm");

const handleSubmit = async (event) => {
  event.preventDefault();

  const weekdayNick = form.querySelector("#nickname");
  const weekdayChecked = form.querySelectorAll(".weekday-chk");
  const weekdayStart = form.querySelectorAll(".weekday-start");
  const weekdayEnd = form.querySelectorAll(".weekday-end");
  const weekdayEtc = form.querySelector(".weekday-etc");
  let weekday = [];
  let start = [];
  let end = [];

  weekdayChecked.forEach((element) => {
    if (element.checked === true) {
      weekday.push(1);
    } else {
      weekday.push(0);
    }
  });

  weekdayStart.forEach((element) => {
    start.push(element.value);
  });

  weekdayEnd.forEach((element) => {
    end.push(element.value);
  });

  const nickname = weekdayNick.value;
  let etc = " ";
  if (weekdayEtc.value) {
    etc = weekdayEtc.value;
  }

  const response = await fetch(`/additem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname, weekday, start, end, etc }),
  });

  if (response.status === 200) {
    alert("성공");
  }
};

form.addEventListener("submit", handleSubmit);
