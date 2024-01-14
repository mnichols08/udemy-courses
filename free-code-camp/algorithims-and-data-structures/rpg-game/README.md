## Learn JavasScript by Building a Role Playing Game

Step 1
JavaScript is a powerful language which allows you to build websites that are interactive.

To get started, create your standard HTML boilerplate with a DOCTYPE, html, head, and body, then add a meta tag for the charset. Add a title element and use the text RPG - Dragon Repeller for it. Include a link tag for your stylesheet to link the styles.css file.

Finally, create a div element with id set to game within your body.

Step 2
Create four div elements within your #game element. Give them the following respective id values, in order: stats, controls, monsterStats, and text.

Step 3
Create three span elements within your #stats element. Give each of them the class stat. Then give the first one the text XP: 0, the second one the text Health: 100, and the third one the text Gold: 50.

Step 4
Wrap the numbers 0, 100, and 50 in span elements, and wrap those new span elements in strong elements. Then give your new span elements id values of xpText, healthText, and goldText, respectively.

Step 5
For your #controls element, create three button elements. The first should have the id set to button1, and the text Go to store. The second should have the id set to button2, and the text Go to cave. The third should have the id set to button3, and the text Fight dragon.

Step 6
Similar to your #stats element, your #monsterStats element needs two span elements. Give them the class stat and give the first element the text Monster Name: and the second the text Health: . After the text in each, add a strong element with an empty nested span element. Give the first inner span element an id of monsterName and the second inner span element an id of monsterHealth.

Step 7
Give your #text element the following text:
`Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.`

Step 8
Now we need some quick styling. Start by giving the body a background-color set to #0a0a23.

Step 9
Give the #text element a background-color of #0a0a23, a color of #ffffff, and 10px of padding on all sides.

Step 10
Give your #game a maximum width of 500px and a maximum height of 400px. Set the background-color to #ffffff and the color to #ffffff.

Use margins to center it by setting the top margin to 30px, bottom margin to 0px, and the left and right margin to auto.

Finally, give it 10px of padding on all four sides.

Step 11
Using a selector list (selector1, selector2) give both your #controls and #stats elements a border of 1px solid #0a0a23, a #0a0a23 text color, and 5px of padding.

Step 12
Give your #monsterStats element the same border and padding as your #stats element. Set its color to #ffffff and give it a #c70d0d background.

Step 13
For now, hide your #monsterStats element with the display property. Do not change any of the other styling.

Step 14
Next, give your .stat elements a padding-right of 10px.

Step 15
Finally, you will need to add some styles for your buttons. Start by setting the cursor property to pointer. Then set the text color to #0a0a23 and the background-color to #feac32.

Then set the background-image property to linear-gradient(#fecc4c, #ffac33). Lastly, set the border to 3px solid #feac32.

Step 16
Now you can start writing your JavaScript. Begin by creating a script element. This element is used to load JavaScript into your HTML file. You should use an opening `<script>` and closing `</script>` tag.

Step 17
One of the most powerful tools is your developer console. Depending on your browser, this might be opened by pressing F12 or Ctrl+Shift+I. On Mac, you can press Option + ⌘ + C and select "Console". You can also click the "Console" button above the preview window to see our built-in console.

The developer console will include errors that are produced by your code, but you can also use it to see values of variables in your code, which is helpful for debugging.

Add a console.log("Hello World"); line between your script tags. Then click the "Console" button to open the console. You should see the text Hello World.

Note how the line ends with a semi-colon. It is common practice in JavaScript to end your code lines with semi-colons.

Step 18
Before you start writing your project code, you should move it to its own file to keep things organized.

Remove your console.log("Hello World"); line. Then give your now empty script element a src attribute set to ./script.js.

Step 19
Your view has been switched to your new script.js file. Remember that you can use the tabs above to switch between files.

Add your console.log("Hello World"); line to this file, and see it appear in your console.