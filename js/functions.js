var q = [];
var countdown;
var qIndex = -1;
var timer = 0;
var random = true;
var infinit = true;
var bcolor = true;



//-------------------------------------------------------------------------------
// [UTIL] GET NEXT QUESTION BY INDEX
//------------------------------------------------------------------------------- 
function next_q() {
    if (q.length === 0) {
        return;
    }
    if (qIndex + 1 == q.length && !infinit) {
        $('.endContainer').show();
        $('.fa-pause').click();
        return;
    }
    if (qIndex + 1 == q.length) {
        if (random) {
            q.sort(function() {
                return 0.5 - Math.random()
            });
        }
        qIndex = -1;
    }
    qIndex = qIndex + 1;
    var question = q[qIndex].question;
    //timer = q[qIndex].time;
    $('#question').html(question);
    timer_restart();
}
//-------------------------------------------------------------------------------
// [RENDER] RENDER ALL QUESTIONS IN A SET
//------------------------------------------------------------------------------- 
function setQset(q) {
    var list = ''
	//list = list + '<div id="searchIcon"><i class="fa fa-search" aria-hidden="true"></i></div>';	
    list = list + "<div id='newQSet'>";
    list = list + "<div class='newQSet qTileTitle ' >CREATE QUESTION SET</div>";
    list = list + "<div class='qtileFooter' style='border:none;BACKGROUND: black;'></div>";
    list = list + "<div class='qEditN' style='border:none;background: black;'><i class='fa fa-pencil' style='color: white' aria-hidden='true'></i></div>";
    list = list + "</div>";
    var userId = localStorage.getItem('id');
    for (var i = 0; i < q.length; i++) {
        for (var j = 0; j < q[i].qSet.length; j++) {
            filter = q[i].qSet[j].title.toLowerCase().trim();
            list = list + "<div filter='"+filter+"' qSetId='" + q[i].qSet[j].id + "' class='qTile'>";
            if (q[i].qSet[j].title != '') {
                list = list + "<div class='qTileTitle'>" + q[i].qSet[j].title + "</div>";
            } else {
                list = list + "<div class='qTileTitle' style='font-style: italic;color:gray;'> NO TITLE</div>";
            }
            list = list + "<div class='qtileFooter'><span class='qCount'>" + q[i].totalQ + " Q</span><span class='like'>" + q[i].qSet[j].view + "&nbsp;<i class='fa fa-eye' aria-hidden='true'></i></span></div>";
            
            if (q[i].qSet[j].createdBy !=  userId && q[i].qSet[j].createdBy != 0){
                for (var u = 0; u < q[i].user.length; u++) {
					if (q[i].user[u].id === q[i].qSet[j].createdBy) {
					  
					  list = list + "<div  qSetId='" + q[i].qSet[j].id + "' class='qDisplay'>";
					  list = list + '<img class="creator" src="' + q[i].user[u].avatar + '">'; 
					  list = list + q[i].user[u].username+"</div>";
					  break;
					}
                }
            }
            else if (q[i].qSet[j].createdBy ===  userId && q[i].qSet[j].createdBy != 0){
                for (var u = 0; u < q[i].user.length; u++) {
					if (q[i].user[u].id === q[i].qSet[j].createdBy) {
		            	list = list + "<div  qSetId='" + q[i].qSet[j].id + "' class='qEdit'>"; 
        		    	list = list + '<img class="creator" src="' + q[i].user[u].avatar + '">'+"<i class='fa fa-pencil' aria-hidden='true'></i> EDIT</div>";
						break;
					}
                }
            }
            else {
            	list = list + "<div  qSetId='" + q[i].qSet[j].id + "' class='qEdit'><i class='fa fa-pencil' aria-hidden='true'></i> EDIT</div>";
            }
            list = list + "</div>";
	

        }
    }
    list = list + "<div class='footerLink' style='position: fixed; bottom: 0; width: 100%;'>";
	list = list + "		<span id='AboutLink' >i</span>";
	list = list + "		<span id='searchLink'><i class='fa fa-search' aria-hidden='true'></i></span></div>";


    hideSearch();
    $('.questions, .qRun, .qSetList, .play, .createQForm, #leftPanel').hide();
    $('.delPopUp, .loginContainer, .registerContainer, .endContainer, .resetPwdContainer, .aboutContainer').hide();
    $('.qGrid').empty().append(list).show();
    $('.logo, #AboutLink, #searchLink').show();
}
//-------------------------------------------------------------------------------
// [RENDER] RENDER ALL QUESTIONS IN A SET
//------------------------------------------------------------------------------- 
function setQuestions(data) {
    var list = "";
    $('#inputQTitle').val('');
    q.splice();
    q = [];
    if (data) {
        $('#inputQTitle').val(data.qSet[0].title);
        document.title = data.qSet[0].title;
        list = '<div qSetId="' + data.qSet[0].id + '" class="qSetList">';
        if (data.question.length > 0) {
            for (var i = 0; i < data.question.length; i++) {
                list = list + '<div qSec="' + data.question[i].time + '" qId="' + data.question[i].qId + '" class="qSetListItem"><div class="qText">' + data.question[i].question + "</div><div class='editQ' ><i class='fa fa-pencil' aria-hidden='true'></i></div></div>";
                q.push({
                    'question': data.question[i].question,
                    'time': data.question[i].time
                });
            }
            if (random) {
                q.sort(function() {
                    return 0.5 - Math.random()
                });
            }
            qIndex = -1;
            $('.play').show();
            $('.questions').show();
            $('.backIcon').hide();
        } else {
            q.splice();
            q = [];
            $('#question').html('');
            $('#timer').html('NO QUESTION');
            qIndex = -1;
        }
        list = list + '<div class="deleteQSet"><i class="fa fa-trash-o" aria-hidden="true"></i> QUESTION SET</div></div>';
    } else {
        list = '<div qSetId="" class="qSetList"></div>';
    }
    $('.qSetList').remove();
    $('.addQHeader').after(list);
    $('.logo, #leftPanel').show();
    $('.backIcon, .resetPwdContainer, .qGrid, .createQForm, .delPopUp, #AboutLink, #searchLink').hide();
    hideSearch();

    $('.fa-pause').removeClass('fa-pause').addClass('fa-play');
}
//-------------------------------------------------------------------------------
// [UTIL] GET PARAMETER BY NAME
//------------------------------------------------------------------------------- 
function getParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)","i")
      , results = regex.exec(url);
    if (!results)
        return null ;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//-------------------------------------------------------------------------------
// [EVENT] TOGGLE EMAIL FORM
//------------------------------------------------------------------------------- 
$(document).on('click', '#contactEmail', function(event) {
	$('#contact_form').slideToggle();

});
//-------------------------------------------------------------------------------
// [EVENT] PAUSE TIMER
//------------------------------------------------------------------------------- 
$(document).on('click', '.fa-pause', function(event) {
    clearTimeout(countdown);
    event.stopPropagation();
    $('.fa-pause').removeClass('fa-pause').addClass('fa-play');
});
//-------------------------------------------------------------------------------
// [UTIL] TIMER LOGIC
//------------------------------------------------------------------------------- 
function timer_tick() {
    if (q.length === 0) {
        return;
    }
    $qRun = $('.qRun');
    $qRun.removeClass('warning');
    $qRun.removeClass('fail');
    timer = timer - 1;
    $('#timer').html(timer);
    if (bcolor) {
        if (timer < (q[qIndex].time - parseInt(q[qIndex].time / 3))) {
            $qRun.addClass('warning');
        }
        if (timer < q[qIndex].time - (2 * parseInt(q[qIndex].time / 3))) {
            $qRun.removeClass('warning');
            $qRun.addClass('fail');
        }
    }
    clearTimeout(countdown);
    countdown = setTimeout('timer_tick();', 1000);
}
//-------------------------------------------------------------------------------
// [UTIL] RESET TIMER
//------------------------------------------------------------------------------- 
function timer_restart() {
    $('qRun').removeClass('fail');
    $('qRun').removeClass('warning');
    clearTimeout(countdown);
    timer = q[qIndex].time;
    $('#timer').html(timer);
    countdown = setTimeout('timer_tick();', 1000);
}
//-------------------------------------------------------------------------------
// [UTIL] DISPLAY TIP
//------------------------------------------------------------------------------- 
// function display_tip()
// {
// 	var tip = tips.shift();
// 	
// 	$('#tip').html(tip);
// 	
// 	tips.push(tip);
// }
// Randomise Questions & Tips
// q.sort(function() {return 0.5 - Math.random()})
// tips.sort(function() {return 0.5 - Math.random()})
// End Questions
// q.push('done');
//var myScroll;
// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//-------------------------------------------------------------------------------
// [EVENT] INITIALISE - DOCUMENT READY
//------------------------------------------------------------------------------- 
$(document).ready(function() {
    // 	FastClick.attach(document.body);
    //$('.questions').click();
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    checkLogin();
    redirect();
});
//-------------------------------------------------------------------------------
// [UTIL] REDIRECT BASED ON HISTORY
//------------------------------------------------------------------------------- 
function redirect() {
    if (getParameterByName('qRun')) {
        startQ(getParameterByName('qRun'));
    } else if (getParameterByName('qEdit')) {
        getQuestions(getParameterByName('qEdit'));
    } else if (getParameterByName('reset')) {
        validateToken();
    } else {
        $('.questions').click();
    }
}
//-------------------------------------------------------------------------------
// [UTIL] VALIDATE PASSWORD RESET TOKEN 
//------------------------------------------------------------------------------- 
function validateToken() {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/checkToken.php',
        type: 'POST',
        data: {
            'token': getParameterByName('reset'),
        },
        success: function(response) {
            if (!(response.err)) {
                showReset();
            } else {
                $('.loginContainer, .registerContainer, .resetPwd, .newPassword').hide();
                $('.resetPwdContainer, .tokenError').show();
            }
            $('.at-expanding-share-button-toggle-bg').hide();
        },
        error: function(err) {
            console.log('error: ' + err.Text);
        }
    });
}
//-------------------------------------------------------------------------------
// [RENDER] RENDER RESET PASSWORD FIELD 
//------------------------------------------------------------------------------- 
function showReset() {
    $('.loginContainer, .registerContainer, .resetPwd').hide();
    $('#repeatNewpassword').removeClass('wrong');
    $('#repeatNewpassword').attr("placeholder", "REPEAT PASSWORD");
    $('.resetPwdContainer, .newPassword').show();
    $('.at-expanding-share-button-toggle-bg').hide();
}
//-------------------------------------------------------------------------------
// [UTIL] BACK AND FORWARD NAVIGATION
//------------------------------------------------------------------------------- 
$(window).on('popstate', function() {
    redirect();
});
//-------------------------------------------------------------------------------
// [RENDER] SHOW ALL QUESTIONS SET
//------------------------------------------------------------------------------- 
$(document).on('click', '.questions', function(e) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getQSet.php',
        type: 'GET',
        // data: {
        //             'qSetId': this.attributes.qSetId.value,
        //         },
        success: function(data) {
            setQset(data);
        },
        error: function(err) {
            console.log('error when login ' + err.Text);
        }
    });
    $('.qGrid').show();
    window.history.pushState({}, "Practice Q", "http://practiceq.com");
    $('.at-expanding-share-button-toggle-bg').show();
    document.title = 'Practice Q';
});
//-------------------------------------------------------------------------------
// [UTIL] CHECK LOGIN
//------------------------------------------------------------------------------- 
function checkLogin() {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getUser.php',
        type: 'POST',
        data: {
            'token': localStorage.getItem('token'),
        },
        success: function(data) {
            if (!data.err) {
                if (data.user[0] && data.user[0].avatar != "") {
                    $('#iconSlider').hide();
					$('#userIcon').append('<img class="avatar" src="' + data.user[0].avatar + '">');					
                } else {
                    $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
                }
                $('#regUser').attr('readonly', true);
                $('#regUser').css('border', 'none');
                $('#regPassword').hide();
                $('#anonyme').hide();
                $('.reg').show();
                $('#logout').show();
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                $('#anonyme').show();
                $('.reg').hide();
            }
        },
        error: function(err) {
            console.log('token error ' + err.Text);
        }
    });
}
//-------------------------------------------------------------------------------
// [RENDER] RENDER USER
//------------------------------------------------------------------------------- 
function renderUser() {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getUser.php',
        type: 'POST',
        data: {
            'token': localStorage.getItem('token'),
        },
        success: function(data) {
            if (data.user.length > 0) {
                $('#regUser').val(data.user[0].username);
                $('#regEmail').val(data.user[0].email);
                if (data.user[0].random === '1') {
                    $('#randomOn').addClass('switchOn');
                    $('#randomOff').removeClass('switchOn');
                    random = true;
                } else {
                    $('#randomOn').removeClass('switchOn');
                    $('#randomOff').addClass('switchOn');
                    random = false;
                }
                if (data.user[0].infinit === '1') {
                    $('#infinitOn').addClass('switchOn');
                    $('#infinitOff').removeClass('switchOn');
                    infinit = true;
                } else {
                    $('#infinitOn').removeClass('switchOn');
                    $('#infinitOff').addClass('switchOn');
                    infinit = false;
                }
                if (data.user[0].color === '1') {
                    $('#backgroundOn').addClass('switchOn');
                    $('#backgroundOff').removeClass('switchOn');
                    bcolor = true;
                } else {
                    $('#backgroundOn').removeClass('switchOn');
                    $('#backgroundOff').addClass('switchOn');
                    bcolor = false;
                }
                if (data.user[0].avatar) {
                    $('#ShowImage').attr('src', data.user[0].avatar).show();
                    $('#loginAnoIcon').hide();
                } else {
                    $('.avatar').remove();
                    $('#loginAnoIcon').show();
                }
                $('#btnCreateUser').attr('type', 'update');
                $('.loginContainer, .resetPwdContainer, #anonyme, #btnCreateUser, #resetMsg, #AboutLink, #searchLink').hide();
                $('.registerContainer, .reg, #btnResetPwd, #resetEmail, #btnResetNow').show();
                hideSearch();
                window.history.pushState({}, "", "?user");
                document.title = 'Practice Q';
            }
        },
        error: function(err) {
            console.log('token error ' + err.Text);
        }
    });
}
//-------------------------------------------------------------------------------
// [UTIL] UPDATE VIEWS
//------------------------------------------------------------------------------- 
function updateView(qSetId) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/qSetView.php',
        type: 'POST',
        data: {
            'qsetid': qSetId,
        },
        error: function(err) {
            console.log('error when login ' + err.Text);
        }
    });
}
//-------------------------------------------------------------------------------
// [UTIL] START THE QUESTIONAIRE 
//------------------------------------------------------------------------------- 
function startQ(qSetId, noRedirect) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getQuestions.php',
        type: 'GET',
        data: {
            'qSetId': qSetId,
        },
        success: function(data) {
            setQuestions(data);
            $('#leftPanel').hide();
            $('.qRun').show();
            $('.qGrid').hide();
            next_q();
            timer_tick();
            updateView(qSetId);
            $('.fa-play').removeClass('fa-play').addClass('fa-pause');
            $('.endContainer').hide();
            window.history.pushState({}, "Run", "?qrun=" + qSetId);
            document.title = data.qSet[0].title;
        },
        error: function(err) {
            console.log('error when login ' + err.Text);
        }
    });
}

//-------------------------------------------------------------------------------
// [UTIL] HIDE SEARCH 
//------------------------------------------------------------------------------- 
function hideSearch(){
	if ($('#searchContainer').is(':visible')){
		$('.qGrid').animate({marginTop:+130});
	}
	else{
		$('.qGrid').animate({marginTop:79});
	}	
	$('#searchContainer').hide();
}
//-------------------------------------------------------------------------------
// [EVENT] SEARCH -> FILTER BASED ON KEYWORK
//------------------------------------------------------------------------------- 
$(document).on('input', '#search', function() {
    if (this.value.trim() == ""){
	    $(".qTile").show();
    }
    else{
    	$(".qTile").hide();
		$( "div[filter*='"+this.value.toLowerCase().trim()+"']" ).show();
	}
});


//-------------------------------------------------------------------------------
// [EVENT] FORGET RESETING PASSWORD
//------------------------------------------------------------------------------- 
//$(document).on('click', '#searchIcon', function() {
$(document).on('click', '#searchLink', function() {
	$('#searchContainer').slideToggle(function(){
	if ($('#searchContainer').is(':visible')){
		$('.qGrid').animate({marginTop:+130});$('#search').focus();
	}
	else{
		$('.qGrid').animate({marginTop:79});
		$('#search').val();
	    $(".qTile").show();
	}	
	
	});
});
//-------------------------------------------------------------------------------
// [EVENT] FORGET RESETING PASSWORD
//------------------------------------------------------------------------------- 
$(document).on('click', '#nevermind', function() {
    $('.questions').click();
})
//-------------------------------------------------------------------------------
// [EVENT] REFRESH RESET TOKEN
//------------------------------------------------------------------------------- 
$(document).on('click', '#newToken', function() {
    $('#btnResetPwd').click();
})
//-------------------------------------------------------------------------------
// [UTIL] TOAST MESSAGE
//------------------------------------------------------------------------------- 
function toastIt(message, type) {
    if (type === 'success') {
        $('.message').html('<i class="fa fa-check" aria-hidden="true"></i> ' + message);
    } else {
        $('.message').html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> ' + message);
    }
    $('.toast').addClass(type);
    $('.toast').slideToggle();
    setTimeout(function() {
        $('.toast').slideToggle();
    }, 5000);
}

//-------------------------------------------------------------------------------
// [UTIL] LOGIN WITH FACEBOOK
//------------------------------------------------------------------------------- 
function facebookRegister(data, token) {

   $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: "service/facebookRegister.php",
            type: 'POST',
            data: {
                'token': token, 
                'email': data.email, 
                'username': data.name, 
                'avatar': data.picture.data.url
            },
            success: function(data) {
                   localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
					$('.questions').click();
                    if (data.avatar != "") {
                        $('#iconSlider').hide();
	                    $('#userIcon').append('<img class="avatar" src="' + data.avatar + '">');	                    
                    } else {
                        $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
                    }
                    $('#regUser').attr('readonly', true);
                    $('#regUser').css('border', 'none');

                    $('.loginContainer, #regPassword').hide();
                    $('#logout, #loginAnoIcon').show();
                    $('#ShowImage').attr('src', '').hide();
            },
            error: function(err) {
                console.log(err);
            }
        });

}

//-------------------------------------------------------------------------------
// [UTIL] LOGIN WITH FACEBOOK
//------------------------------------------------------------------------------- 
function facebookLogin(data, token) {

   $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: "service/facebookLogin.php",
            type: 'POST',
            data: {
                'token': token, 
                'email': data.email
            },
            success: function(data) {
                   localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
					$('.questions').click();
                    if (data.avatar != "") {
                        $('#iconSlider').hide();
                       	$('#userIcon').append('<img class="avatar" src="' + data.avatar + '">');                        
                    } else {
                        $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
                    }
                    $('#regUser').attr('readonly', true);
                    $('#regUser').css('border', 'none');

                    $('.loginContainer, #regPassword').hide();
                    $('#logout, #loginAnoIcon').show();
                    $('#ShowImage').attr('src', '').hide();
            },
            error: function(err) {
                console.log(err);
            }
        });

}
//-------------------------------------------------------------------------------
// [EVENT] SAVE NEW PASSWORD IN BACKEND
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnResetNewPassword', function() {
    if ($('#newPassword').val().trim() === "" || $('#newPassword').val() != $('#repeatNewpassword').val()) {
        $('#repeatNewpassword').val('');
        $('#repeatNewpassword').addClass('wrong');
        $('#repeatNewpassword').attr("placeholder", "PASSWORD NOT EQUAL");
    } else {
        $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: "service/updatePwd.php",
            type: 'POST',
            data: {
                'password': $('#repeatNewpassword').val(),
                'token': getParameterByName('reset')
            },
            success: function(response) {
                if (!response.err) {
                    toastIt(response.msg, 'success');
                    if (localStorage.getItem('token')) {
                        $('.questions').click();
                    } else {
                        $('#navToLogin').click();
                    }
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
});
//-------------------------------------------------------------------------------
// [EVENT] REMOME WRONG BORDER
//------------------------------------------------------------------------------- 
$(document).on('click', '#lemail, #lpassword', function() {
    $(this).removeClass('wrong');
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK USER ICON
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnLogin', function() {
    if (!validateEmail($('#lemail').val())) {
        $('#lemail').addClass('wrong');
    } else if ($('#lpassword').val() === "") {
        $('#lpassword').addClass('wrong');
        $('#lpassword').attr("placeholder", "MISSING PASSWORD");
    } else {
        $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: 'service/login.php',
            type: 'POST',
            data: {
                'email': $('#lemail').val(),
                'password': $('#lpassword').val()
            },
            success: function(data) {
                if (!data.err) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
					$('.questions').click();
                    if (data.avatar != "") {
                        $('#iconSlider').hide();
                       	$('#userIcon').append('<img class="avatar" src="' + data.avatar + '">');                        
                    } else {
                        $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
                    }
                    $('#regUser').attr('readonly', true);
                    $('#regUser').css('border', 'none');

                    $('.loginContainer, #regPassword').hide();
                    $('#logout, #loginAnoIcon').show();
                    $('#ShowImage').attr('src', '').hide();
                } else {
                    localStorage.removeItem('token');
                    localStorage.removeItem('id');
                    $('#regUser').attr('readonly', false);
                    $('#regUser').css('border', '1px solid #ddd');
                    $('#regPassword').show();
                    $('#lemail').addClass('wrong');
                    $('#lpassword').addClass('wrong');
                    toastIt(data.err, 'error');
                }
            },
            error: function(err) {
                console.log('token error ' + err.Text);
            }
        });
    }
});
//-------------------------------------------------------------------------------
// [EVENT] CHANGE TIME
//------------------------------------------------------------------------------- 
$(document).on('change', '.selectTime', function(e) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/updateQuestion.php',
        type: 'POST',
        data: {
            'qSetId': $('.qFormInput').attr('qSetId'),
            'qId': $('.qFormInput').attr('qid'),
            'question': $("#inputQ").val(),
            'time': $('.selectTime').val()
        },
        success: function() {
            
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
     });
});


//-------------------------------------------------------------------------------
// [EVENT] CLICK USER ICON
//------------------------------------------------------------------------------- 
$(document).on('click', '.userIcon', function(e) {
    hideSearch();

    if (localStorage.getItem('token')) {
        renderUser();
    } else {
        $('#anonyme, .registerContainer, #btnCreateUser,  #resetEmail, #btnResetNow').show();
        $('.reg, .loginContainer, .resetPwdContainer, #btnResetPwd, #resetMsg, .aboutContainer').hide();
    }
    window.history.pushState({}, "", "?user");
    document.title = 'Practice Q';
    $('.at-expanding-share-button-toggle-bg, footer, .play, .endContainer, .aboutContainer').hide();
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK NAV TO LOGIN
//------------------------------------------------------------------------------- 
$(document).on('click', '#AboutLink', function(e) {
	$('.aboutContainer').show();
    $('.at-expanding-share-button-toggle-bg').hide();
    if ($('#searchContainer').is(':visible')){
		$('#searchContainer').hide();
		$('.qGrid').animate({marginTop:79});
		$('#search').val();
	    $(".qTile").show();
	    
	}	
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK NAV TO LOGIN
//------------------------------------------------------------------------------- 
$(document).on('click', '#navToLogin', function(e) {
    //$('.anonySettingContainer').hide();
    $('.registerContainer').hide();
    $('#lemail, #lpassword').val('');
    $('#lpassword, #lemail').removeClass('wrong');
    $('#lpassword').attr("placeholder", "PASSWORD");
    $('#lemail').attr("placeholder", "E-MAIL");
    $('.loginContainer, #btnResetPwd').show();
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK NAV TO LOGIN
//------------------------------------------------------------------------------- 
$(document).on('click', '#navToRegister', function(e) {
    $('#btnCreateUser').attr('type', 'create');
    $('#loginAnoIcon, .reg, .registerContainer').show();
    $('#logout, .resetPwdContainer, #ShowImage, #anonyme').hide();
    $('#ShowImage').attr('src', '');
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK RESET PASSWORD
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnResetPwd', function(e) {
    $('.loginContainer, .registerContainer, .tokenError, .newPassword').hide();
    $('.resetPwdContainer, .resetPwd').show();
    $('#resetEmail').attr("placeholder", "YOUR E-MAIL");
    $('#resetEmail').val("");
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK SEND EMAIL
//------------------------------------------------------------------------------- 
$(document).on('click', '#submit_button', function(e) {
    if (!validateEmail($('#contactEmailInput').val())) {
        $('#contactEmailInput').addClass('wrong');
        $('#contactEmailInput').attr("placeholder", "invalid email");
    }
    else if ($('#contactName').val().trim() === ""){
        $('#contactName').addClass('wrong');
        $('#contactName').attr("placeholder", "enter your name");
    }
    else if ($('#contactMessage').val().trim() === ""){
        $('#contactMessage').addClass('wrong');
        $('#contactMessage').attr("placeholder", "there is no message");
    }
    else {
        $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: "service/email.php",
            type: 'POST',
            data: {
                'email': $('#contactEmailInput').val(), 
                'name': $('#contactName').val(), 
                'msg':$('#contactMessage').val()
            },
            success: function(response) {
                
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
});



//-------------------------------------------------------------------------------
// [EVENT] CLICK RESET PASSWORD NOW
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnResetNow', function(e) {
    if (!validateEmail($('#resetEmail').val())) {
        $('#resetEmail').addClass('wrong');
        $('#resetEmail').attr("placeholder", "missing email");
    } else {
        $.ajax({
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            url: "service/resetRequest.php",
            type: 'POST',
            data: {
                'email': $('#resetEmail').val()
            },
            success: function(response) {
                if (!response.err) {
                    $('#resetEmail, #btnResetNow').hide();
                    $('#resetMsg').show();
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK REGISTER
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnRegister', function(e) {
    $('.loginContainer').hide();
    $('.registerContainer').show();
});
//-------------------------------------------------------------------------------
// [UTIL] VALIDATE EMAIL
//------------------------------------------------------------------------------- 
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//---------------------------------------------------------------
// [EVENT] - LOGOUT
//---------------------------------------------------------------
$(document).on('click', '#logout', function(e) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        url: "service/logout.php",
        type: 'POST',
        data: {
            'token': localStorage.getItem('token')
        },
        success: function(response) {
            if (!response.err) {
                $('.avatar').remove();
                $('#iconSlider').show();
                $('#iconSlider').removeClass("fa-user-circle").addClass("fa-sliders");
                $('#regUser').attr('readonly', false);
                $('#regUser').val('');
                $('#regEmail, #lemail, #lpassword').val('');
                $('#regUser').css('border', '1px solid #ddd');
                $('#regPassword').val('').show();
                $('#infinitOn, #randomOn, #backgroundOn').addClass('switchOn');
                $('#infinitOff, #randomOff, #backgroundOff').removeClass('switchOn');
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                $('.registerContainer').hide();
                $('.reg').hide();
                $('#anonyme').show();
                $('#ShowImage').attr('src', '').hide();
                $('#loginAnoIcon').show();
                $('.questions').click();
            }
        }
    });
});
//---------------------------------------------------------------
// [UTIL] - UPLOAD IMAGE
//---------------------------------------------------------------
function uploadImage(token) {
    if ($('#fileToUpload').val() === '') {
        return;
    }
    var formData = new FormData($("#formContent")[0]);
    formData.append('token', token);
    $.ajax({
        url: "service/uploadAvatar.php",
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
            if (response.file) {
                $('.avatar').remove();
                $('#userIcon').append('<img class="avatar" src="' + response.file + '">');
                $('#iconSlider').hide();
            } else {
                $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
            }
        },
    });
}
//-------------------------------------------------------------------------------
// [EVENT] CLICK SAVE ON REGISTER PAGE
//------------------------------------------------------------------------------- 
$(document).on('click', '#btnCreateUser', function(e) {
    var error = false;
    if (!validateEmail($('#regEmail').val())) {
        $('#regEmail').addClass('wrong');
        $('#regEmail').attr("placeholder", "missing email");
        error = true;
    }
    if (!$('#regUser').val()) {
        $('#regUser').addClass('wrong');
        $('#regUser').attr("placeholder", "missing username");
        error = true;
    }
    if ($('#regPassword').is(':visible')) {
        if (!$('#regPassword').val()) {
            $('#regPassword').addClass('wrong');
            $('#regPassword').attr("placeholder", "missing password");
            error = true;
        }
    }
    var random = 0;
    var infinit = 0;
    var color = 0;
    if ($('#randomOn').hasClass('switchOn')) {
        random = 1;
    }
    if ($('#infinitOn').hasClass('switchOn')) {
        infinit = 1;
    }
    if ($('#backgroundOn').hasClass('switchOn')) {
        color = 1;
    }
    if (!error) {
        var data = {
            'username': $('#regUser').val(),
            'email': $('#regEmail').val(),
            'password': $('#regPassword').val(),
            'random': random,
            'infinit': infinit,
            'color': color
        }
        var url = 'service/createUser.php';
        if ($('#btnCreateUser').attr('type') == 'update') {
            url = 'service/updateUser.php';
            data.token = localStorage.getItem('token');
        }
        
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function(response) {
                if (!response.err) {
                    if (response.token) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('id', response.id);

                    }
                    if ($('#fileToUpload').val() === '') {
                        $('#iconSlider').removeClass("fa-sliders").addClass("fa-user-circle");
                    }
                    $('#regUser').attr('readonly', true);
                    $('#regUser').css('border', 'none');
                    $('#regPassword, #btnCreateUser, #anonyme').hide();
                    $('.reg, #logout, #btnResetPwd').show();
                    uploadImage(localStorage.getItem('token'));
                }
            },
        });
    }
});
//-------------------------------------------------------------------------------
// [EVENT] UPLOAD AVATAR
//------------------------------------------------------------------------------- 
$(document).on('click', '.userIconLogin', function(e) {
    $('#fileToUpload').click();
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK A SWITCH
//------------------------------------------------------------------------------- 
$(document).on('click', '.swtichContainer', function(e) {
    switch (this.id) {
    case 'switchRandom':
        if ($('#randomOn').hasClass('switchOn')) {
            $('#randomOn').removeClass('switchOn');
            $('#randomOff').addClass('switchOn');
            random = false;
        } else {
            $('#randomOff').removeClass('switchOn');
            $('#randomOn').addClass('switchOn');
            random = true;
        }
        break;
    case 'swtichInfinit':
        if ($('#infinitOn').hasClass('switchOn')) {
            $('#infinitOn').removeClass('switchOn');
            $('#infinitOff').addClass('switchOn');
            infinit = false;
        } else {
            $('#infinitOff').removeClass('switchOn');
            $('#infinitOn').addClass('switchOn');
            infinit = true;
        }
        break;
    case 'switchBackground':
        if ($('#backgroundOn').hasClass('switchOn')) {
            $('#backgroundOn').removeClass('switchOn');
            $('#backgroundOff').addClass('switchOn');
            bcolor = false;
        } else {
            $('#backgroundOff').removeClass('switchOn');
            $('#backgroundOn').addClass('switchOn');
            bcolor = true;
        }
        break;
    default:
        console.log('allo');
        break;
    }
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK DELETE QUESTION SET
//------------------------------------------------------------------------------- 
$(document).on('click', '.deleteQSet', function(e) {
    $('.delPopUp').show();
});
//-------------------------------------------------------------------------------
// [EVENT] CANCEL DELETION
//------------------------------------------------------------------------------- 
$(document).on('click', '#cancelDel', function(e) {
    $('.delPopUp').hide();
});
//-------------------------------------------------------------------------------
// [EVENT] CONFIRM DELETION
//------------------------------------------------------------------------------- 
$(document).on('click', '#confirmDel', function(e) {
    if ($('.createQForm').is(':visible')) {
        deleteQuestion();
        return;
    }
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/deleteQSet.php',
        type: 'POST',
        data: {
            'qSetId': $('.qSetList').attr('qsetid')
        },
        success: function(data) {
            $('.questions').click();
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
    });
});
//-------------------------------------------------------------------------------
// [EVENT] GET ALL QUESTIONS IN A SET
//------------------------------------------------------------------------------- 
$(document).on('click', '.qTile', function(e) {
    startQ(this.attributes.qsetid.value);
});
//-------------------------------------------------------------------------------
// [EVENT] CLICK OUT OF THE TILE
//------------------------------------------------------------------------------- 
$(document).on('blur', '.inputQTitle', function(event) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        // url: url,
        url: 'service/updateQset.php',
        type: 'POST',
        data: {
            'qsetid': $('.qSetList').attr('qsetid'),
            'qtitle': $('#inputQTitle').val()
        },
        success: function(data) {//  event.target.click();
        //getQuestions( $('.qFormInput').attr('qSetId'));
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
    });
});
//-------------------------------------------------------------------------------
// [EVENT] PLAY QUESTION SET
//------------------------------------------------------------------------------- 
$(document).on('click', '.play', function(event) {
    if ($('.qRun').is(':visible') && !$('.endContainer').is(':visible')) {
        countdown = setTimeout('timer_tick();', 1000);
        $('.fa-play').removeClass('fa-play').addClass('fa-pause');
    } else {
        startQ($('.qSetList').attr('qsetid'));
    }
});
//-------------------------------------------------------------------------------
// [EVENT] ADD QUESTION
//------------------------------------------------------------------------------- 
$(document).on('click', '.addQBloc', function(event) {
    $('.play').hide();
    $('#inputQ').val('');
    $('.qFormInput').attr('qId', '');
    $('.qFormInput').attr('qSetId', $('.qSetList').attr('qsetid'));
    $('.selectTime').val('15');
    $('.createQForm').show();
    $('.questions').hide();
    $('.backIcon').show();
});

//-------------------------------------------------------------------------------
// [EVENT] MODIFY A QUESTION
//------------------------------------------------------------------------------- 
$(document).on('click', '.qSetListItem', function(event) {
    
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getQuestion.php?qId=' + this.attributes.qId.value,
        type: 'POST',
        success: function(data) {
        	$('.play').hide();
   	        $('#inputQ').val(data.question[0].question);
		$('.qFormInput').attr('qId', data.question[0].qId);
		$('.qFormInput').attr('qSetId', data.question[0].qSetId);
		$('.selectTime').val(data.question[0].time);
		$('.createQForm').show();
		$('.questions').hide();
		$('.backIcon').show();
		
		$('textarea').each(function () {
		  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
		}).on('input', function () {
		  this.style.height = 'auto';
		  this.style.height = (this.scrollHeight) + 'px';
		});
		        },
		        error: function(err) {
		            console.log('error' + err.msg);
		        }
		    });
		    
    
    
});
//-------------------------------------------------------------------------------
// [EVENT] GO BACK TO QUESTION LIST
//------------------------------------------------------------------------------- 
$(document).on('click', '.backIcon', function(event) {
    if ($('.qSetListItem').length > 0) {
        $('.play').show();
    }
    $('.createQForm').hide();
    $('.questions').show();
    $('.backIcon').hide();
});
//-------------------------------------------------------------------------------
// [EVENT] CREATE A NEW Q SET
//------------------------------------------------------------------------------- 
$(document).on('click', '#newQSet', function(event) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        // url: url,
        url: 'service/createQset.php',
        type: 'POST',
        data: {
            'qtitle': '',
            'token': localStorage.getItem('token'),
        },
        success: function(data) {
            setQuestions(data);
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
    });
});
//-------------------------------------------------------------------------------
// [EVENT] SAVE A QUESTION
//------------------------------------------------------------------------------- 
$(document).on('click', '#save', function(event) {
    var url = 'service/createQuestion.php';
    if ($("#inputQ").val() === '') {
        $(".backIcon").click();
        return;
    }
    if ($('.qFormInput').attr('qId') != '') {
        url = 'service/updateQuestion.php';
    }
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: url,
        type: 'POST',
        data: {
            'qSetId': $('.qFormInput').attr('qSetId'),
            'qId': $('.qFormInput').attr('qid'),
            'question': $("#inputQ").val(),
            'time': $('.selectTime').val()
        },
        success: function(data) {
            getQuestions($('.qFormInput').attr('qSetId'));
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
    });
});
//-------------------------------------------------------------------------------
// [UTIL] DELETE A QUESTION
//------------------------------------------------------------------------------- 
function deleteQuestion() {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/deleteQuestion.php',
        type: 'POST',
        data: {
            'qSetId': $('.qFormInput').attr('qSetId'),
            'qId': $('.qFormInput').attr('qid'),
        },
        success: function(data) {
            getQuestions($('.qFormInput').attr('qSetId'));
        },
        error: function(err) {
            console.log('error' + err.msg);
        }
    });
}
//-------------------------------------------------------------------------------
// [EVENT] WANT TO DELETE A QUESTION
//------------------------------------------------------------------------------- 
$(document).on('click', '#delete', function(event) {
    if ($('.qFormInput').attr('qId') === '') {
        getQuestions($('.qFormInput').attr('qSetId'));
        return;
    }
    $('.delPopUp').show();
});
//-------------------------------------------------------------------------------
// [UTIL] CALL SERVICE TO GET ALL Q IN A SET 
//------------------------------------------------------------------------------- 
function getQuestions(qSetId) {
    $.ajax({
        contentType: "application/x-www-form-urlencoded",
        url: 'service/getQuestions.php',
        type: 'GET',
        data: {
            'qSetId': qSetId,
//             'token': localStorage.getItem('token');
        },
        success: function(data) {
            if (data.qSet[0].createdBy === localStorage.getItem('id') || data.qSet[0].createdBy === "0") {
            	setQuestions(data);
            }	
            else {
            	startQ(qSetId);
            }
        },
        error: function(err) {
            console.log('error when login ' + err.Text);
        }
    });
}
//-------------------------------------------------------------------------------
// [EVENT] GET ALL QUESTIONS IN A SET
//------------------------------------------------------------------------------- 
$(document).on('click', '.qEdit', function(event) {
    event.stopPropagation();
    getQuestions(this.attributes.qSetId.value);
    window.history.pushState({}, "", "?qedit=" + this.attributes.qSetId.value);
});
//-------------------------------------------------------------------------------
// [EVENT] GET NEXT QUESTION
//------------------------------------------------------------------------------- 
$(document).on('click', '#nextQ', function(e) {
    next_q();
});
//-------------------------------------------------------------------------------
// [EVENT] RESET TIMER
//------------------------------------------------------------------------------- 
$(document).on('click', '#resetTime', function(e) {
    timer_restart();
});
//-------------------------------------------------------------------------------
// [EVENT] KEYPRESS - RESET TIMER or NEXT QUESTION
//------------------------------------------------------------------------------- 
$(document).keypress(function(e) {
    switch (e.which) {
    case 13:
        // Next Question - Return (13)
        next_q();
        break;
    case 32:
        // Restart Timer - Space (32)
        timer_restart();
        break;
    case 110:
        // Doesn't Do Anything, Move Along
        //$('body').append('<div class="egg"><iframe width="420" height="315" src="http://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
        //break;
    }
});
