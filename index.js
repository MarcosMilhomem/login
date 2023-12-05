const mode = document.getElementById('mode-icon');
const look = document.querySelector ('#look')

mode.addEventListener ('click', () => {
    const form = document.querySelector('#login-form')

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove ('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return 
    }
        
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
    
});

look.addEventListener ('click', () => {
    if (look.classList.contains('fa-eye')) {
        look.classList.remove('fa-eye')
        look.classList.add('fa-eye-slash')

        return;
    }
    look.classList.add('fa-eye');
    look.classList.remove('fa-eye-slash');
});

function lookSlash() {
    const password = document.querySelector('#password')
    const modepassword = password.getAttribute('type')

    if (modepassword === 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
};



