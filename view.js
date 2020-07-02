let bodyElement = document.querySelector("body");

let input1 = document.createElement("input");
input1.type = "number";

let input2 = document.createElement("input");
input2.type = "number";

bodyElement.append(input1, input2);

let button_add = document.createElement("button")
button_add.append('add');

let button_divide = document.createElement("button")
button_divide.append('divide');

let button_mult = document.createElement("button")
button_mult.append('multiply');

bodyElement.append(button_add,  button_divide, button_mult);

let output_Element = document.createElement("div");
// output_Element.append('Result is: ');

bodyElement.append(output_Element);

