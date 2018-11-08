## VONQ test assignment

This project objective is to implement a form as described in the [VONQ Front end developer test assignment](https://github.com/vonq/front-end-developer-test-assignment)

### Notes
- I used [Create React App](https://github.com/facebook/create-react-app) for time reasons and for being a basic form.
- Chosen to add Redux because I think it makes it easier to organize the status of the application, even for a small form like this.
- There are no big CSS frameworks being used. I thought for a while in trying something very light like [PureCSS](https://purecss.io/) or [Skeleton](http://getskeleton.com/)
- I tried to follow the BEM methodology in my CSS. I also added SCSS because it makes it really easy to read and identify the attributes.
- I didn't add React Router as there's really only one form in display (in two separate states)
- The only React Class component that I used was for the Input component. I wanted to encapsulate its behavior in an orderly fashion (adding some regex validation). I questioned myself if I've included the error message as part of the Input, but this could be added later to have a more robust component.
- Validation for the form is done manually for each field.

### Future work
- Validation is definitely not in grasp of the versitality of the rest of the code. This could be fixed by creating a whole validation util. There are third party solutions like (Joi)[https://github.com/jeffbski/joi-browser] that have helped me in larger projects.
- Adding a CSS framework would definitely help managing viewports. Usually the Input fields feel a little bigger in small viewports. I'm aware this can be done natively with CSS but it's sometimes hard to mantain.
- Integration tests. While I added tests for every component and function in the reducer, there's no integration tests for the whole application behavior. I do think that for this specific application they are not entirely necesary, as every change in the store can be easily tested with the reducer and checking if the behavior on the view is as expected.
- Make the ui components more robust.

### npm tasks 

In the project directory, you can run:
#### `npm start`
#### `npm test`
#### `npm run build`

