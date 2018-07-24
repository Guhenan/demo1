$(function() {
    var explorer = navigator.userAgent;
    //ie 
    if (explorer.indexOf("MSIE") >= 0) {
        // $(".share2,.share3").css({"padding-top":"0"})
    }
    $(".ce > li > a").click(function() {
        if ($(this).hasClass("play")) {
            $(this).removeClass("play").addClass("stop");
            $(this).find("img.more").attr('src', 'images/arwor_03.png');
        } else {
            $(this).removeClass("stop").addClass("play");
            $(this).find("img.more").attr('src', 'images/arwor_04.png');
        }
    });
    $(".ce > li > a").click(function() {
        $(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
        // $(this).parents().siblings().find(".er").hide(300);
        $(this).siblings(".er").toggle(300);
        $(this).parents().siblings().find(".er > li > .thr").hide().parents().siblings().find(".thr_nr").hide();
    })

    $(".er > li > a").click(function() {
        $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        // $(this).parents().siblings().find(".thr").hide(300); 
        $(this).siblings(".thr").toggle(300);
        if ($(this).hasClass("play")) {
            $(this).removeClass("play").addClass("stop");
            $(this).find("img.more").attr('src', 'images/arwor_03.png');
        } else {
            $(this).removeClass("stop").addClass("play");
            $(this).find("img.more").attr('src', 'images/arwor_04.png');
        }
    })

    $(".thr > li > a").click(function() {
        $(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");
        $(this).parents().siblings().find(".thr_nr").hide();
        $(this).siblings(".thr_nr").toggle();
    })

    /*--------------------------我添加的--------------------------*/

    // 课程组信息折叠
    $(".liBut").hover(function() {
        $(".myUl").toggle();
    })

    // icon小图标动画
    $(".myModify,.myDelete,.myUpload,.myDownload,.myShare,.myHeart,.setting").mouseover(function() {
        $(this).animate({ top: "-5px" }, 200, function() {
            $(this).animate({ top: "0" }, 200);
        });
    })

    // 右边浮动导航  鼠标滑过圆圈中添加图案
    $("ul.listBtn li").mouseenter(function() {
            $(this).find(".myIcon").append("<img src='images/d_03.png' />")
        })
        // 右边浮动导航  鼠标滑出圆圈中删除图案
    $("ul.listBtn li").mouseleave(function() {
        $(this).find(".myIcon").html("")
    })


    // 左边导航切换,内容切换,字体样式切换
    $(".ol-tail a").click(function() {
        $(".myTask").hide();
        $(".points").hide();
        $(".allTask").show();
        $(".catalog").show();
        $(this).css({ "color": "#2a8cd7", "font-weight": "bold" })
        $(".ol-taill a").css({ "color": "#999999", "font-weight": "normal" })
    })
    $(".ol-taill a").click(function() {
        $(".allTask").hide();
        $(".catalog").hide();
        $(".myTask").show();
        $(".points").show();
        $(this).css({ "color": "#2a8cd7", "font-weight": "bold" })
        $(".ol-tail a").css({ "color": "#999999", "font-weight": "normal" })
    })

    // 发起讨论折叠
    $(".fqtl").hover(function() {
            $(this).find("#talkUl").toggle()
        })
        // 编辑内容折叠
    $(".bjnr").hover(function() {
        $(this).find("ul.heUl").toggle()
    })
    $(".bjnr").mouseenter(function() {
        $(this).find("p").addClass("hoverBtn").removeClass("myHover")
    })
    $(".bjnr").mouseleave(function() {
        $(this).find("p").addClass("myHover").removeClass("hoverBtn")
    })

    //搜索框默认字
    var n = new Date().getTime();

    var def_keyword = "搜索知识点";
    var def_val = false;

    function init_keyword() {
        var val = jQuery("#searchTip").val();
        if (val == null || val == "") {
            jQuery("#searchTip").val(def_keyword);
            def_val = true;
        }
    }
    jQuery("#search_keyword_list ul li a").click(function() {
        jQuery('#searchTip').val(jQuery(this).find('div').html());
    });
    jQuery("#searchTip").focus(function() {
        if (def_val) {
            jQuery("#searchTip").val("");
            jQuery("#searchTip").css("color", "#5f6267");
            def_val = false;
        }
        jQuery('#search_input').addClass('focus');
        //jQuery('#search_keyword_list').show();
    });
    jQuery("#searchTip").blur(function(event) {
        jQuery('#search_input').removeClass('focus');
    });

    init_keyword();

    // 知识点目录列表
    $(".listBox .listBtn").click(function() {

        $(this).siblings(".listCon").toggle(300);
        // $(this).parents().siblings().find(".listCon").hide(300);
        if ($(this).find("span").hasClass("play")) {
            $(this).find("span").removeClass("play").addClass("stop");

        } else {
            $(this).find("span").removeClass("stop").addClass("play");
        }
    })

    $(".startBtn3").click(function() {
        $(this).find(".talkCon").toggle();
        if ($(this).hasClass("s1")) {
            $(this).removeClass("s1").addClass("s2");
            $(this).css({ "background": "url(images/arwor_05.png) no-repeat 140px center" });
        } else {
            $(this).removeClass("s2").addClass("s1");
            $(this).css({ "background": "url(images/arwor_06.png) no-repeat 136px center" });
        }
    })

    // 目录右侧切换
    $(".tab a").click(function(e) {
        e.preventDefault()
    });
    $(".tab>li").click(function() {
        var index = $(this).index() + 1;
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".content>ul:nth-child(" + index + ")").show().siblings("ul").hide();
    });

    function hover(id) {
        id.append('<div id="useIcon"><a class="heWrite" href="#" target="_blank" title="编写"></a><a class="heAdd" href="#" target="_blank" title="添加"></a><a class="heReduce" href="#" target="_blank" title="减少"></a><a class="heDelete" href="#" target="_blank" title="删除"></a><a class="heDownload" href="#" target="_blank" title="下载"></a><a class="heUpload" href="#" target="_blank" title="上传"></a></div>')
    }
    var hover1 = $(".hover1>li");
    var hover2 = $(".hover2>li");
    hover(hover1);
    hover(hover2);
    //课程发布切换
    $(".homepage-tab .hd span").click(
        function() {
            $(this).addClass("cur").siblings().removeClass("cur").parent().siblings().children().eq($(this).index()).show().siblings().hide();
        }
    );
    //课程习题库鼠标滑过
    $(".exerise-con li .hd").mouseenter(
        function(){
            $(this).css("background-color","#d5f0fa");
            $(this).children(".share").fadeIn(1000);
        }
    ).mouseleave(function(){
        $(this).css("background-color","#f1f1f1");
        $(this).children(".share").fadeOut(500);
    })
    //课程习题库弹窗
    $(".find .find-exerise").click(
        function(){
            $(".exerise-ser-modal").show();
        }
    )
    //点击关闭弹窗
    $(".exerise-ser-modal .m-hd .close,.exerise-ser-modal .m-ft .closed").click(
        function(){
            $(".exerise-ser-modal").hide();
        }
    );
    //智能组卷-添加组卷规则弹窗
    $(".auto-con .add-rule a").click(
        function(){
            $(".mask").show();
        }
    );
    //点击关闭弹窗
    $(".mask .m-hd .close,.mask .m-ft .closed").click(
        function(){
            $(".mask").hide();
        }
    );
    //管理子题-自动抽题弹窗
    $(".crosshead-right .extraction").click(
        function(){
            $(".extraction-mask").show();
        }
    );
    //点击关闭自动抽题弹窗
    $(".extraction-modal .m-hd .close,.extraction-modal .m-ft .closed").click(
        function(){
            $(".extraction-mask").hide();
        }
    );
    //管理子题-添加子题弹窗
    $(".crosshead-right .crosshead").click(
        function(){
            $(".crosshead-mask").show();
        }
    );
    //点击关闭添加子题弹窗
    $(".crosshead-modal .m-hd .close,.crosshead-modal .m-ft .closed").click(
        function(){
            $(".crosshead-mask").hide();
        }
    );
    //职能组卷--添加组卷规则弹窗
    $(".table .icons-show .setting").click(
        function(){
            $(".addRule-mask").show();
        }
    );
    //点击关闭添职能组卷--添加组卷规则弹窗
    $(".addRule-modal .m-hd .close,.addRule-modal .m-ft .closed").click(
        function(){
            $(".addRule-mask").hide();
        }
    );
    //职能组卷--设置习题知识点个数弹窗
    $(".addRule-modal .table td .setting").click(
        function(){
            $(".settingPoints-mask").show();
        }
    );
    //点击关闭添职能组卷--设置习题知识点个数弹窗
    $(".settingPoints-modal .m-hd .close,.settingPoints-modal .m-ft .closed").click(
        function(){
            $(".settingPoints-mask").hide();
        }
    );
    //从素材库中添加弹窗效果
    $(".addform-all .add").click(
        function(){
            $(".addform-modal").show();
        }
    );
    //从素材库中添加弹窗效果
    $(".addform-lists ul li .add").click(
        function(){
            $(".addform-modal").show();
        }
    );
    //点击关闭从素材库中添加弹窗效果
    $(".addform-modal .m-hd .close,.addform-modal .m-ft .closed").click(
        function(){
            $(".addform-modal").hide();
        }
    );

})
