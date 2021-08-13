let like_button = document.getElementById('likebtn');
let bodyPOST =  document.getElementById("photo");
let bookmark_button = document.getElementById('bookmark');
let post_saved_box = document.getElementById('post-saved');
let menu_button = document.getElementById('menubtn');

like_button.addEventListener('click',function(){
    let liked = like_button.innerHTML;
    if(liked == "favorite_border"){
        document.getElementById('likes').innerText = "420";
        like_button.innerHTML= 'favorite';
        like_button.className += " animates";
        document.getElementById('biglikebtn').className += " animateBig";
        removeBigC();
    }
    else{
        document.getElementById('likes').innerText = "419";
        like_button.innerHTML= 'favorite_border';
        like_button.className = "material-icons-outlined material-icons";
        document.getElementById('biglikebtn').className = "material-icons-outlined material-icons";
    }
    
});


bookmark_button.addEventListener('click',function(){
    let liked = bookmark_button.innerHTML;
    if(liked == "bookmark_border"){
        bookmark_button.innerHTML= 'bookmark';
        bookmark_button.className += " animatesBookmark";
        post_saved_box.className += " animate-save-post";

        setTimeout(function(){
            post_saved_box.className = "post-saved";
        },3000);
    }
    else{
        bookmark_button.innerHTML= 'bookmark_border';
        bookmark_button.className = "material-icons-outlined material-icons";
    }
});

bodyPOST.addEventListener('dblclick',function(){
    let liked = like_button.innerHTML;
    document.getElementById('biglikebtn').className += " animateBig";
    if(liked == "favorite_border"){
        like_button.click();
    }
    removeBigC();
    
});

function removeBigC(){
    setTimeout(function(){
        document.getElementById('biglikebtn').className = "material-icons-outlined material-icons";
    },2000);
}

var boxShown;
menu_button.addEventListener('click',function(){
    window.scrollTo(0, 0);
    let menu_scroll = document.getElementById('menu_box');
    if(boxShown == false || boxShown == undefined){
        menu_scroll.className = "post-menu showMenu";
        menu_scroll.style.display = "block";
        document.getElementsByClassName('dark-bg')[0].style.display = "block";
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        boxShown = true;
    }
    else{
        menu_scroll.className = "post-menu hideMenu";
        menu_scroll.style.display = "flex";
        document.getElementsByClassName('dark-bg')[0].style.display = "none";
        document.getElementsByTagName('body')[0].style.overflow = "auto";
        boxShown = false;
        setTimeout(function(){
            menu_scroll.style.display = "none";
        },500);
    }
});

document.getElementsByClassName('dark-bg')[0].addEventListener('click',function(){
    menu_button.click();
});


let commentsShown = true; //to check comment hidden or not
var all_comments = [
    {
        user_name : "user_1",
        user_comment : "Very nice Photo",
        user_image_url : "img/user_1.jpg"
    },
    {
        user_name : "user_2",
        user_comment : "Very beautiful picture",
        user_image_url : "img/user_2.jpg"
    },
    {
        user_name : "user_1",
        user_comment : "Very nice Photo",
        user_image_url : "img/user_1.jpg"
    },
    {
        user_name : "user_2",
        user_comment : "Very beautiful picture",
        user_image_url : "img/user_2.jpg"
    }
];

function show_All_comments(){
    let comments_section = document.getElementById('comments_section');
    document.getElementById('totalComments').innerText = all_comments.length;
    comments_section.innerHTML = ``;
    for (let i = 0; i < all_comments.length; i++) {
        if(commentsShown == false){
            comments_section.innerHTML += `<div class="user_comment show" style="--i:`+i+`">
            <div class="user_img"><img src="`+all_comments[i].user_image_url+`" alt="" class="post-user2"></div>
            <div class="user_name">
                <p><b>`+all_comments[i].user_name+`</b></p>
            </div>
            <div class="comment"> `+all_comments[i].user_comment+`</div>
        </div>`;
        }
        else{
            comments_section.innerHTML += `<div class="user_comment hide" style="--i:`+i+`">
            <div class="user_img"><img src="`+all_comments[i].user_image_url+`" alt="" class="post-user2"></div>
            <div class="user_name">
                <p><b>`+all_comments[i].user_name+`</b></p>
            </div>
            <div class="comment"> `+all_comments[i].user_comment+`</div>
        </div>`;
        }
        
    }
}
show_All_comments();


let submit_comment = document.getElementById('addBtn');
let comment_input = document.getElementById('addCommentInput');
let molecomments = document.getElementById('more_less_comments');


submit_comment.addEventListener('click',function(){
    let msg = comment_input.value;
    let url = "img/deepak-user.jpg";
    let userid = "android_01";
    if(msg == ""){
        comment_input.focus();
    }
    else{
        all_comments.push({ user_name : userid , user_comment : msg, user_image_url : url});
        show_All_comments();
        comment_input.value = "";
    }
    
});


molecomments.addEventListener('click',function(){
    let totaldiv = document.getElementById('comments_section').getElementsByClassName("user_comment");
    // console.log(totaldiv)
    if(commentsShown == false){
        for (let j = 0; j < all_comments.length; j++) {
            totaldiv[j].className = "user_comment hide";
            setTimeout(function(){
                totaldiv[j].style.display = "none";
            },500);
        }
        document.getElementById('moreLessCom').innerText = "View";
        commentsShown = true;
    }
    else{
        for (let i = 0; i < all_comments.length; i++) {
            totaldiv[i].className = "user_comment show";
            setTimeout(function(){
                totaldiv[i].style.display = "flex";
            },500);
        }
        document.getElementById('moreLessCom').innerText = "Hide";
        commentsShown = false;
    }
});

let comment_button = document.getElementById('commentbtn');
comment_button.addEventListener('click',function(){
    document.getElementsByClassName('comment-page-title')[0].style.display = "";
    document.getElementsByClassName('post-top')[0].style.display = "none";
    document.getElementsByClassName('post-body')[0].style.display = "none";
    document.getElementsByClassName('user-reaction')[0].style.display = "none";
    document.getElementsByClassName('likes')[0].style.display = "none";
    document.getElementsByClassName('comments_section')[0].style.height = "70vh";
    let totaldiv = document.getElementById('comments_section').getElementsByClassName("user_comment");
    for (let i = 0; i < all_comments.length; i++) {
        totaldiv[i].className = "user_comment show";
        setTimeout(function(){
            totaldiv[i].style.display = "flex";
        },500);
    }
    document.getElementById('moreLessCom').innerText = "Hide";
    commentsShown = false;
    
});

let back_button = document.getElementById('backbtn');
back_button.addEventListener('click',function(){
    document.getElementsByClassName('comment-page-title')[0].style.display = "none";
    document.getElementsByClassName('post-top')[0].style.display = "";
    document.getElementsByClassName('post-body')[0].style.display = "";
    document.getElementsByClassName('user-reaction')[0].style.display = "";
    document.getElementsByClassName('likes')[0].style.display = "";
    document.getElementsByClassName('comments_section')[0].style.height = "auto";
});

let mode = document.getElementById('changeMode').className;
let change_mode = document.getElementById('changeMode');
change_mode.addEventListener('click',function(){
    
    if(mode == "light"){
        document.getElementsByClassName('post-container')[0].className = "post-container dark-mode";
        menu_button.click();
        setTimeout(function(){
            document.getElementsByClassName('post-container')[0].style.backgroundColor = "#0b1111";
        },900);
        this.innerText = "Switch to Light Mode";
        mode = "dark";
    }
    else{
        document.getElementsByClassName('post-container')[0].className = "post-container light-mode";
        menu_button.click();
        setTimeout(function(){
            document.getElementsByClassName('post-container')[0].style.backgroundColor = "#fff";
        },900);
        this.innerText = "Switch to Dark Mode";
        mode = "light";
    }
    
});



document.querySelectorAll('.send-to-frnd').forEach(item => {
    item.addEventListener('click', event => {
        item.className += " sent";
        item.value = "Sent";
        item.setAttribute("disabled","true");
        document.getElementById('done-box').style.display = "";
    })
});

document.getElementById('searchInput').addEventListener("keyup",function(){
    let a, txtValue;
    let name = this.value.toLowerCase();
    let list = document.getElementsByClassName('friends')[0];
    let li  = list.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[1];
        a1 = li[i].getElementsByTagName("p")[0].getElementsByTagName('b')[0];
        txtValue = a.textContent.toLowerCase() || a.innerText.toLowerCase() || a1.textContent.toLowerCase() || a1.innerText.toLowerCase();
        if(txtValue.indexOf(name)> -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
});

document.getElementById('send').addEventListener('click',function(){
    window.scrollTo(0, 0);
    document.getElementById('send_to').className = "send-to showFrnd";
    document.getElementsByClassName('dark-bg')[1].style.display = "block";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
});

document.getElementById('donebtn').addEventListener('click',function(){
    document.getElementById('send_to').className = "send-to hideFrnd";
    document.getElementById('send_to').style.display = "";
    let list = document.getElementsByClassName('friends')[0];
    let li  = list.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }
    document.getElementById('searchInput').value = "";
    document.getElementsByClassName('dark-bg')[1].style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "auto";
    setTimeout(function(){
        document.getElementById('send_to').style.display = "none";
    },500);
});

document.getElementsByClassName('dark-bg')[1].addEventListener('click',function(){
    document.getElementById('donebtn').click();
});

document.getElementById('copylink').addEventListener('click',function(){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    let text = window.location.href;
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    document.getElementsByClassName('dark-bg')[0].click();
    var elem = document.createElement("div");
    document.body.appendChild(elem);
    elem.className = "copy";
    elem.innerText = "Link Copied !!!";
    setTimeout(function(){
        document.body.removeChild(elem);
    },3000);
});
