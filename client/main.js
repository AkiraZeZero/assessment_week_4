const baseURL = `http://localhost:4000/api/`;

const complimentBtn = document.getElementById("complimentButton");
const getCompliment = () => {
  axios.get(`${baseURL}compliment/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");
const getFortune = () => {
  axios.get(`${baseURL}fortune/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
fortuneBtn.addEventListener("click", getFortune);

const tacoBtn = document.getElementById("taco");
const getTaco = () => {
  axios.get(`${baseURL}taco/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
tacoBtn.addEventListener("click", getTaco);

const postTaco = (body) =>
  axios
    .post(`${baseURL}taco`, body)
    .then((req, res) => {
      console.log("body", body);
      console.log(req.data);
    })
    .catch((err) => console.log(err));

function submitHandler(e) {
  e.preventDefault();
  let taco = document.querySelector("#tacoText");
  let bodyObj = {
    taco: taco.value,
  };
  postTaco(bodyObj);
  taco.value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", submitHandler);

const acnhBtn = document.getElementById("ACNH");
const getAcnh = () => {
  axios.get("http://localhost:4000/api/acnh/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
acnhBtn.addEventListener("click", getAcnh);

const postAcnh = (body) =>
  axios
    .post(`${baseURL}acnh`, body)
    .then((req, res) => {
      console.log("body", body);
      console.log(req.data);
    })
    .catch((err) => console.log(err));

function onClickHandler(e) {
  e.preventDefault();
  let acnh = document.querySelector("#acnhText");
  let bodyObj = {
    acnh: acnh.value,
  };
  postAcnh(bodyObj);
  acnh.value = "";
}
const form2 = document.querySelector("#acnhForm");
form2.addEventListener("click", onClickHandler);
