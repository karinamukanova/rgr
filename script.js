function showModal(messageText, buttonText) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';

    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName ('button')[0];
    button.innerHTML = buttonText;

    document.body.style.overflow = 'hidden';
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}
function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    setTimeout(function() {
        modal.style.visibility = 'hidden';
    }, 350); 
    modal.style.opacity = '0';

    document.body.style.overflow = 'auto';
    let overlay = document.getElementsByClassName('overlay')[0];
    setTimeout(function() {
        overlay.style.visibility = 'hidden';
    }, 200);

}
function notReadyAlert(event) {
    showModal('Sorry, not ready yet!<br>Извините, ещё не готово!');
    event.preventDefault();
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'Кабель для аудио') {
        productNumber = 19;
    } else if (name == 'Мышь') {
        productNumber = 0;
    } else if (name == 'Монитор') {
        productNumber = 1;
    } else if (name == 'Клавиатура') {
        productNumber = 2;
    } else if (name == 'Блок питания') {
        productNumber = 3;
    } else if (name == 'Наушники') {
        productNumber = 4; 
    } else if (name == 'Колонка') {
        productNumber = 5; 
    } else if (name == 'Камера') {
        productNumber = 6; 
    } else if (name == 'Коврик для мыши') {
        productNumber = 7; 
    } else if (name == 'Кабель питания') {
        productNumber = 8; 
    } else if (name == 'Ноутбук') {
        productNumber = 9; 
    } else if (name == 'Материнская плата') {
        productNumber = 10; 
    } else if (name == 'Внешний диск') {
        productNumber = 11; 
    } else if (name == 'Сумка для ноутбука') {
        productNumber = 12; 
    } else if (name == 'Микрофон') {
        productNumber = 13; 
    } else if (name == 'USB-устройство') {
        productNumber = 14; 
    } else if (name == 'Видео-карта') {
        productNumber = 15; 
    } else if (name == 'Офисное ПО') {
        productNumber = 16; 
    } else if (name == 'Флешка') {
        productNumber = 17; 
    } else if (name == 'Презентер') {
        productNumber = 18;       
    } else {
        alert('Товар не найден');
    }
    
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'pink';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: 'MAP.html', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: 'akcii.html', text: 'Акции'},
        {href: '', text: 'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });

    generateMenu();
}