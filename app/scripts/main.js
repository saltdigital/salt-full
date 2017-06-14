/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here

  // Navigation Active class
  // =================
    $(function() {
    // add active class to current page menu item
    var currentPage = location.pathname.split('/');
    var pageName = currentPage[currentPage.length - 2];

    // home page - index list item must have "home" id
    if (pageName === ""){
      $('nav li a#home').addClass('active');
    } else  if (pageName ===  pageName){
      $('nav li a#'+pageName).addClass('active');
    }
  });

  // Mobile menu
  // ==========
  var $dropdown = $('.dropdown'),
        $tcon = $('.tcon');

  $tcon.on('click', function() {
    var $this = $(this);

    $this.toggleClass('tcon-transform');
    $this.toggleClass('active');
    $dropdown.toggleClass('active');
  });

  $('.dropdown .contact').on('click', function(){

    $tcon.removeClass('tcon-transform');
    $tcon.removeClass('active');
    $dropdown.removeClass('active');
  });

  // Typed.js
  // ======
  document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["Simple.", "Easy.", "Efficient.", "Effective."],
        typeSpeed: 80,
        loop: true
      });
  });

// Smooth Scroll Anchor
// =================
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});


// ScrollMagic
// =========
if($('body').hasClass('home')) {
  var controller = new ScrollMagic.Controller();

  var tween = new TimelineMax()
    .add([
      TweenMax.to(".left", 0.5, {left: 0, top: -15, rotation: -2, scale: 1.02, ease:Linear.easeNone}),
      TweenMax.to(".right", 0.5, {right: -90, top: 70, rotation: 2, scale: 1.02, ease:Linear.easeNone})
    ]);

  var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
  		.setTween(tween)
  		// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  		.addTo(controller);

  var tween2 = new TimelineMax()
    .add([
      TweenMax.to(".cheese", 0.5, {left: 20, top: -15, rotation: -2, scale: 1.02, ease:Linear.easeNone}),
      TweenMax.to(".butter", 0.5, {right: -180, bottom: -150, rotation: 2, scale: 1.02, ease:Linear.easeNone})
    ]);
  var scene2 = new ScrollMagic.Scene({ triggerElement: "#trigger2" })
  		.setTween(tween2)
  		// .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
  		.addTo(controller);

  var tween3 = new TimelineMax()
    .add([
      TweenMax.to(".jalapeno", 0.5, {left: 30, top: -15, rotation: 2, scale: 1.02, ease:Linear.easeNone}),
      TweenMax.to(".bacon", 0.5, {right: -90, bottom: -20, ease:Linear.easeNone})
    ]);
    var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3" })
        .setTween(tween3)
        // .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);
}

  // Video Javascript
  // ================
  // var vid = document.getElementById('bgvid');
  // var pauseButton = document.querySelector('#saltInfo button');
  //
  // if (window.matchMedia('(prefers-reduced-motion)').matches) {
  //   vid.removeAttribute('autoplay');
  //   vid.pause();
  //   pauseButton.innerHTML = 'Paused';
  // }
  // function vidFade() {
  //   vid.classList.add('stopfade');
  // }
  // vid.addEventListener('ended', function() {
  // // only functional if "loop" is removed
  //   vid.pause();
  // // to capture IE10
  //   vidFade();
  // });
  // pauseButton.addEventListener('click', function() {
  //   vid.classList.toggle('stopfade');
  //   if (vid.paused) {
  //     vid.play();
  //     pauseButton.innerHTML = '<i class="material-icons">pause</i>';
  //   } else {
  //     vid.pause();
  //     pauseButton.innerHTML = '&#9654;';
  //   }
  // });
})();
