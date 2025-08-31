import gsap from "gsap";

export function burgerClick(){
    document.getElementById('burger').addEventListener('click', ()=>{
        document.getElementById('burger-menu').classList.remove('hidden');
        document.getElementById('burger-menu').classList.add('fixed');
        document.querySelector('body').classList.add('modal-open');
        gsap.fromTo('#burger-menu-nav',
            {
                opacity: .5,
                x: 500,
            },
            {
                opacity: 1,
                x: 0,
                duration: .5,
                ease: "bonuce.in"
            }
        );
        gsap.to('#block-wallpaper',{
            opacity: 1,
            duration: .2,
        });
    });
}

export function backClick(){
    document.getElementById('back').addEventListener('click', ()=>{
        gsap.fromTo('#burger-menu-nav',
            {
                opacity: 1,
                x: 0,
            },
            {
                opacity: 1,
                x: 400,
                duration: .5,
                ease: "bonuce.in"
            }
        );
        gsap.to('#block-wallpaper',{
            opacity: 0,
            duration: .2,
        });
        setTimeout(()=>{
            document.getElementById('burger-menu').classList.remove('fixed');
            document.getElementById('burger-menu').classList.add('hidden');
            document.querySelector('body').classList.remove('modal-open');
        }, 390);
    });
    
}