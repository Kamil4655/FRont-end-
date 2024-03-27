const modeBtn = document.querySelector('.color-change-btn-white');
const myBackground = document.querySelector('.light-body');
const myInfo = document.querySelector('.my-info-box');
const myProfession = document.querySelector('.my-section');

// localStorage'tan tema modunu yoxla
const currentMode = localStorage.getItem("mode");
if (currentMode === null) {
    //light modu daimi qalsin eger basqa bir mode yoxdursa
    localStorage.setItem("mode", "light");
} else {
    // Tema moduna göre deyistir
    if (currentMode === "dark") {
        modeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
        modeBtn.className = 'color-change-btn-dark';
        myBackground.className = 'dark-body';
        myProfession.className = 'my-section-dark';
    } else {
        modeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        modeBtn.className = 'color-change-btn-white';
        myBackground.className = 'light-body';
        myProfession.className = 'my-section';
    }
}

// Reng deyisdirme
modeBtn.onclick = () => {
    if (localStorage.getItem("mode") === "light") {
        // Eger tema "light" ise, "dark" ele
        modeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
        modeBtn.className = 'color-change-btn-dark';
        myBackground.className = 'dark-body';
        myProfession.className = 'my-section-dark';
        localStorage.setItem("mode", "dark"); // Tema modunu localStorage'a "dark" olaraq elave et
    } else {
        // Eger  tema "dark" ise, "light" olsun
        modeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        modeBtn.className = 'color-change-btn-white';
        myBackground.className = 'light-body';
        myProfession.className = 'my-section';
        localStorage.setItem("mode", "light"); // Tema modunu localStorage'a "light" olaraq yaddasa ver
    }
};



//Translate my portfolio

const langData = {
    en: {
        nameInfo: ["Gulshan Mukhtar"],
        phoneLocation: ["Phone", "Location", "Baku, Azerbaijan", "Birthay", "Nov 12, 1992", "Download CV"],
        about: ["About", "I'm a Software Developer working in web development from Baku, Azerbaijan. I enjoy solving complex problems.My goal is to reveal your message and identity in the most creative way. I have  coded the websites of many famous brand companies.", "What I DO?"]
    },
    tr: {
        nameInfo: ["Gülşən Muxtar"],
        phoneLocation: ["Telefon", "Lokasiya", "Bakı, Azərbaycan", "Doğum tarixi", "12.11.1992", "CV-ni yüklə"],
        about: ["Haqqımda", " Mən bir proqram inkişaf etdiricisiyəm, Bakıdan, Azərbaycandan veb inkişaf sahəsində çalışıram. Çətin problemləri həll etməyi sevirəm.Məqsədim mesajınızı və şəxsiyyətinizi mümkün qədər yaradıcı şəkildə ortaya qoymaqdır. Bir çox tanınmış marka şirkətinin veb saytlarını kodlaşdırdım.", "Mən nə edirəm?"]

    },
    
}



const langBtn = document.querySelector('.language-change-btn');
const mainNameInfo = document.querySelectorAll('.names');
const myPhoneLocation = document.querySelectorAll('.phoneAndLocation');
const aboutMyProfession = document.querySelectorAll('.aboutMe');

let currentLangMode = localStorage.getItem("langMode");



//esas kod


//dil deyidirme

if(localStorage.getItem("langMode")===null){
// localStorage.setItem("langMode", "En");

    let browserLang = navigator.language.slice(0, 2);
    
    if (browserLang === "tr") {
        localStorage.setItem("langMode", "Tr");
    } else {
        localStorage.setItem("langMode", "En");
    }

} else{
    langBtn.onclick = () => {
        if (langBtn.innerHTML === "TR") {
            langBtn.innerHTML = 'EN';  
    
            for (let i = 0; i < mainNameInfo.length; i++) {
                mainNameInfo[i].innerHTML = langData.tr.nameInfo[i];
            }
    
            for (let i = 0; i < myPhoneLocation.length; i++) {
                myPhoneLocation[i].innerHTML = langData.tr.phoneLocation[i];
            }
    
            for (let i = 0; i < aboutMyProfession.length; i++) {
                aboutMyProfession[i].innerHTML = langData.tr.about[i];
            }
    
            localStorage.setItem("langMode", "Tr"); 
    
        }  else {
    
            langBtn.innerHTML = 'TR';
    
            for (let i = 0; i < mainNameInfo.length; i++) {
                mainNameInfo[i].innerHTML = langData.en.nameInfo[i];
            }
    
            for (let i = 0; i < myPhoneLocation.length; i++) {
                myPhoneLocation[i].innerHTML = langData.en.phoneLocation[i];
            }
    
            for (let i = 0; i < aboutMyProfession.length; i++) {
                aboutMyProfession[i].innerHTML = langData.en.about[i];
            }
    
            localStorage.setItem("langMode", "En"); 
    
        }
    }
    

   

}
if (localStorage.getItem("langMode") === 'Tr') {

    langBtn.innerHTML = 'EN';
    
    for (let i = 0; i < mainNameInfo.length; i++) {
        mainNameInfo[i].innerHTML = langData.tr.nameInfo[i];
    }

    for (let i = 0; i < myPhoneLocation.length; i++) {
        myPhoneLocation[i].innerHTML = langData.tr.phoneLocation[i];
    }

    for (let i = 0; i < aboutMyProfession.length; i++) {
        aboutMyProfession[i].innerHTML = langData.tr.about[i];
    }

}  else {
    langBtn.innerHTML = 'TR';

    for (let i = 0; i < mainNameInfo.length; i++) {
        mainNameInfo[i].innerHTML = langData.en.nameInfo[i];
    }

    for (let i = 0; i < myPhoneLocation.length; i++) {
        myPhoneLocation[i].innerHTML = langData.en.phoneLocation[i];
    }

    for (let i = 0; i < aboutMyProfession.length; i++) {
        aboutMyProfession[i].innerHTML = langData.en.about[i];
    }
}
//menu

document.querySelector('.menu-btn').onclick = () => {
    if (document.querySelector('menu').className === "hidden") {
        document.querySelector('menu').className = "show";
    } else {
        document.querySelector('menu').className = "hidden";
    }
}


//refresh verende sehife eyni modda qalsin

//?preloader

// ?!Sehife yuklenende preloaderi gizle


let preloaders = document.getElementsByClassName('preloader')[0];
window.addEventListener("load", function(){
    setTimeout(function() {
            preloaders.style.display = "none";
    }, 3000); //! 3 saniye gözle
});