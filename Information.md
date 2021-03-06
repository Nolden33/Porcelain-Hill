# Common Themes for the project 
## First things first... ***DONE***
For right now, we are working on the hard coding the HomePage only. We will put:
1) a small Bio
2) Contact info 
3) Show dates
4) and a few music videos
5) also a under construction sign below the nav bar but above the info listed above.
## Secondly... ***HERE***
### Adjusting the Components 

### Which Database?
Later when we decide on a backend database, we will start adding to the different component pages of the website. We can divide up the responsibilites and create the different components of the page. \
To make the database live we need to use azure or netlify (azuse is more common on applications)

### Admin section
We need to establish an admin separation before we continue. The admin section will be added so that the band members can make changes to their page without having to contact us for help. 
1) This section will require a login for the band members
2) Will need an Admin Home page
3) add Admin Home page to navbar when an admin is logged in
4) Admin Home page will need name of current user at top, analytics, a list of all possible admins (with ONLY EDIT AND DELETE buttons) and a change password button.
5) Later, we will need to add extra forms and buttons (like add, edit and delete buttons) to almost all components that allow the band to make changes
6) All API responses will have toastrs as extra verification for admin

#### Home Page 
1) All the routes will have a `base_____Col.jsx` component (will be written as `Base` on this page).
2) Will need to create a `Base` for the most recent FB and IG post on the Homepage.
#### Bio/About Page
1) `Base` added to page already
2) Gather more information for the Band to fill the page more. 
#### Shows Page
1) `Base` added to page already
2) Will need a formik to add shows to the page
3) Venues' Name should be a clickable link to that venue's website
4) All shows need to be in order by upcoming date.
5) eventually the `Base` being sent to the homepage will need to be paginated with the 8 most upcoming shows
6) the Shows page will show the `Base` 8 and all shows after the `Base` 8
7) when the actual date passes the shows date, then the show need to be automatically deleted.
#### Music/Photos Page
1) `Base` for music added to page already
2) No need for a photos `Base` in home page
3) Will combine music and photos 
4) need to switch Mucis tab in navbar to Music/Photos
5) band wants a Spotify demo player at the top of this page. it is on their previous website
#### Social Media Page
1) Band wants a page for their social medias. some people are not on social medias and they want a spot on their website where those people can follow their socail media posts.
2) I think FaceBook and Instragram will be enough
3) these posts will be paginated 
4) need to add this as a tab in the navbar 
5) need to create a `Base` for the most recent FB and IG post on the Homepage (one for each site).

## Themes
1) ALL .css FOR THIS PROJECT WILL GO IN THE App.css FILE.
2) Background color: Black
3) Text color: White 
4) Font Type: PT Serif  -> https://fonts.google.com/specimen/PT+Serif
5) Font Size: Standard
6) Everything on the home page will be centered with margins on each side.
7) All routes in the App.jsx (except for Merch) will have a Component with a `base_____Col.jsx`, this base will show on both the Homepage and the respective route's page.
8) Responsive at LG size 
9) (possible Carousel for pictures)
## Bio
      Porcelain Hill is an American Rock band, often Expressing elements of
      blues, classic rock, and soul. Formed in 2013 out of Southern
      California, the band is Centered around core members, Singer/guitarist
      Darnell "Big D" Cole, Bassist Jakob Parnham, and Drummer "Wildfire"
      Campos. From performing Small, local backyard gigs, to sharing stages
      with the likes of Iron Butterfly, or touring internationally and
      performing with Walter Trout, The Unsigned, independent group is on a
      mission to spread their gospel of Rock and Roll, and positive vibes.
## ShowDates
      6/3 perqs, Huntington Beach 
      6/4 Chain reaction, Anaheim 
      6/23 James Joyce, Santa Barbara
      7/1 Berkeley Untapped,  Denver CO
      7/2 146 Taphouse, Salida CO
      7/7 Cutting room, New York NY
      7/9 Kingfish, Fayetteville AR
      7/14 Deep ellum Art Co, Dallas TX
      7/17 Yucca Taproom, Phoenix AZ
## Music Videos
They sent four videos to us. Depending on space available and size of videos, we can decide on how many to put:
1) https://www.youtube.com/watch?v=M5kqi_jQyn4 
2) https://www.youtube.com/watch?v=T-dvKTaqBDs
3) https://www.youtube.com/watch?v=nQARPVH2IiQ
4) https://www.youtube.com/watch?v=fSEs5_-AAsk
## Contact Info
1) Primary: Porcelainhill@gmail.com
## Social Medias 
1) IG: @Porcelainhillofficial
2) FB: www.facebook.com/PorcelainHill
3) Linktr.ee: https://linktr.ee/porcelainhill?fbclid=IwAR2TdarqLcgkgba4kPBY0Tk1PlhUHJReaGHwAVz5C7NRFXdDaslHoq0PcBw
4) YouTube: https://www.youtube.com/c/PorcelainHill
5) Bandcamp: https://porcelainhill.bandcamp.com/?fbclid=IwAR2F8zkACZrPDMpF_mPwwuF3mi6KuCfMOLzZCDALRDDrhUS5nvJps_Id8ds
6) Spotify: https://open.spotify.com/artist/4uQubakVAN2w1cFW2hRBco
7) AppleMusic: https://music.apple.com/us/artist/porcelain-hill/839744050?fbclid=IwAR1t195EwQS7ImIkFfRscwY-r7ScLMrj-SpYgGvQUFspFAopsE5qYjtyk2s
## Helpful Links Associated with the Band
1) website to merch: https://skullprint.co.uk/shop/ols/categories/porcelain-hill
2) website for showdates: https://www.songkick.com/artists/9104889-porcelain-hill/calendar?fbclid=IwAR0OvjhTQU_PiLSGFG2B1zXYnPZlm1UllLSFVhrCEDebc8eQESLOpRyWjIg 
3) website for pictures: https://next.photobucket.com/u/PorcelainHill?login=true&overcount=true&overspace=true&overstorage=true&planId=expert-monthly
      Username: PorcelainHill 
      Pw: Elemenohpee123!
## Other Bands' Pages For References
1) Porcelian Hill's first website: https://porcelainhill.com/
2) Doctor Victor: https://doctorvictor.com/?fbclid=IwAR2gAQWaJzxw02y0E-g0YU1YG7b50hjVenoJNH3Xd1ziqnQWYh3VCHYMljo
3) King Buffalo: https://kingbuffalo.com/?fbclid=IwAR07hMqwN_FGRQHpfgkdzJbxzxHWDOJ17Ufxjh9HcSvazxTUA2uyB8n9Iyo
4) Rival Sons: https://www.rivalsons.com/?fbclid=IwAR17ciEu5uZW4wthZGF8HtqPF0DvYL4Y0MIYNNudUciWKyUeVnc9D5wCR4Y
