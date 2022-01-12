//閒置
var interval; 
$(document).on('mousemove keyup keypress',function(){ 
    clearTimeout(interval);//clear it as soon as any event occurs 
    //do any process and then call the function again 
    settimeout();//call it again 
}) 

function settimeout(){ //閒置一段時間跳一次電視
    interval=setTimeout(function(){ 
    // console.log("已經閒置三分鐘了唷");
    $("#por_img").attr("src","./img/pj/" + img[now] + ".JPG").attr("alt", img[now]);
        $("tr").removeClass();
        $("tr").eq(now).addClass("tr_show");
        $("section").addClass("tv_noise");
        setTimeout(noise,200);
        now++;
        if (now >= img.length){
            now = 0;
        }

    },180000) 
} 


var img = ['vote', 'calendar', 'animal', 'band', 'basic', 'en_ani', 'levelc'];
//自動切換電視
var now = 1;
var ww=setInterval(function (){
    $("#por_img").attr("src","./img/pj/" + img[now] + ".JPG").attr("alt", img[now]);
        $("tr").removeClass();
        $("tr").eq(now).addClass("tr_show");
        $("section").addClass("tv_noise");
        setTimeout(noise,200);
        now++;
        if (now >= img.length){
            now = 0;
        }

},2500);


//停止自動切換電視
var stop = function(){
    clearInterval(ww);
  }
// if (img.length > 1) {
//     setInterval("ww()", 3000); //3000為毫秒 = 3秒
//     now = 1;
// }
// function ww() {
//     $("#por_img").attr("src","./img/pj/" + img[now] + ".JPG").attr("alt", img[now]);
//     $("tr").removeClass();
//     $("tr").eq(now).addClass("tr_show");
//     now++;
//     if (now >= img.length){
//         now = 0;
//     }
// }

function noise(){
    $("section").removeClass("tv_noise");
}

//點選list切換相對圖片
$("tr").click(function () {
    $("tr").removeClass();
    $(this).addClass("tr_show");
    $("section").addClass("tv_noise");
    var index = $("tr").index(this);
    // alert(index);
    // console.log("./img/pj/"+img[index]);
    $("#por_img").attr("src", "./img/pj/" + img[index] + ".JPG").attr("alt", img[index]);
    now=index;
    stop();
    setTimeout(noise,200);
});
//hover modal img
$(".mm").mouseover(function(){
    $(".mm-d").hide();
})
$(".mm").mouseout(function(){
    $(".mm-d").show();
})

//彈跳Modal
$("#por_img").click(function () {
    var tt = $(this).attr("alt");
    console.log(tt);
    stop();
    switch (tt) {
        case "vote":
            $("#modalTitle").empty().append("The_vote 投票系統");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">會員系統 : 可註冊、編輯及登入</li>
            <li class="list-group-item">問卷系統 : 可新建、統計、搜尋及防止重複投票</li>
            <li class="list-group-item">後台系統 : 可管理廣告、編輯問卷</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/vote/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/vote");
        
            break;
        case "calendar":
            $("#modalTitle").empty().append("Perpetual_calendar 萬年曆");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以PHP撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以鳥類為呈現主題</li>
            <li class="list-group-item">介面每次點開都呈現不同圖案</li>
            <li class="list-group-item">可搜尋指定的年月</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/calendar/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/calendarByPHP");

            break;
        case "animal":
            $("#modalTitle").empty().append("Animal_park 動物園區介紹網");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以Bootstrap4撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">統整台灣知名動物園區</li>
            <li class="list-group-item">藉由連結可傳送到各別官網</li>
            <li class="list-group-item">引入googlemap查看資訊</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/zoo_web/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/font_project");
            break;
        case "band":
            $("#modalTitle").empty().append("The_band 樂團組成簡介");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">藉由連接資料庫切換網頁頁面</li>
            <li class="list-group-item">可自由切換中文及英文</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/band/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/The_band_PHP");
            break;
        case "basic":
            $("#modalTitle").empty().append("The_program 基礎程式語言介紹");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以Javascript撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">以原生JS寫法完成換頁功能</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/basic/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/basic_web");
            break;
        case "en_ani":
            $("#modalTitle").empty().append("EN_animail 瀕危生物網");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">有基本hover效果</li>
            <li class="list-group-item">我的第一個網頁作品</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/en_animal/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/EN_animal");
            break;
        case "levelc":
            $("#modalTitle").empty().append("LevelC_01 網頁設計丙級-題組一");
            $("#m_img").attr("src", "./img/pj/" + tt + ".JPG").attr("alt", tt);
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">主題為科技高中的社團介紹網</li>
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">整題完成時間約為1個小時</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/levelc/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/20211104-levelC01");
            break;
    }
})
//Modal last
$(".m-footer1").click(function(){
    var tt = $(this).parents("#myModal").find("#m_img").attr("alt");
    console.log(tt);
    var index=parseInt(img.indexOf(tt)); //陣列中的第幾位
    console.log(index);
    switch (index) {
        case 1:
            $("tr").removeClass();
            $("tr").eq(0).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#por_img").attr("src", "./img/pj/vote.JPG").attr("alt", "vote");
            $("#modalTitle").empty().append("The_vote 投票系統");
            $("#m_img").attr("src", "./img/pj/vote.JPG").attr("alt", "vote");
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">會員系統 : 可註冊、編輯及登入</li>
            <li class="list-group-item">問卷系統 : 可新建、統計、搜尋及防止重複投票</li>
            <li class="list-group-item">後台系統 : 可管理廣告、編輯問卷</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/vote/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/vote");
        
            break;
        case 2:
            $("tr").removeClass();
            $("tr").eq(1).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#por_img").attr("src", "./img/pj/calendar.JPG").attr("alt", "calendar");
            $("#m_img").attr("src", "./img/pj/calendar.JPG").attr("alt", "calendar");
            $("#modalTitle").empty().append("Perpetual_calendar 萬年曆");
            $("#m_text").html(`
            <h5 class="text-center">以PHP撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以鳥類為呈現主題</li>
            <li class="list-group-item">介面每次點開都呈現不同圖案</li>
            <li class="list-group-item">可搜尋指定的年月</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/calendar/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/calendarByPHP");

            break;
        case 3:
            $("tr").removeClass();
            $("tr").eq(2).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("Animal_park 動物園區介紹網");
            $("#m_img").attr("src", "./img/pj/animal.JPG").attr("alt", "animal");
            $("#por_img").attr("src", "./img/pj/animal.JPG").attr("alt", "animal");
            $("#m_text").html(`
            <h5 class="text-center">以Bootstrap4撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">統整台灣知名動物園區</li>
            <li class="list-group-item">藉由連結可傳送到各別官網</li>
            <li class="list-group-item">引入googlemap查看資訊</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/zoo_web/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/font_project");
            break;
        case 4:
            $("tr").removeClass();
            $("tr").eq(3).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("The_band 樂團組成簡介");
            $("#m_img").attr("src", "./img/pj/band.JPG").attr("alt","band");
            $("#por_img").attr("src", "./img/pj/band.JPG").attr("alt","band");
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">藉由連接資料庫切換網頁頁面</li>
            <li class="list-group-item">可自由切換中文及英文</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/band/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/The_band_PHP");
            break;
        case 5:
            $("tr").removeClass();
            $("tr").eq(4).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("The_program 基礎程式語言介紹");
            $("#m_img").attr("src", "./img/pj/basic.JPG").attr("alt", "basic");
            $("#por_img").attr("src", "./img/pj/basic.JPG").attr("alt", "basic");
            $("#m_text").html(`
            <h5 class="text-center">以Javascript撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">以原生JS寫法完成換頁功能</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/basic/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/basic_web");
            break;
        case 6:
            $("tr").removeClass();
            $("tr").eq(5).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("EN_animail 瀕危生物網");
            $("#m_img").attr("src", "./img/pj/en_ani.JPG").attr("alt", "en_ani");
            $("#por_img").attr("src", "./img/pj/en_ani.JPG").attr("alt", "en_ani");
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">有基本hover效果</li>
            <li class="list-group-item">我的第一個網頁作品</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/en_animal/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/EN_animal");
            break;
        case 0:
            $("tr").removeClass();
            $("tr").eq(6).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("LevelC_01 網頁設計丙級-題組一");
            $("#m_img").attr("src", "./img/pj/levelc.JPG").attr("alt","levelc");
            $("#por_img").attr("src", "./img/pj/levelc.JPG").attr("alt","levelc");
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">主題為科技高中的社團介紹網</li>
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">整題完成時間約為1個小時</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/levelc/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/20211104-levelC01");
            break;
    }
})
//Modal next
$(".m-footer2").click(function(){
    var tt = $(this).parents("#myModal").find("#m_img").attr("alt");
    console.log(tt);
    var index=parseInt(img.indexOf(tt)); //陣列中的第幾位
    console.log(index);
    switch (index) {
        case 6:
            $("tr").removeClass();
            $("tr").eq(0).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#por_img").attr("src", "./img/pj/vote.JPG").attr("alt", "vote");
            $("#modalTitle").empty().append("The_vote 投票系統");
            $("#m_img").attr("src", "./img/pj/vote.JPG").attr("alt", "vote");
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">會員系統 : 可註冊、編輯及登入</li>
            <li class="list-group-item">問卷系統 : 可新建、統計、搜尋及防止重複投票</li>
            <li class="list-group-item">後台系統 : 可管理廣告、編輯問卷</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/vote/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/vote");
        
            break;
        case 0:
            $("tr").removeClass();
            $("tr").eq(1).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#por_img").attr("src", "./img/pj/calendar.JPG").attr("alt", "calendar");
            $("#m_img").attr("src", "./img/pj/calendar.JPG").attr("alt", "calendar");
            $("#modalTitle").empty().append("Perpetual_calendar 萬年曆");
            $("#m_text").html(`
            <h5 class="text-center">以PHP撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以鳥類為呈現主題</li>
            <li class="list-group-item">介面每次點開都呈現不同圖案</li>
            <li class="list-group-item">可搜尋指定的年月</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/calendar/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/calendarByPHP");

            break;
        case 1:
            $("tr").removeClass();
            $("tr").eq(2).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("Animal_park 動物園區介紹網");
            $("#m_img").attr("src", "./img/pj/animal.JPG").attr("alt", "animal");
            $("#por_img").attr("src", "./img/pj/animal.JPG").attr("alt", "animal");
            $("#m_text").html(`
            <h5 class="text-center">以Bootstrap4撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">統整台灣知名動物園區</li>
            <li class="list-group-item">藉由連結可傳送到各別官網</li>
            <li class="list-group-item">引入googlemap查看資訊</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/zoo_web/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/font_project");
            break;
        case 2:
            $("tr").removeClass();
            $("tr").eq(3).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("The_band 樂團組成簡介");
            $("#m_img").attr("src", "./img/pj/band.JPG").attr("alt","band");
            $("#por_img").attr("src", "./img/pj/band.JPG").attr("alt","band");
            $("#m_text").html(`
            <h5 class="text-center">以PHP搭配MySQL資料庫撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">藉由連接資料庫切換網頁頁面</li>
            <li class="list-group-item">可自由切換中文及英文</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/band/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/The_band_PHP");
            break;
        case 3:
            $("tr").removeClass();
            $("tr").eq(4).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("The_program 基礎程式語言介紹");
            $("#m_img").attr("src", "./img/pj/basic.JPG").attr("alt", "basic");
            $("#por_img").attr("src", "./img/pj/basic.JPG").attr("alt", "basic");
            $("#m_text").html(`
            <h5 class="text-center">以Javascript撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">用Bootstrap4達到RWD效果</li>
            <li class="list-group-item">以原生JS寫法完成換頁功能</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/basic/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/basic_web");
            break;
        case 4:
            $("tr").removeClass();
            $("tr").eq(5).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("EN_animail 瀕危生物網");
            $("#m_img").attr("src", "./img/pj/en_ani.JPG").attr("alt", "en_ani");
            $("#por_img").attr("src", "./img/pj/en_ani.JPG").attr("alt", "en_ani");
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">有基本hover效果</li>
            <li class="list-group-item">我的第一個網頁作品</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/en_animal/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/EN_animal");
            break;
        case 5:
            $("tr").removeClass();
            $("tr").eq(6).addClass("tr_show");
            $("section").addClass("tv_noise");stop();
            setTimeout(noise,200);
            $("#modalTitle").empty().append("LevelC_01 網頁設計丙級-題組一");
            $("#m_img").attr("src", "./img/pj/levelc.JPG").attr("alt","levelc");
            $("#por_img").attr("src", "./img/pj/levelc.JPG").attr("alt","levelc");
            $("#m_text").html(`
            <h5 class="text-center">以HTML及CSS撰寫而成</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">主題為科技高中的社團介紹網</li>
            <li class="list-group-item">以iframe呈現網頁換頁</li>
            <li class="list-group-item">整題完成時間約為1個小時</li>
            </ul>
            `);
            $(".mask").find("a").eq(0).attr("href", "http://220.128.133.15/s1100403/levelc/");
            $(".mask").find("a").eq(1).attr("href", "https://github.com/mooncactusmoon/20211104-levelC01");
            break;
    }
})