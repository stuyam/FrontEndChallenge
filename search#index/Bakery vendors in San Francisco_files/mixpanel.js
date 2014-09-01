

$(window.sourcery.notify.wrapCallback(function(){
  (function(c,a){window.mixpanel=a;
    var b,d,h,e;
    b=c.createElement("script");
    b.type="text/javascript";
    b.async=!0;
    b.src=("https:"===c.location.protocol?"https:":"http:")+'//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';
    d=c.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(b,d);
    a._i=[];
    a.init=function(b,c,f){function d(a,b){var c=b.split(".");
    2==c.length&&(a=a[c[0]],b=c[1]);
    a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var g=a;
    "undefined"!==typeof f?
    g=a[f]=[]:f="mixpanel";
    g.people=g.people||[];
    h="disable track track_pageview track_links track_forms register register_once unregister identify name_tag set_config alias people.set people.increment".split(" ");
    for(e=0; e<h.length; e++)d(g,h[e]);
    a._i.push([b,c,f])};
    a.__SV=1.1})(document, window.mixpanel||[]);

  

  var getLoginData = function (data) {
    var loginData = { '$email': data['Email'], '$first_name': data['First Name'], '$last_name': data['Last Name'] }
    $.extend(loginData, data);
    delete loginData['First Name'];
    delete loginData['Last Name'];
    delete loginData['Email'];
    return loginData;
  }
  , track = function (key, eventData) {
    if (mixpanel.track) {
      mixpanel.track(key, eventData);
      mixpanel.people.increment(key + ' Count');
    }
    
    else {
      console.log('Mixpanel logging:', key, eventData);
    }
    
  };
  // Iterates through all elements with a "data-mixpanel"
  $('[data-mixpanel]').each(function (index, mixpanelItem) {
    var mixpanelItem = $(mixpanelItem)
      , key = mixpanelItem.data('mixpanel')
      , eventData = JSON.parse(mixpanelItem.text());
    track(key, eventData);
    if (key == 'Login' || key == 'Invitation Accepted') {
      if (mixpanel.identify) {
        mixpanel.identify(eventData['Email']);
        mixpanel.people.set(getLoginData(eventData));
        mixpanel.name_tag(eventData['First Name'] + ' ' + eventData['Last Name'] + ' <' + eventData['Email'] + '>');
      }
    }
  });

  // Iterates through all elements with a "data-track_click"
  $('[data-track_click]').onevent('click', function (event) {
    var target = $(event.target).closest('[data-track_click]');
    track(target.data('track_click'), target.data('track_data'));
  });

  $('[data-track_change]').onevent('change', function (event) {
    var target = $(event.target).closest('[data-track_change]');
    track(target.data('track_change'), target.data('track_data'));
  });

}));
