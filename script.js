const backgroundImage = document.getElementById('b-img');
const backgroundImageBtn = document.getElementById('b-btn');

const profileImg = document.getElementById("profile-img")
const profileImgBtn = document.getElementById('upload-profile-img')

const profilePic = document.getElementById('profile-pic')

const textMsgSend = document.getElementById('text-msg-send');
const textMsgRecieve = document.getElementById('text-msg-receive');

const chatSection = document.getElementById('chat-section');
const chatting = document.getElementById('chatting');

const write = document.getElementById('writing-section');
const msgBox = document.getElementById('msg-box');

const closeBox = document.getElementById('close-box-btn');

const newMsgSend = document.getElementById('msg-input-send');
const sendBtn = document.getElementById('btn-msg-send');

const read = document.getElementById('read');
const delivered = document.getElementById('delivered');
const msgSend = document.getElementById('send');
const sending = document.getElementById('sending');
const clockIcon = document.getElementById('clock-icon');
const sendImgInChat = document.getElementById('send-msg-img');
const getImg = document.getElementById('msg-send-img');

const seletedImg = document.getElementById('img-selected');

const customChatDay = document.getElementById('custom-chat-day');

var downloadBtn = document.getElementById('download-chat-btn');
const downloadChat = document.getElementById('chat-download');

let imgVar;
const msgSendTime = document.getElementById('time');

var sendMsgCounter = 0;

const sendToggleBtn = document.getElementById('send-section-btn');
const sendInputToggle = document.getElementById('sent-toggle');
sendInputToggle.checked = true;
const receiveToggleBtn = document.getElementById('receive-section-btn');
const recieveInputToggle = document.getElementById('recieve-toggle');

sendToggleBtn.addEventListener('click', function(){
    // sendInputBtn.classList.remove('send-btn');
    sendToggleBtn.classList.remove('receive-btn');
    sendToggleBtn.classList.add('send-btn');
    sendInputToggle.click();
    receiveToggleBtn.classList.add('receive-btn');
})

receiveToggleBtn.addEventListener('click', function(){
    receiveToggleBtn.classList.remove('receive-btn');
    receiveToggleBtn.classList.add('send-btn');
    recieveInputToggle.click();
    sendToggleBtn.classList.add('receive-btn');
    
})

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

if(textMsgRecieve.innerText.length > 7){
    textMsgRecieve.style.marginBottom = '10px';
}

write.addEventListener('click', function(){
    msgBox.style.top = "100%";
    msgBox.style.transition = "2s";

    sendImgInChat.addEventListener('click', function(){
        getImg.click();
        getImg.onchange = function(){

            imgVar = URL.createObjectURL(getImg.files[0]);
            seletedImg.style.display = 'block';
            seletedImg.src = imgVar;
        }
        console.log('image');
        console.log(imgVar);
    });
})

closeBox.addEventListener('click', function(){
    msgBox.style.top = "-175%";
    msgBox.style.transition = "4s";
})

sendBtn.addEventListener('click', function(){
    if(sendInputToggle.checked == true){
        if(newMsgSend.value == "" && imgVar == null){
            alert('Empty can not send');
        }
        else{
    
            if(customChatDay.value != 'none'){
                const chatDay = document.createElement('div');
                chatDay.classList.add('date');
                const chatDate = document.createElement('p');
                const date = document.createElement('input');
                chatDate.classList.add('date-input');
                if(customChatDay.value == 'today'){
                    chatDate.innerText = 'today';
                    chatDay.appendChild(chatDate);
                    chatting.appendChild(chatDay);
                }
                chatDate.addEventListener('click', function(e){
                    const changeDate = document.createElement('input');
                    changeDate.addEventListener('click', function(e){
                        e.stopPropagation();
                    })
                    chatDay.appendChild(changeDate);
                    e.stopPropagation();
                    chatting.addEventListener('click', function(){
                        chatDate.innerHTML = changeDate.value;
                        chatDay.removeChild(changeDate);
                    })
                })
            }
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path' );
            const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const sender = document.createElement('div');
            iconSvg.setAttribute('viewBox', '0 0 7 12.19');
            iconSvg.setAttribute('height', '21');
            iconSvg.setAttribute('width', '12');
            iconPath.setAttribute('d','M5.19,1H0V12.19L6.47,3.57C7.53,2.16,7,1,5.19,1Z');
            iconPath.style.isolation = "isolate";
            iconPath.style.opacity = '0.12999999523162842';
            iconPath2.setAttribute('d','M5.19,0H0V11.19L6.47,2.57C7.53,1.16,7,0,5.19,0Z');
            if(sendMsgCounter > 0 && customChatDay.value == 'none'){
    
                iconPath.style.fill = 'transparent'
                iconPath2.style.fill = "transparent";
            }
            else{
    
                iconPath.style.fill = 'green'
                iconPath2.style.fill = "#e6ffda";
            }
            iconSvg.appendChild(iconPath);
            iconSvg.appendChild(iconPath2);
            iconSvg.classList.add('msg-arrow-right');
        
            const anchore = document.createElement('div');
            anchore.classList.add('anchore');
            anchore.appendChild(iconSvg);
            sender.appendChild(anchore);
            sender.classList.add('sender');
            chatting.appendChild(sender);
        
            const sendChat = document.createElement('div');
            sendChat.classList.add('send-chat');
            sender.appendChild(sendChat);
            sendMsgCounter++;
            if(imgVar != null){
                const newImgVar = document.createElement('img');
                newImgVar.src = imgVar;
                sendChat.appendChild(newImgVar);
                newImgVar.style.width = '250px';
                newImgVar.style.height = '250px';
                newImgVar.style.marginBottom = '15px';
            }
        
        
            const msg = document.createElement('div');
            msg.classList.add('msg');
            const send = document.createElement('p');
            send.classList.add('send')
    
            send.innerHTML = newMsgSend.value;
            if(send.innerHTML.length > 5){
                send.style.marginBottom = '10px'
            }
            sendChat.appendChild(msg);
            msg.appendChild(send);
            console.log(newMsgSend.value);
            const sendMsgActivity = document.createElement('div');
            sendMsgActivity.classList.add('send-msg-activity');
            sendChat.appendChild(sendMsgActivity);
            const sendStatus = document.createElement('div');
            sendStatus.classList.add('send-status');
            sendMsgActivity.appendChild(sendStatus);
            const sendTime = document.createElement('p');
            sendTime.classList.add('send-time');
            let [hours, mins] = msgSendTime.value.split(":");
            if(hours > 12){
                hours -= 12;
                console.log(hours);
                sendTime.innerText = hours+':'+mins+'pm';
            }
            else{
    
                sendTime.innerText = msgSendTime.value+'am';
            }
            sendStatus.appendChild(sendTime);
    
            const icontick = document.createElementNS('http://www.w3.org/2000/svg','path' );
            const icontickSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            if(read.checked == true){
                icontickSvg.setAttribute('viewBox', '0 0 16 11');
                icontickSvg.setAttribute('height', '11')
                icontickSvg.setAttribute('width', '16')
                icontickSvg.setAttribute('fill', '#53bdeb')
                icontickSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
            
                icontick.setAttribute('d','M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z');
                icontickSvg.appendChild(icontick);
                sendStatus.appendChild(icontickSvg)
            }
            if(delivered.checked == true){
                icontickSvg.setAttribute('viewBox', '0 0 16 11');
                icontickSvg.setAttribute('height', '11')
                icontickSvg.setAttribute('width', '16')
                icontickSvg.setAttribute('fill', '#8696a0')
                icontickSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
            
                icontick.setAttribute('d','M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z');
                icontickSvg.appendChild(icontick);
                sendStatus.appendChild(icontickSvg)
            }
            if(msgSend.checked == true){
                icontickSvg.setAttribute('viewBox', '0 0 12 11');
                icontickSvg.setAttribute('height', '11')
                icontickSvg.setAttribute('width', '12')
                icontickSvg.setAttribute('fill', '#8696a0')
                icontickSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
            
                icontick.setAttribute('d','M11.1549 0.652832C11.0745 0.585124 10.9729 0.55127 10.8502 0.55127C10.7021 0.55127 10.5751 0.610514 10.4693 0.729004L4.28038 8.36523L1.87461 6.09277C1.8323 6.04622 1.78151 6.01025 1.72227 5.98486C1.66303 5.95947 1.60166 5.94678 1.53819 5.94678C1.407 5.94678 1.29275 5.99544 1.19541 6.09277L0.884379 6.40381C0.79128 6.49268 0.744731 6.60482 0.744731 6.74023C0.744731 6.87565 0.79128 6.98991 0.884379 7.08301L3.88047 10.0791C4.02859 10.2145 4.19574 10.2822 4.38194 10.2822C4.48773 10.2822 4.58929 10.259 4.68663 10.2124C4.78396 10.1659 4.86436 10.1003 4.92784 10.0156L11.5738 1.59863C11.6458 1.5013 11.6817 1.40186 11.6817 1.30029C11.6817 1.14372 11.6183 1.01888 11.4913 0.925781L11.1549 0.652832Z');
                icontickSvg.appendChild(icontick);
                sendStatus.appendChild(icontickSvg)
            }
            if(sending.checked == true){
                sendStatus.appendChild(clockIcon);
            }
        }
    }




    else if(recieveInputToggle.checked == true){
        if(newMsgSend.value == "" && imgVar == null){
            alert('Empty can not send');
        }
        else{
    
            if(customChatDay.value != 'none'){
                const chatDay = document.createElement('div');
                chatDay.classList.add('date');
                const chatDate = document.createElement('p');
                const date = document.createElement('input');
                chatDate.classList.add('date-input');
                if(customChatDay.value == 'today'){
                    chatDate.innerText = 'today';
                    chatDay.appendChild(chatDate);
                    chatting.appendChild(chatDay);
                }
                chatDate.addEventListener('click', function(e){
                    const changeDate = document.createElement('input');
                    changeDate.addEventListener('click', function(e){
                        e.stopPropagation();
                    })
                    chatDay.appendChild(changeDate);
                    e.stopPropagation();
                    chatting.addEventListener('click', function(){
                        chatDate.innerHTML = changeDate.value;
                        chatDay.removeChild(changeDate);
                    })
                })
            }
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path' );
            const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const receiver = document.createElement('div');
            iconSvg.setAttribute('viewBox', '0 0 7 12.19');
            iconSvg.setAttribute('height', '21');
            iconSvg.setAttribute('width', '12');
            iconPath.setAttribute('d','M1.81,1H7V12.19L.53,3.57C-.53,2.16,0,1,1.81,1Z');
            iconPath.style.isolation = "isolate";
            iconPath.style.opacity = '0.12999999523162842';
            iconPath2.setAttribute('d','M1.81,0H7V11.19L.53,2.57C-.53,1.16,0,0,1.81,0Z');
            if(sendMsgCounter > 0 && customChatDay.value == 'none'){
    
                iconPath.style.fill = 'transparent'
                iconPath2.style.fill = "transparent";
            }
            else{
    
                iconPath.style.fill = 'green'
                iconPath2.style.fill = "#ffffff";
            }
            iconSvg.appendChild(iconPath);
            iconSvg.appendChild(iconPath2);
            iconSvg.classList.add('msg-arrow-left');
        
            const anchore = document.createElement('div');
            anchore.classList.add('receiver-anchore');
            anchore.appendChild(iconSvg);
            receiver.appendChild(anchore);
            receiver.classList.add('receiver');
            chatting.appendChild(receiver);
        
            const recieveChat = document.createElement('div');
            recieveChat.classList.add('receive-chat');
            receiver.appendChild(recieveChat);
            sendMsgCounter++;
            if(imgVar != null){
                const newImgVar = document.createElement('img');
                newImgVar.src = imgVar;
                sendChat.appendChild(newImgVar);
                newImgVar.style.width = '250px';
                newImgVar.style.height = '250px';
                newImgVar.style.marginBottom = '15px';
            }
        
        
            const receiveMsg = document.createElement('div');
            receiveMsg.classList.add('receive-msg');
            const receive = document.createElement('p');
            receive.classList.add('receive')
    
            receive.innerHTML = newMsgSend.value;
            if(receive.innerHTML.length > 5){
                receive.style.marginBottom = '10px'
            }
            recieveChat.appendChild(receiveMsg);
            receiveMsg.appendChild(receive);
            console.log(newMsgSend.value);
            const receiveMsgActivity = document.createElement('div');
            receiveMsgActivity.classList.add('receive-msg-activity');
            recieveChat.appendChild(receiveMsgActivity);
            const receiveStatus = document.createElement('div');
            receiveStatus.classList.add('receive-status');
            receiveMsgActivity.appendChild(receiveStatus);
            const receiveTime = document.createElement('p');
            receiveTime.classList.add('receive-time');
            let [hours, mins] = msgSendTime.value.split(":");
            if(hours > 12){
                hours -= 12;
                console.log(hours);
                receiveTime.innerText = hours+':'+mins+'pm';
            }
            else{
    
                receiveTime.innerText = msgSendTime.value+'am';
            }
            receiveStatus.appendChild(receiveTime);
    
        }
    }
})

