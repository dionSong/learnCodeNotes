//NOTAS

//JQuery

/*jQuery often selects an HTML element with a selector, then does something to that element.\\

For example, let's make all of your button elements bounce. Just add this code inside your document ready function:*/

$("button").addClass("animated bounce");

/*Note that we've already included both the jQuery library and the Animate.css library in the background so that you 
can use them in the editor. So you are using jQuery to apply the Animate.css bounce class to your button elements.*/



/*In the same way you can add classes to an element with jQuery's addClass() function, you can remove them with jQuery's 
removeClass() function.

Here's how you would do this for a specific button:*/

$("#target2").removeClass("btn-default");



/*jQuery has a function called .css() that allows you to change the CSS of an element.

Here's how we would change its color to blue: */
$(document).ready(function() {
$("#target1").css("color", "blue");
}


/*You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.

//When you disable a button, it will become grayed-out and can no longer be clicked.

//jQuery has a function called .prop() that allows you to adjust the properties of elements.

//Here's how you would disable all buttons:*/

$("button").prop("disabled", true);


/*Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called .html() that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:*/

$("h3").html("<em>jQuery Playground</em>");

/*jQuery also has a similar function called .text() that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.


//jQuery has a function called .remove() that will remove an HTML element entirely */

$("#target4").remove();


/*jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.*/

$("#target2").appendTo("#right-well");


/*jQuery has a function called clone() that makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right-well, we would use:*/

$("#target2").clone().appendTo("#right-well");  


/*Every HTML element has a parent element from which it inherits properties.

For example, your jQuery Playground h3 element has the parent element of <div class="container-fluid">, which itself has the 
parent body.

jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a 
background color of blue:*/

$("#left-well").parent().css("background-color", "blue")

/*.children*/

$("#left-well").children().css("background-color", "blue")



/*Target a Specific Child of an Element Using jQuery 
You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.

Fortunately, jQuery has some other tricks for targeting the right elements.

jQuery uses CSS Selectors to target elements. target:nth-child(n) css selector allows you to select all the nth elements with the target class or element type.

Here's how you would give the third element in each well the bounce class:*/

$(".target:nth-child(3)").addClass("animated bounce");


/*Target Even Numbered Elements Using jQuery 
You can also target all the even-numbered elements.

Here's how you would target all the odd-numbered elements with class target and give them classes:*/

$(".target:odd").addClass("animated shake");

/*Note that jQuery is zero-indexed, meaning that, counter-intuitively, :odd selects the second element, fourth element, and so on.

Try selecting all the even-numbered elements and giving them the classes of animated and shake.*/


//Notas Javascript

//contadores

i++

i--

//Residuo
residuo = 10 % 2 //en este caso es 0

// x = x + 12; is the same as  x += 12;







































