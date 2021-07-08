function registration(s_name, s_class, roll, phn){



    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Student Id : 2021" + s_class + roll );         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Name : " + s_name);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`Class : ${s_class}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`Roll : ${roll}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`Phone No : ${phn}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 
    
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(``);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("s_info").appendChild(node); 
}


function myFunction() {
    document.getElementById("myForm").reset();
  }