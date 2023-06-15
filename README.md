# CI_PP2_E_SPORTS_QUIZ
An interactive E-Sports quiz to showcase some learnings in Javascript. The goal of the site is to provide a challenging quiz to entertain online users.

The E-Sports Quiz is a simple game put together to test your knowledge of the world of E-Sports. A set of 20 questions with multiple choice answers with a tactile response and feel to test
just how deep in you really are!

![responsive_1](assests/Images/responsive_1.png)

## Features 

Some of the features we wanted to hightlight here include:

-A score tracking system

-Feedback on result

-Tactile response for the player

- __A score tracking system__

  - Over a number of iterations, which I'll touch on in bugs, it was settled on a discreat score tracking system that would give your result only at the end of the quiz. The idea
  being that you could always come back and attempt to beat your score.

![Screenshot_20230615_043903_Chrome.jpg](assests/Images/Screenshot_20230615_043903_Chrome.jpg)

- __Feedback on result__

  - We also wanted to give feedback on your given score to perhaps encourage you to try again were you not hasppy with the result. you can see how the response if built to be different dependind your your result.

![feedback_feature.png](assests/Images/feedback_feature.png)

- __Tactile response for the player__

  - We wanted the quiz to feel a little more tacil than simply a checklist. To aid in this we added some colour changed to the multiple choice buttons to help you feel your effecting the game.

![Screenshot_20230615_043843_Chrome.jpg](assests/Images/Screenshot_20230615_043843_Chrome.jpg)

### Features Left to Implement

- I would have liked to include some audio to accompany the quiz at the end along side your result. 

## Testing 

The quiz was tested on the following browsers and devices:

Alienware Desktop PC
Google Chrome:
![chrome.png](assests/Images/chrome.png)
Opera:
![opera.png](assests/Images/opera.png)


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)