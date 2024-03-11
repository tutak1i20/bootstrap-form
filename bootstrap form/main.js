let userInfo = [
    {
        userID: 'sdasd',
        userName: 'Darek',
        userCity: 'Rudziniec',
        userAge: '19'
    },
    {
        userID: 'sgdfjghhfgg',
        userName: 'Bartek',
        userCity: 'Pyskowice',
        userAge: '22'
    },
    {
        userID: 'jkfgfhhj',
        userName: 'Kamil',
        userCity: 'Gliwice',
        userAge: '43'
    },
    {
        userID: 'asfsdsd',
        userName: 'Pablo',
        userCity: 'Zabrze',
        userAge: '17'
    },
]

const userName = document.querySelector('#name');
const userCity = document.querySelector('#city');
const userAge = document.querySelector('#age');
const addBtn = document.querySelector('#addBtn');
const form = document.querySelector('form');
const list = document.querySelector('#list');


userInfo.forEach(element =>{
    const li = document.createElement('li')
    const btn = document.createElement('button')
    li.innerHTML = `<span> <strong>${element.userName}</strong> w wieku <strong>${element.userAge}</strong> z <strong>${element.userCity}</strong> </span>`;
    li.classList.add('list-group-item')
    btn.classList.add('btn', 'btn-outline-danger')
    btn.innerHTML = "X";
    li.append(btn)
    list.append(li)
});

addBtn.addEventListener('click', evt => {

    let person = {
        userName: userName.value,
        userCity: userCity.value,
        userAge: userAge.value
    }
    userInfo.unshift(person)
    list.innerHTML = ""

    userInfo.forEach(element =>{
        const li = document.createElement('li')
        const btn = document.createElement('button')
        li.innerHTML = `<span> <strong>${element.userName}</strong> w wieku <strong>${element.userAge}</strong> z <strong>${element.userCity}</strong> </span>`;
        li.classList.add('list-group-item')
        btn.classList.add('btn', 'btn-outline-danger')
        btn.innerHTML = "X";
        li.append(btn)
        list.append(li)
    });
});
