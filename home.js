const typingEffect=new Typed(".typing",{
    strings:["Coder !","Developer !","Designer !"],
    loop:true,
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500
  })

  AOS.init();

  
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

const contact_btn = document.getElementsByClassName("btn2")
let contactBtnBackground1 = "black";
let contactBtnBackground2 = "white";
let contactBtnColor1 = "white";
let contactBtnColor2 = "black";

const social_img = document.getElementsByClassName("social-img")
let socialBackground = "white";
let socialBoxshadow1 = "0px 0px 10px rgba(0, 0, 0, 0.150)";
let socialBoxshadow2 = "0px 0px 8px #212121";

const education_box = document.getElementsByClassName('education-box');  //function of education
let educationBackground1="#00a2ff0e";
let educationBackground2="#212121";
let educationBoxshadow1="0px 0px 10px rgba(0, 0, 0, 0.100)";
let educationBoxshadow2="0px 0px 10px #212121";

const project_box = document.getElementsByClassName('project-box');  //function of projects
let projectBackground1="#00a2ff0e";
let projectBackground2="#212121";
let projectBoxshadow1="0px 0px 10px rgba(0, 0, 0, 0.100)";
let projectBoxshadow2="0px 0px 10px #212121";

const contact_box = document.getElementsByClassName('contact-box');  //function of projects
let contactBackground1="white";
let contactBackground2="white";
let contactBoxshadow1="0px 0px 10px rgba(0, 0, 0, 0.200)";
let contactBoxshadow2="0px 0px 10px gray";

const project_image = document.getElementsByClassName('project-img');
let projectImgBoxshadow1="drop-shadow(0px 0px 5px black)";
let projectImgBoxshadow2="drop-shadow(0px 0px 5px white)";


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-sun-fill');
    if(this.classList.toggle('bi-moon-stars-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '3s';

        for(var i=0; i<contact_btn.length; i++){
            contact_btn[i].style.background=contactBtnBackground1;
            contact_btn[i].style.color=contactBtnColor1;
        }

        for(var i=0; i<social_img.length; i++){
            social_img[i].style.background=socialBackground;
            social_img[i].style.boxShadow=socialBoxshadow1;
        }
        
        //education
        for(var i=0; i<education_box.length; i++){
            education_box[i].style.background=educationBackground1;
            education_box[i].style.boxShadow=educationBoxshadow1;
        }
        
        //projects
        for(var i=0; i<project_box.length; i++){
            project_box[i].style.background=projectBackground1;
            project_box[i].style.boxShadow=projectBoxshadow1;
        }

        //contact
        for(var i=0; i<contact_box.length; i++){
            contact_box[i].style.background=contactBackground1;
            contact_box[i].style.boxShadow=contactBoxshadow1;
        }

        for(let i=0; i<project_image.length; i++){
            project_image[i].style.filter=projectImgBoxshadow1;
        }
    }

    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        for(var i=0; i<contact_btn.length; i++){
            contact_btn[i].style.background=contactBtnBackground2;
            contact_btn[i].style.color=contactBtnColor2;
        }
        
        for(var i=0; i<social_img.length; i++){
            social_img[i].style.background=socialBackground;
            social_img[i].style.boxShadow=socialBoxshadow2;
        }

        //education
        for(var i=0; i<education_box.length; i++){
            education_box[i].style.background=educationBackground2;
            education_box[i].style.boxShadow=educationBoxshadow2;
        }

        //project
        for(var i=0; i<project_box.length; i++){
            project_box[i].style.background=projectBackground2;
            project_box[i].style.boxShadow=projectBoxshadow2;
        }

        //contact
        for(var i=0; i<contact_box.length; i++){
            contact_box[i].style.background=contactBackground2;
            contact_box[i].style.boxShadow=contactBoxshadow2;
        }

        for(let i=0; i<project_image.length; i++){
            project_image[i].style.filter=projectImgBoxshadow2;
        }
    }
})

const sidemenu = document.querySelector(".nav-links")
    function openmenu(){
        sidemenu.style.right="0";
    }

    function closemenu(){
        sidemenu.style.right="-200px";
    }

function emailSend(){
    (function(){
        emailjs.init("qI-gSOn0zhMO4n1A2");
    })();

    let serviceID = "service_9xls3eq";
    let templeteID = "template_4012uef";

    let params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };
    emailjs.send(serviceID, templeteID, params)
    .then(res => {
        alert("Thank you " + params["sendername"] + ", your message send successfully" );
    })
    .catch();
}
