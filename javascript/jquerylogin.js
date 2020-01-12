$(document).ready(function(){
    MainEvent = new MainEvent();
});

class MainEvent{
    constructor(){
        this.initEvent();
    }
    initEvent(){
        $(document).on("click",".signup-link",function(){
           
            $(".signin").hide();
        });
    }
}
