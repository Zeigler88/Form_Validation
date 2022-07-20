$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var pass_error=true;
    var cnfm_pass=true;
    var email_error=true;

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

        if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should contain atleast 4 characters');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }

    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password1=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password_val=$('#password').val();
        if(!password1.test(password_val)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password not in correct format');
            $('#passwordvalidation').css('color','red');
            pass_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }

        if(password_val.length<8){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain atleast 8 characters');
            $('#passwordvalidation').css('color','red');
            pass_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
    }

    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color','red');
            cnfm_pass=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var email1= /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val=$('#email').val();
        if(!email1.test(email_val)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email not in correct format');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password();
        if(Error==true && pass_error==true&& cnfm_pass==true){
            return true;
        }
        else{
            return false;
        }
    });

});