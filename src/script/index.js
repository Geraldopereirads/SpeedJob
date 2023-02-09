let ulMain1 = document.querySelector('.main__list--1');

function createCardsFront(frontEndJobs) {
    

    for (let i = 0; i < frontEndJobs.length; i++) {
        let frontEnd = frontEndJobs[i];

        let li = document.createElement('li');
        li.classList.add("main__list--li--1");


        let divUserBox = document.createElement('div');
        divUserBox.classList.add("main__user--box");

        let spanUser = document.createElement('span');
        spanUser.classList.add(`main__list--user--1`);
        spanUser.innerText = 'G'


        let h3User = document.createElement('h3');
        h3User.classList.add(`main__tittle--h3--1`);
        h3User.innerHTML = frontEnd.title


        let smallUser = document.createElement('small');
        smallUser.classList.add(`main__tittle--small--1`);
        smallUser.innerText = 'Curitiba - Paraná'


        let p = document.createElement('p');
        p.classList.add(`main__paragraph--1`);
        p.innerHTML = frontEnd.descrription


        let divBoxButton = document.createElement('div');
        divBoxButton.classList.add(`box__main--button--1`);

        let button1 = document.createElement('button');
        button1.innerHTML = frontEnd.modality[0]

        let button2 = document.createElement('button');
        button2.innerHTML = frontEnd.modality[1]

        ulMain1.append(li, divUserBox, p, divBoxButton);
        li.append(divUserBox, spanUser, h3User, smallUser, p, divBoxButton, button1, button2)
        divUserBox.append(spanUser, h3User, smallUser);
        divBoxButton.append(button1, button2)

        
    }
}





let ulMain2 = document.querySelector('.main__list--2');

function createCardsBack(backEndJobs) {
    

    for (let i = 0; i < backEndJobs.length; i++) {
        let backEnd = backEndJobs[i];

        let li = document.createElement('li');
        li.classList.add("main__list--li--2");


        let divUserBox = document.createElement('div');
        divUserBox.classList.add("main__user--box-2");

        let spanUser = document.createElement('span');
        spanUser.classList.add(`main__list--user--2`);
        spanUser.innerText = 'G'


        let h3User = document.createElement('h3');
        h3User.classList.add(`main__tittle--h3--2`);
        h3User.innerHTML = backEnd.title


        let smallUser = document.createElement('small');
        smallUser.classList.add(`main__tittle--small--2`);
        smallUser.innerText = 'Curitiba - Paraná'


        let p = document.createElement('p');
        p.classList.add(`main__paragraph--2`);
        p.innerHTML = backEnd.descrription


        let divBoxButton = document.createElement('div');
        divBoxButton.classList.add(`box__main--button--2`);

        let button1 = document.createElement('button');
        button1.innerHTML = backEnd.modality[0]

        let button2 = document.createElement('button');
        button2.innerHTML = backEnd.modality[1]

        ulMain2.append(li, divUserBox, p, divBoxButton);
        li.append(divUserBox, spanUser, h3User, smallUser, p, divBoxButton, button1, button2)
        divUserBox.append(spanUser, h3User, smallUser);
        divBoxButton.append(button1, button2)

        
    }

}

createCardsBack(backEndJobs)
createCardsFront(frontEndJobs)