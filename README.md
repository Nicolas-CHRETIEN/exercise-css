# A CSS exercise: reproduce a website:

 As I began coding, I first learn HTML, CSS and JavaScript.
 This is an exercise I did to learn CSS.

 Main goals:

   - Learn how to construct the HTML to have a nice responsive finish
   - Understand CSS flexbox layout
   - Construct full responsive pages with media queries
   - Create some animations and transitions



## responsive pages:

To get a responsive design, I started from the narrowest screen:

![home-responsive](https://github.com/Nicolas-CHRETIEN/exercise-css/assets/132827127/ca27e2a3-1495-46ef-af69-dd954a5efc8e)

To make it look nice I divided the HTML in many elements and I set CSS container's style with a flex display. Then I reduced width of all elements inside.
I created a burger menu on the navbar save some place and I modified the carrousel to show only 1 image at a time.




The more screen width increase, the more changes are made with media queries:

![home-responsive-2](https://github.com/Nicolas-CHRETIEN/exercise-css/assets/132827127/af8a549f-e527-48f2-a0b9-5c280493a7f4)

Here there are now two images showed at a time on the carousel. 
The navbar doesn't have burger menu, all links are visible.
The div are now placed side by side.



If the screen width is even more important you obtain this result:

![home](https://github.com/Nicolas-CHRETIEN/exercise-css/assets/132827127/3d6c07ae-33b0-4d5f-80fb-d5695169eb77)

Four images at a time are visible in the carousel and the main width is reduced.



## Transitions and animations:

To train myself I created some animations and transitions.



https://github.com/Nicolas-CHRETIEN/exercise-css/assets/132827127/09e0a976-5a7f-4a3a-9b9d-877c396abd78



### The carousel:

I created a carousel with an animation to show all the images in 22 seconds.
between each image I froze the movement to let the image static for 1 second.


### Images in the carousel:
I add a hover to change images scale when the cursor is above.
I also changed the opacity to show the text with the image name behind.



### The share animation:

I started with a Facebook logo as background and I created an animation to replace it every 2 second with another logo.



