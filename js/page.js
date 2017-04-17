$(function() {
    
    //MAIN MENU
    var menuItemsTop = [
        {title : 'Extension', icon: 'icons/ic_extension_white_24px.svg', isSpecial: "special"},
        {title : 'Guestbook', icon: 'icons/ic_person_white_24px.svg', isSpecial: ""},
        {title : 'Monetization', icon: 'icons/ic_monetization_on_white_24px.svg', isSpecial: ""},
        {title : 'Local dining', icon: 'icons/ic_local_dining_white_24px.svg', isSpecial: ""},
        {title : 'Notifications', icon: 'icons/ic_notifications_white_24px.svg', isSpecial: ""}
    ];
    
    var menuItemsBottom = [
        {title : 'Room service', icon: 'icons/ic_room_service_white_24px.svg'}
    ]
    
    $('#menuButtonSmallResolution').click(function(e){
        $('#mainMenuHolder').fadeToggle();
    })
    
    function generateMenu () {
        var s = '';
        for (var i in menuItemsTop) {
            var isSelected = '';
            if( i == 1) {
                isSelected = 'selected';
                $('h1').html(menuItemsTop[i].title);
            }
            s += '<li class="iconButton ' + menuItemsTop[i].isSpecial + ' ' + isSelected + '">' + '<img src="' + menuItemsTop[i].icon + '">' + '<span>' + menuItemsTop[i].title +  '</span></li>';
        }
        $('#mainMenuHolder .menu.top').html(s);
        var s = '';
        for (var i in menuItemsBottom) {
            s += '<li class="iconButton ' + menuItemsBottom[i].isSpecial + '">' + '<img src="' + menuItemsBottom[i].icon + '">' + '<span>' + menuItemsBottom[i].title +  '</span></li>';
        }
        $('#mainMenuHolder .menu.bottom').html(s);
        
        $('#mainMenuHolder .menu li').click(function(e){
            $('#mainMenuHolder .menu li').removeClass('selected');
            $(this).addClass('selected');
            $('h1').html($(this).find('span').text())
            if($('#menuButtonSmallResolution').css('display') == 'block'){
                $('#mainMenuHolder').fadeToggle();
            }
        })
    }
    generateMenu();
    
    
    //SUBMENU
    var subMenuItems = [
        {title : "Alpabetically"},
        {title : "Latest added"},
        {title : "VIP"}
    ]
    
    function generateSubMenu(){
        var s = '';
        for (var i in subMenuItems) {
            if(i == 0 ) {isSelected = 'selected'} else {isSelected = ''}
            s += '<li class="' + isSelected + '">' + subMenuItems[i].title + '</li>';
        }
        $('#subMenu').html(s);
    }
    generateSubMenu();
    $('#subMenu li').click(function(e) {
        $('#subMenu li').removeClass('selected');
        $(this).addClass('selected')
    })
    
    //ALPHABET
    function generateAlpabetButtons () {
        var ar = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
        var s = '';
        for (i in ar) {
            if(i == 0 ) {isSelected = 'selected'} else {isSelected = ''}
            s += '<a class="' + isSelected + '"><span>' + ar[i] + '</span></a>';
        }
        $('#contactAlphabetHolder div').html(s)
    }
    generateAlpabetButtons();
    $('#contactAlphabetHolder a').click(function(e) {
        $('#contactAlphabetHolder a').removeClass('selected');
        $(this).addClass('selected')
    })
    
    //USERS
    var users = [
        {name: 'Abel Risto', phone: '123-345435'},
        {name: 'Allik Peeter', phone: '34234-435345432'},
        {name: 'Andrzej Prud', phone: '34324-4376547'},
        {name: 'Annilo Tarmo', phone: '32432-435245'},
        {name: 'Anniste Allan', phone: '43543-23454'},
        {name: 'Arge Virgo', phone: '546-5653465'},
        {name: 'Aron Hannes', phone: '54654-5465346'},
        {name: 'Aron Raido', phone: '76876-342523'},
        {name: 'Aron Ralf', phone: '4353-65476'},
        {name: 'Atonen Meelis', phone: '32432-4354235'},
        {name: 'Aun Martin', phone: '453-3452435'},
        {name: 'Blazevics Martins', phone: '3432-342523'}
    ]
    
    function generateUsers() {
        var s = '';
        for (var i in users) {
            if(i == 0 ) {isSelected = 'selected'} else {isSelected = ''}
            s += '<a class="' + isSelected + '">' + '<span class="username">' + users[i].name + '</span><span class="detail">' + users[i].phone +  '</span>' + '</a>';
        }
        $('#usernameList').html(s);
    }
    generateUsers();
    
    //MIN RESOLUTION VIEW SWITCH
    $('#usernameList a').click(function(e) {
        $('#usernameList a').removeClass('selected');
        $(this).addClass('selected');
        if($('#userInfoHolder').css('display') != 'block') {
            $('#userInfoHolder').css('display', 'block');
            $('#mainCloseButton').css('display','inline-block');
        }
    })
    
    $('#mainCloseButton').click(function(e){
        $('#userInfoHolder').css('display', 'none');
        $('#mainCloseButton').css('display','none');
    })
});