/**
 * Created by zhanglongde on 2016/6/3.
 */
(function(){
    var tool = {};
    tool.verify_empty = function(str){
        //console.log("---------------------------------empty");
        if(str === '' || str === undefined){
            return false;
        }
        else{
            return true;
        }
    };
    tool.verify_phone_number = function (phone) {
        //phone = tool.trim(phone);
        var reg = /^1[3|5|7|8|][0-9]{9}$/;
        return reg.test(phone);
    };
    tool.verify_phone_code = function (phone_code) {
        //phone_code = tool.trim(phone_code);
        var reg = /^[0-9]{6}$/;
        return reg.test(phone_code);
    };
    tool.finance_amount = function(num){
        var reg = /(^\d+$)/;����//�Ǹ������������� + 0��
        return reg.test(num); //strΪ��Ҫ�жϵ��ַ� ִ�з��ؽ�� true �� false
    };

    window.MyTool = tool;
})();
(function(){
    var show_error = function(container){
        $(container).text('');
    };

    var check = {
        "empty":"MyTool.verify_empty",
        "phone_number":"MyTool.verify_phone_number",
        "phone_code":"MyTool.verify_phone_code",
        "finance_amount":"tool.finance_amount "
    };

    var message = {
    };

    var proms = {
        "finance_quick":{
            "user_name":{
                "MyTool.verify_empty":"*��������Ϊ��",
                "container":"#user_name_error"
            },
            "the_amount":{
                "MyTool.verify_empty":"*�ÿ����Ϊ��",
                "MyTool.finance_amount":"*��������С���㡢����",
                "container":"#the_amount_container .error-content"
            },
            "user_mobile":{
                "MyTool.verify_empty":"*�ֻ����벻��Ϊ��",
                "MyTool.verify_phone_number":"*��������ȷ���ֻ�����",
                "exit":"*�˺����ѱ�ע�ᣬ���¼��",
                "container":"#user_mobile_container .error-content"
            },
            "user_checkcode":{
                "MyTool.verify_empty":"*��֤�벻��Ϊ��",
                "MyTool.verify_phone_code":"*��������ȷ���ֻ���֤��",
                "container":"#user_checkcode_container .error-content"
            }
        }
    };

    message.Msg = function(params){
        //console.log("scope:"+params.scope+"\n");
        //console.log("id:"+params.id+"\n");
        //console.log("func:"+params.func+"\n");
        //console.log("trigger:"+params.trigger+"\n");
        if((params.scope === "login") || (params.scope === "register") || (params.scope === "finance_quick"))
        {
            var errors = [];
            if ($.inArray(proms[params.scope][params.id],errors) === -1) {
                errors.push(proms[params.scope][params.id][params.func]);
                console.log(proms[params.scope][params.id][params.func]);
            }
            if (errors.length > 0) {
                //$(proms[params.scope][params.id]["container"]).show();
                $(proms[params.scope][params.id]["container"]).text(errors[0]);
                //$("#error-content1").text(errors[0]);
            }
        }
        else if((params.scope  === "update_phone")){
            message.PhoneToastr(proms[params.scope][params.id][params.func]);
        }
        else
        {
            toastr.error(proms[params.scope][params.id][params.func]);
        }
    };

    window.Proms = proms;
    window.MyMessage = message;
})();

(function(){
    var validate ={};
    var proms = Proms;

    validate.check_1 = function(ctrl){
        console.log(ctrl.form_group);
        $(ctrl.form_group).on(ctrl.event, function () {
            console.log(ctrl.event);
            //bind event for every form control
            $(this).each(function () {
                var id_str = $(this).attr("id");
                var params = {
                    "scope":ctrl.scope,
                    "id":id_str,
                    "func":"",
                    "trigger":ctrl.trigger
                };
                //search the check item
                for(var key in proms[ctrl.scope][id_str]){
                    var func_str = key;
                    //var error_prom = proms[ctrl.scope][id_str][key];
                    //console.log(key);
                    if(func_str === "container"  || (func_str === "exit")){

                    }
                    else
                    {
                        //switch string into check function
                        var func = eval(func_str);
                        //get value of the checked form control
                        var val = $("#"+id_str).val();
                        var return_val = func(val);
                        console.log(return_val);
                        //the item needs to show error promote
                        if(return_val === false){
                            params.func = func_str;
                            MyMessage.Msg(params);
                            return;
                        }
                        else{

                        }
                    }
                }
                //clear_error
            });
        });
    };

    window.MyValidate = validate;
})();

$(function(){
    var params_blur ={
        "scope":"finance_quick",
        "form_group":"#blurtest input",
        "event":"blur",
        "trigger":""
    };
    var params_click ={
        "scope":"finance_quick",
        "form_group":"#blurtest input",
        "event":"click",
        "trigger":"#commit"
    };
    //$("#blurtest input").on("blur",{count:1},validate);//blur �¼���ð��
    MyValidate.check_1(params_blur);
    MyValidate.check_1(params_click);
    //MyValidate.check_1("finance_quick","#blurtest input","click","#commit");
});


