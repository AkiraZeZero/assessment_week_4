const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment);


const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune);


const acnhBtn = document.getElementById("ACNH")
const getAcnh = () => {
    axios.get("http://localhost:4000/api/acnh/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
acnhBtn.addEventListener('click', getAcnh);

const tacoBtn = document.getElementById("taco")
const getTaco = () => {
    axios.get("http://localhost:4000/api/taco/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
tacoBtn.addEventListener('click', getTaco);

const inspoBtn = document.querySelector('form')
const postInspration = () => {
    axios.post("https://localhost:4000/api/inspration")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
inspoBtn.addEventListener('submit', postInspration)