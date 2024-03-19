const backgroundImage = document.getElementById('b-img');
const backgroundImageBtn = document.getElementById('b-btn');

const profileImg = document.getElementById("profile-img")
const profileImgBtn = document.getElementById('upload-profile-img')

const profilePic = document.getElementById('profile-pic')

const textMsgSend = document.getElementById('text-msg-send');

const chatSection = document.getElementById('chat-section');

backgroundImageBtn.addEventListener('click', function(){
    backgroundImage.click();
})

profileImgBtn.addEventListener("click", function(){
    profileImg.click();
    profileImg.onchange = function(){

        profilePic.src = URL.createObjectURL(profileImg.files[0]);
    }
})

if(textMsgSend.innerText.length > 7){
    textMsgSend.style.marginBottom = '10px';
}

const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path' );
const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');

const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
iconSvg.setAttribute('viewBox', '0 0 7 12.19');
iconSvg.setAttribute('height', '21')
iconSvg.setAttribute('width', '12')

iconPath.setAttribute('d','M5.19,1H0V12.19L6.47,3.57C7.53,2.16,7,1,5.19,1Z');
iconPath.style.isolation = "isolate";
iconPath.style.opacity = '0.12999999523162842';
iconPath.style.fill = 'green'

iconPath2.setAttribute('d','M5.19,0H0V11.19L6.47,2.57C7.53,1.16,7,0,5.19,0Z');
iconPath2.style.fill = "#e6ffda";
iconPath2.classList.add('msg-arrow-right');


iconSvg.appendChild(iconPath);
iconSvg.appendChild(iconPath2);

chatSection.appendChild(iconSvg)

