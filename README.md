<div align="center"><img src="https://user-images.githubusercontent.com/76507607/134072647-5696a32a-19a9-4db9-bf24-f5c5751f11b7.png" height="150px" width="280px" alt="logo"/><h1>Daily Wisdom</h1>
<p>An application to dive into quotes from stoic philosophers</p>
<a href=>View Deployed Site Here</a>
</div>



---

[Summary](#summary) |
[Tech Used](#tech-used)
[Getting Started](#getting-started) |
[Current Features](#current-features) |
[Future Features & Noteworthy Limitations](#future-features-&-noteworthy-limitations) |
[Preview](#preview) |
[Reflection](#reflection) |
[Contributors](#contributors) |
[Organizational Tools](#organizational-tools)
 
---

### Summary
When a user first arrives to the application, they will be greeted by a landing page asking for a theme. The theme will be for what photos will appear with the quotes on the next page. Once a theme has been entered, upon selecting the "Enter" button, the user will navigate to a page displaying a random quote from a well known stoic philosopher. The background will be a photo of the theme selected on the previous page. 

If there is a quote or photo that speaks to the user, they can select the "+" button in the upper right hand corner of the quote card to store for later. Upon favoriting, a new random quote and photo will display for continued viewing. 

When the user has favorited quotes, they can view them by selecting the "View Favorites" link in the navigation bar. All saved quotes will render on this page. They are all stored in the localStorage of the user's machine to persist upon refresh. Should a user no longer wish to retain a quote, they can select the "-" button in the upper right hand side of the quote card to remove it from the page and storage. The user can navigate back to the quote page or to select a new theme in the navigation bar. 

After one theme has been selected, when the user returns to the landing page, a new button will appear with the option to get a quote with the same theme as requested prior. 

 
### Tech Used
JavaScript | CSS | React | ReactRouter | Cypress/E2E | fetchAPI |  

---
### Getting Started
1. Clone down this repo [stoically-wise](https://github.com/Meggs625/stoically-wise)
2. Then ```cd``` into the directory
3. Run ```npm install```
4. Run ```npm start```
5. Paste this: ```http://localhost:3000/``` into your browser


[Return to top](#Daily-Wisdom)

### Current Features
- User can select a photo theme to view with their random quotes.
- User's saved quotes will persist on reload with implemented localStorage for an enhanced user experience. 
- User can remove any selected quote from their saved list.



### Future Features & Noteworthy Limitations
- Add more pages for the user to visit. Including pages about launch information, crew, and other SpaceX information will help round out the user experience. 
- Include more animations such as a comet or shooting star.
- Improve the styling of the navigation buttons for more specific indications for which page is currently visible. 


### Preview
![recording (12)](https://user-images.githubusercontent.com/78767067/134087755-7ea2dffa-a15e-4f8c-980e-8b74d52b972d.gif)
![recording (13)](https://user-images.githubusercontent.com/78767067/134087779-63154a32-aae2-4360-aa36-adccdb0e5472.gif)
![recording (14)](https://user-images.githubusercontent.com/78767067/134087805-0a4a2ca9-06f3-43b6-90d3-5ef1d84ecb1f.gif)



[Return to top](#The-NXT-Frontier)
---

### Organizational Tools
##### * [Find Project Spec Here](https://frontend.turing.edu/projects/module-3/stretch.html)
##### * [GitHub Project Board](https://github.com/madhaus4/spacex-stretch/projects/1)
##### * [Wireframe](https://www.figma.com/file/SsEdk6veCtktP7uK2C5RVx/Space-X-Stretch?node-id=0%3A1)
##### * [Inspiration Board](https://www.notion.so/Inspiration-Board-d0800da793b84a3695811c45d72b800f)

---

### Reflection
This project was an opportunity to challenge us to self-teach two technologies we had not yet experienced: Progressive Web Application and GSAP animations. We had 9 days to build a React application MVP, as well as dive into learning these two technologies. We successfully implemented our application as a PWA after a lot of trial and error and collaboration with fellow teammates. After diving in, we still feel that we have only scratched the surface of how to manage a PWA, but are very excited that we chose this tech to better understand how to give users a more level playing field when it comes to internet accessibility as a whole. 

In addition to PWA, we were also able to include two feature animations: a rocket launch and twinkling star background. The learning curve from what we expected (mostly CSS based work instead of JavaScript) was more time consuming than planned and caused us to scale back the animations that we originally aspired for. There is still room for modification as we continue to learn more about this tech and it's possibilities. It was thrilling to dabble in this unique tech and get a better understanding about how it works, as they are a way to make a website standout and captivate the user.

Overall, we are ecstatic with the MVP and product we achieved. The three of us worked extremely well together, balancing project expectations with our personal ideas that we wanted to explore. While striving to gain a basic understanding of a new tech, we all supported and encouraged each other and our learning. At the end of the day, this project had its challenges, but because we enjoyed each other's company, collaboration remained smooth and the project was ultimately a success. 
<br>


[Return to top](#The-NXT-Frontier)

---
### Contributors
[Maria DelSignore](https://github.com/madhaus4) <br>
[Steven Berg](https://github.com/saberg1) <br>
[Megan McBride](https://github.com/Meggs625) <br>



---

[Return to top](#spacex-stretch)

