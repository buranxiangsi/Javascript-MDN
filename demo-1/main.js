const para = document.querySelector('p')
para.addEventListener('click', updateName)
function updateName() {
    let name = prompt('输入名字')
    para.textContent = '玩家：' + name
}