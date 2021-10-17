# Tymeshift React Challenge

## This project is live! ➡️ https://amitrambaran.me/acme-locations/

<br>

## Starting the project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries/packages used

- ## axios
  fetches data from the provided endpoint; lightweight and auto parses response
- ## moment.js
  parses timestamps (relative to the user's timezone)
- ## styled-components
  allows styling of individual components in a modular fashion while only using styles that are required

## Improvements moving forward

- Using a store of some sort - whether it be `Redux`, a `useReducer()` hook or even the `Context API` would eliminate having to pass props two levels deep. For the current functionality of this app, standard prop passing is fine and will work for large amounts of data. However, if more features were to be implementedfor future use, a general store would be easier to follow.
  
- Improving accessibility - as I am very passionate about everyone being able to have a pleasant experience on the web, accessibility of the app could be improved. Although the modal is fully accessible and can be closed by clicking on the dark area outside the window, I would allow users to open cards via keyboard actions and have CSS related to hovering activate accordingly (eg. hitting 'Enter' to open a focused card)
  
- Styling - I followed the design pretty closely, but in a real scenario I would probably get a designer's approval to implement smoother animations on hover/click of various elements. I would also transition all pixel values to REMs for better compatibility, but for the purposes of this assesment I used pixels to showcase my attention to detail.
  
- Error handling - currently there is a try/catch block with an async axios request which throws an error to console if axios cannot fetch. Showing a conditional error to the user would be an addition that would make for a better UX. For now, it displays "Loading..." when waiting for data to be fetched.

- Testing - I would write a few tests to verify the integrity of opening modals and possibly verifying some location data as the app got bigger. 

### Overall, there are many more smaller considerations to be made to improve the robustness of this app, as is the nature of software development. With that being said, in it's current state, my solution meets all requirements and can work for an arbitrary size of data without major performance issues. Looking forward to your feedback! 😊