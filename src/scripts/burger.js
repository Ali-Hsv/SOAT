export function burgerClick(){
    document.getElementById('burger').addEventListener('click', ()=>{
        document.getElementById('burger-menu').classList.remove('hidden');
        document.getElementById('burger-menu').classList.add('fixed');
    });
}

export function backClick(){
    document.getElementById('back').addEventListener('click', ()=>{
        document.getElementById('burger-menu').classList.remove('fixed');
        document.getElementById('burger-menu').classList.add('hidden');
    });
}