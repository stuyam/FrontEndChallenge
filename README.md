FrontEndChallenge
=================

Sourcery front end developer challenge

###Update: 
I added a 3rd branch called "master-with-animation" which is almost the same as option 1 however is slide the content down and is animated for a little better UX

I built two options using css and tapped into the current js implimentation to show and hide certian parts of the search depending on the size of the screen.

####Option 1 (master branch)
This option adds a search button next to the phone button. When you tap it, it displays the search options under the nav bar. The advantage to this is that it is not ver invasive to the screen, and it is only there if you need it.

![Screenshot1](screenshots/1.png)
![Screenshot2](screenshots/2.png)

####Option 2 (lightbox-search branch)
This option uses the same search button as option 1 but when you tap it, it fades in a "light box" that covers the screen and diplays nothing but the search information. To close the search you tap the "x" in the top left corner of the page. The downside to this is that you have to close the light box before scrolling down the page.

![Screenshot1](screenshots/3.png)
![Screenshot2](screenshots/4.png)

####Background Image
Another thing to notice between the option 1 and option 2 is the positioning of their background images. Option 2 is the same background that the page currently uses to position the background. However in option 1, I removed the javascript file background_resize.js which handled positioning of the background, and replaced it with a couple lines of css that use the "background-size:cover;" code to always keep the background image centered, covering the background, and at an appropriate ratio. It also fits the image better than the orinial way as you can see between option 1 and 2.
