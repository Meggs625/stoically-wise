<div align="center"><img src="https://user-images.githubusercontent.com/78767067/134835308-b6796af7-c9ba-4c1d-834a-96d22147dd6e.png" height="150px" width="auto"
/><h1>Daily Wisdom</h1>
<p>An application to dive into quotes from stoic philosophers</p>
<h2><a href="https://meggs625.github.io/stoically-wise/#/">View Deployed Site Here</a></h2>
</div>

---

[Summary](#summary) |
[Tech Used](#tech-used) |
[Getting Started](#getting-started) |
[Current Features](#current-features) |
[Future Features & Noteworthy Limitations](#future-features-&-noteworthy-limitations) |
[Preview](#preview) |
[Reflection](#reflection) |
[Contributors](#contributors) |
[Organizational Tools](#organizational-tools)
 
---

### Summary
When a user first arrives at the application, they will be greeted by a landing page asking for a theme. The theme will be for what photos will appear with the quotes on the next page. Once a theme has been entered, upon selecting the "Enter" button, the user will navigate to a page displaying a random quote from a well known stoic philosopher. The background will be a photo of the theme selected on the previous page. 

If there is a quote or photo that speaks to the user, they can select the "+" button in the upper right hand corner of the quote card to store for later. Upon favoriting, a new random quote and photo will display for continued viewing. 

When the user has favorite quotes, they can view them by selecting the "View Favorites" link in the navigation bar. All saved quotes will render on this page. They are all stored in the localStorage of the user's machine to persist upon refresh. Should a user no longer wish to retain a quote, they can select the "-" button in the upper right hand side of the quote card to remove it from the page and storage. The user can navigate back to the quote page or to select a new theme in the navigation bar. 

After one theme has been selected, when the user returns to the landing page, a new button will appear with the option to get a quote with the same theme as requested prior. 

 
### Tech Used
JavaScript | CSS | React | React Hooks | ReactRouter | Cypress/E2E | fetchAPI |  

---
### Getting Started
1. Clone down this repo [stoically-wise](https://github.com/Meggs625/stoically-wise)
2. Then ```cd``` into the directory
3. Run ```npm install```
4. Run ```npm start```
5. Paste this: ```http://localhost:3000/``` into your browser


[Return to top](#Daily-Wisdom)

### Current Features
- Users can select a photo theme to view with their random quotes.
- User's saved quotes will persist on reload with implemented localStorage for an enhanced user experience. 
- Users can remove any selected quote from their saved list.
<br>


### Future Features & Noteworthy Limitations
- Add a button to the quote display page to allow the user to move to another random quote without having to favorite the current quote. 
- A search bar could be added to the favorites page to allow the user to find quotes saved by a specific author or with a particular keyword.


### Preview
![recording (15)](https://user-images.githubusercontent.com/78767067/134951822-5a4b5ffd-4c3b-43bb-9cd3-6cd1c0f0e6b4.gif)
![recording (16)](https://user-images.githubusercontent.com/78767067/134951962-aad8f6b8-9b52-4697-be52-50b65e8049c1.gif)
![recording (17)](https://user-images.githubusercontent.com/78767067/134952090-f4f2368f-2b2d-4d14-bcb7-bb79b60e9c3a.gif)
![recording (18)](https://user-images.githubusercontent.com/78767067/134952269-baf4aa7e-690a-40b6-9e9a-c101838cec03.gif)


Built with fully responsive design

![Screen Shot 2021-09-27 at 11 13 24 AM](https://user-images.githubusercontent.com/78767067/134955164-7bc072bb-fbe9-4ce5-a9d6-bc173df33bc7.png)
![Screen Shot 2021-09-27 at 11 13 53 AM](https://user-images.githubusercontent.com/78767067/134955181-0f5c6151-f22f-49ba-a9c0-bb4d19cc29f1.png)

[Return to top](#Daily-Wisdom)
---

### Organizational Tools
##### * [Find Project Spec Here](https://frontend.turing.edu/projects/module-3/showcase.html)
##### * [GitHub Project Board](https://github.com/Meggs625/stoically-wise/projects/1)
##### * [Wireframe](https://miro.com/app/board/o9J_lv9GRtc=/)

---

### Reflection

This project felt like a great way to end the third term at the Turing School of Software and Design. There were some challenges that popped up. The first was being able to find a public API that worked as I hoped reliably. In the end, I was able to find two that were user friendly with great documentation, allowing me to use them as I had hoped. Another challenge I faced was in the organization of my components. My original MVP did not include a favoriting feature. When I decided to move in that direction, I had to reorganize components and improve their structure. 

Overall, I felt that I learned from the challenges and enjoyed building this application. My biggest win was adding a feature beyond my MVP and successfully allowing a user to store favorites that will persist on page refresh. Two additional personal goals I had for this project were to give it a fully responsive design and to score above a 95 on the Lighthouse accessibility report - both of which I'm happy to say I was able to achieve. 

I have really enjoyed learning how to use React and feel like this project solidified some concepts for me with both React (component structure, utilizing hooks, including API async fetches for data, and gaining comfort with JSX) and React Router (appropriately using Link and nestling Routes within a Switch for error handling). 


<br>


---
### Contributors
[Megan McBride](https://github.com/Meggs625) <br>



---

[Return to top](#Daily-Wisdom)

