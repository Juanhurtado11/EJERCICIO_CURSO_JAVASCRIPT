<script>
    document.write("Hello World")
</script>

<script>
    document.write("<h1>Hello World</h1>")
</script>

<script>
    console.log("|Hello from console!")
</script>

<script>
    var x = 10;
</script>

<script>
    var x = 100;
    document.write(x);
</script>

<script>
    var x = 100;
    console.log(x);

    x = 42;
    console.log(x);
</script>

<script>
    var x = 100;
    document.write(x);
</script>

<script>
    //This is a single line comment
    alert("This is an alert box!")
</script>

<script>
    /*This code creates an alert box*/
    alert("This is an alert box!")
</script>

<script>
    var num = 42; // A number without decimals
    var price = 55.55; // A number with decimals
    document.write(price);
</script>

<script>
    var name = 'John'
    var text = "My name is John Smith"
    var text = "My name is 'John' "; 
</script>

<script>
    var sayHello = 'Hello world! \'I am a JavaScript progremmer.\' ';
    document.write(sayHello);
</script>

<script>
    var isactive = true;
    var isholiday = false;
</script>

<script>
    var x = 10 + 5;
    document.write(x);
</script>

<script>
    var x = 10;
    var y = x + 5 + 22 + 45 + 6548;
    document.write(y);
</script>

<script>
    var x = 10 * 5;
    document.write(x);
</script>

<script>
    var x = 100 / 5;
    document.write(x);
</script>

<script>
    var myvariable = 26 % 6;
</script>

<script>
    var num = 10;
    // num == 8 will return false
</script>

<script>
    (4 > 2) && (10 < 15)
    variable = (condition) ? value1: value2
    var isadult = (age < 18) ? "Too young": "Old enough";
</script>

<script>
    var mystring1 = "I am learning ";
    var mystring2 = "JavaScript with SoloLearn.";
    document.write(mystring1 + mystring2);
</script>

<script>
    if (condition) {
    statements
    }
</script>

<script>
    var mynum1 = 7;
    var mynum2 = 10;
    if (mynum1 < mynum2) {
        alert("Javascript is easy to learn.");
    }
</script>

<script>
    var mynum1 = 7;
    var mynum2 = 10;
    if (mynum1 > mynum2) {
        alert("Javascript is easy to learn.");
    }
</script>

<script>
    if (expression) {
    // executed if condition is true
    }
    else {
    // executed if condition is false
    }
</script>

<script>
    var mynum1 = 7;
    var mynum2 = 10;
    if (mynum1 > mynum2) {
        alert("This is my first condition");
    }
    else {
        alert("This is my second condition");
    }
</script>

<script>
    var course = 1;
    if (course == 1) {
        document.write("<h1>HTML Tutorial</h1>");
    } else if (course == 2) {
        document.write("<h1>CSS Tutorial</h1>");
    } else {
        document.write("<h1>JavaScript Tutorial</h1>");
    }
</script>

<script>
    var course = 3;
    if (course == 1) {
        document.write("<h1>HTML Tutorial</h1>");
    } else if (course == 2) {
        document.write("<h1>CSS Tutorial</h1>");
    } else {
        document.write("<h1>JavaScript Tutorial</h1>");
    }
</script>

<script>
    switch (expression) {
  case n1: 
     statements
     break;
  case n2: 
     statements
     break;
  default: 
     statements
}
</script>

<script>
    var day = 2;
    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        default:
            document.write("Another day");
    }
</script>

<script>
    var Color = "yellow";
    switch (color) {
        case blue:
            document.write("This is blue");
            break;
        case red:
            document.write("This is red");
            break;
        case green:
            document.write("This is green");
            break;
        case orange:
            document.write("This is orange");
            break;
        default:
            document.write("Color no found.");
    }
</script>

<script>
    for (i=1; i<=5; i++) {
        document.write(i + "<br />");
    }
</script>

<script>
    var i = 1;
    for (; i<=5; i++) {
        document.write(i + "<br />");
    }
    for (i=1, text=""; i<=5; i++) {
        text = i;
        document.write(i + "<br />");
    }
</script>

<script>
    var i = 0;
    for (; i < 10; ) {
        document.write(i);
        i++;
    }
</script>

<script>
    var i=0;
    while (i<=10) {
        document.write(i + "<br />");
        i++;
    }
</script>

<script>
    var i=20;
    do {
        document.write(i + "<br />");
        i++;
    }
    while (i<=25);
</script>

<script>
    for (i = 0; i <= 10; i++) {
        if (i == 5) {
            break;
        }
        document.write(i + "<br />");
    }
</script>

<script>
    for (i = 0; i <= 10; i++) {
        if (i == 5) {
            continue;
        }
        document.write(i + "<br />");
    }
</script>

<script>
    function myFunction() {
        alert("Calling a Function!");
    }

    myFunction();
</script>

<script>
    function myfunction() {
        alert("Alert box!")
    }

    myfunction();
    //"Alert box!"

    //Some other code

    myfunction();
    //"Alert box!"
</script>

<script>
    function sayHello(name) {
        alert("Hi, " + name);
    }

    sayHello("David");
</script>

<script>
    function sayHello(name) {
        alert("Hi, " + name);
    }

    sayHello("David");
    sayHello("Sarah");
    sayHello("John");
</script>

<script>
    function sayHello(name, age) {
        document.write( name + " is " + age + " years old.");
    }
</script>

<script>
    function sayHello(name, age) {
        document.write( name + " is " + age + " years old.");
    }

    sayHello("John", 20);
</script>

<script>
    function myfunction(a, b) {
        return a * b;
    }

    var x = myfunction(5, 6);
    // Return value will end up in x
</script>

<script>
    function addNumbers(a, b) {
        var c = a+b;
        return c;
    }
    document.write( addNumbers(40, 2) );
</script>

<script>
    alert("Do you really want to leave this page?");
    alert("Hello\nHow are you?")
</script>

<script>
    var user = prompt("Please enter your name");
    alert(user);
</script>

<script>
    var result = confirm("Do you really want to leave this page?");
    if (result == true) {
        alert("Thanks for visiting");
    }
    else {
        alert("Thanks for staying with us");
    }
</script>

<script>
    var person = {
        name: "John", age: 31, 
        favColor: "green", height: 183
    };
</script>

<script>
    var person = {
        name: "John", age: 31,
        favColor: "green", height: 183
    };
    var x = person.age;
    var y = person['age'];
</script>

<script>
    var course = {name: "JS", lessons: 41};
    document.write(course.name.length);
</script>

<script>
    document.write("This is some text");
</script>

<script>
    var person = {
        name: "John", age: 42, favColor: "green"
    };

    function person(name, age, color) {
        this.name = name;
        this.age = age;
        this.favColor = color;
    }
</script>

<script>
    var p1 = new person("John", 42, "green");
    var p2 = new person("Amy", 21, "red");

    document.write(p1.age); // Outputs 42
    document.write(p2.name); // Outputs "Amy"
</script>

<script>
    function person (name, age) {
        this.name = name;
        this.age = age;
    }

    var John = new person("John", 25);
    var John = new person("James", 21);
</script>

<script>
    var John = {name: "John", age: 25};
    var James = {name: "James", age: 21};
</script>

<script>
    var John = {
      name: "John",
      age: 25
    };
    var James = {
      name: "James",
      age: 21
    };

    document.write(John.age);
</script>

<script>
    function person(name, age) {
        this.name = name;
        this.age = age;
        this.changeName = function (name) {
            this.name = name;
        }
    }
 
    var p = new person("David", 21);
    p.changeName("John");
    //Now p.name equals to "John"
</script>

<script>
    function person(name, age) {
        this.name= name;  
        this.age = age;
        this.yearOfBirth = bornYear;
    }
    function bornYear() {
        return 2016 - this.age;
    }
</script>

<script>
    function person(name, age) {
        this.name= name;  
        this.age = age;
        this.yearOfBirth = bornYear;
    }
    function bornYear() {
        return 2016 - this.age;
    }

    var p = new person("A", 22);
    document.write(p.yearOfBirth());
</script>

<script>
    var course ="HTML";
    var course ="CSS"
    var course ="JS"

    var courses = new Array("HTML", "CSS", "JS"); 
</script>

<script>
    var courses = new Array("HTML", "CSS", "JS"); 
    var course = courses[0]; // HTML
    courses[1] = "C++"; //Changes the second element 
</script>

<script>
    var courses = new Array("HTML", "CSS", "JS"); 
    var course = courses[10];
</script>

<script>
    var courses = new Array(3);
    courses[0] = "HTML";
    courses[1] = "CSS";
    courses[2] = "JS";
</script>

<script>
    var courses = new Array();
    courses[0] = "HTML";
    courses[1] = "CSS";
    courses[2] = "JS";
    courses[3] = "C++";

    var courses = ["HTML", "CSS", "JS"];
</script>

<script>
    var courses = ["HTML", "CSS", "JS"];
    document.write(courses.length);
</script>

<script>
    var c1 = ["HTML", "CSS"];
    var c2 = ["JS", "C++"];
    var courses = c1.concat(c2);
</script>

<script>
    var person = []; //empty array
    person["name"] = "John";
    person["age"] = 46;
    document.write(person["age"]);
</script>

<script>
    document.write(Math.PI);
</script>

<script>
    var number = Math.sqrt(4);
    document.write(number);
</script>

<script>
    var n = prompt("Enter a number", "");
    var answer = Math.sqrt(n);
    alert("The square roo of " + n + " is " + answer);
</script>

<script>
    function myAlert() {
        alert("Hi");
    }
    setInterval(myAlert, 3000);
</script>

<script>
    var d = new Date();
    //d stores the current date and time

    new Date(milliseconds)
    new Date(dateString)
    new Date(year, month, day, hours, minutes, seconds, milliseconds)

    //Fri Jan 02 1970 00:00:00
    var d1 = new Date(86400000); 

    //Fri Jan 02 2015 10:42:00
    var d2 = new Date("January 2, 2015 10:42:00");

    //Sat Jun 11 1988 11:42:00
    var d3 = new Date(88,5,11,11,42,0,0);
</script>

<script>
    var d = new Date();
    var hours = d.getHours();
    //hours is equal to the current hour
</script>

<script>
    function printTime() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        document.body.innerHTML = hours+":"+minutes+":"+seconds;
    }

    setInterval(printTime, 1000);
</script>

<script>
    document.body.innerHTML = "Some text";
</script>

<script>
    //finds element by id
    document.getElementById(id) 

    //finds elements by class name
    document.getElementsByClassName(name) 

    //finds elements by tag name
    document.getElementsByTagName(name)
</script>

<script>
    var elem = document.getElementById("demo");
    elem.innerHTML = "Hello World!";
</script>

<script>
    var arr =  document.getElementsByClassName("demo");
    //accessing the second element
    arr[1].innerHTML = "Hi";
</script>

<html>
    <body>
        <p>hi</p>
        <p>hello</p>
        <p>hi</p>
        <script>
        var arr = document.getElementsByTagName("p");
        for (var x = 0; x < arr.length; x++) {
        arr[x].innerHTML = "Hi there";
        }
    </script>
    </body>
</html>

<html>
    <body>
        <p>Hi there</p>
        <p>Hi there</p>
        <p>Hi there</p>
    </body>
</html>

<html>
    <body>
        <div id="demo">
            <p>some text</p>
            <p>some other text</p>
        </div>

        <script>
            var a = document.getElementById("demo");
            var arr = a.childNodes;
            for(var x=0;x<arr.length;x++) {
                arr[x].innerHTML = "new text";
            }
        </script>
    </body>
</html>

<html>
    <body>
        <img id="myimg" src="orange.png" alt="" />
    <script>
        var el = document.getElementById("myimg");
        el.src = "apple.png";
    </script>
    </body>
</html>

<html>
    <body>
        <a href="http://www.example.com">Some link</a>
        <script>
            var el = document.getElementsByTagName("a");
            el[0].href = "http://www.sololearn.com";
        </script>
    </body>
</html>

<html>
    <body>
       <div id="demo" style="width:200px">some text</div>
       <script>
           var x = document.getElementById("demo");
           x.style.color = "6600FF";
           x.style.width = "100px";
       </script> 
    </body>
</html>

<html>
    <body>
        <div id="demo">some content</div>

        <script>
            //creating a new paragraph
            var p = document.createElement("p");
            var node = document.createTextNode("Some new text");
            //adding the text to the paragraph
            p.appendChild(node);

            var div = document.getElementById("demo");
            //adding the paragraph to the div
            div.appendChild(p);
        </script>
    </body>
</html>

<html>
    <body>
        <div id="demo">
            <P id="p1">This is a paragraph.</P>
            <p id="p2">This is Another paragraph.</p>
        </div>
        <script>
            var parent = document.getElementById("demo");
            var child = document.getElementById("p1");
            parent.removeChild(child);
        </script>
    </body>
</html>

<html>
    <body>
        <div id="demo">
            <P id="p1">This is a paragraph.</P>
            <p id="p2">This is Another paragraph.</p>
        </div>
        
        <script>
            var p = document.createElement("p");
            var node = document.createTextNode("This is new");
            p.appendChild(node);

            var parent = document.getElementById("demo");
            var child = document.getElementById("p1");
            parent.removeChild(p, child);
        </script>
    </body>
</html>

<html>
    <body>
       <style>
           #container {
               width: 200px;
               height: 200px;
               background: green;
               position: relative;
           }

           #box {
               width: 50px;
               height: 50px;
               background: red;
               position: absolute;
           }
       </style>
       <div id="container">
            <div id="box"> </div>
       </div> 
    </body>
</html>

<script>
    var t = setInterval(move, 500); 
    // starting position
    var pos = 0; 
    //our box element
    var box = document.getElementById("box");

    function move() {
    pos += 1;
     box.style.left = pos+"px"; //px = pixels
    }
</script>

<script>
    var t = setInterval(move, 10);
    function move() {
    if(pos >= 150) {
    clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos+"px";
        }
    }
</script>

<script>
    var pos = 0;
    //out box element
    var box = document.getElementById("box");
    var t = setInterval(move, 10);

    function move() {
        if (pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+"px";
        }
    }
</script>

<html>
    <body>
       <button onclick="show()">Click Me</button>
        <script>
            function show() {
                alert("Hi there");
            }
        </script>
    </body>
</html>

<script>
    var x = document.getElementById("demo");
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
</script>

<html>
    <body unload="doSomething()">
        
    </body>
</html>

<script>
    window.onload = function () {
        //some code
    }
</script>

<html>
    <body>
       <input type="text" id="name" onchange="change()">
       <script>
           function change() {
               var x = document.getElementById("name")
               x.value= x.value.toUpperCase();
           }
       </script>
    </body>
</html>

<html>
    <body>
        
    </body>
</html>

<script>
    element.addEventListener("click", myFunction);
    element.addEventListener("mouseover", myFunction);

    function myFunction() {
    alert("Hello World!");
    }
</script>

<script>
    element.removeEventListener("mouseover", myFunction);
</script>

<html>
    <body>
        <button id="demo">Start</button>

        <script>
            var btn = document.getElementById("demo");
            btn.addEventListener("click", myFunction);

            function myfunction() {
                alert(Math.random());
                btn.removeEventListener("click", myfunction);
            }
        </script>
    </body>
</html>

<script>
    //Capturing propagation
    elem1.addEventListener("click", myFunction, true); 

    //Bubbling propagation
    elem2.addEventListener("click", myFunction, false);
</script>

<div>
    <button> Prev </button>
    <img id="slider"
    src="http://www.sololearn.com/uploads/slider/1.jpg"
    width="200px" height="100px"/>
    <button> Next </button>
</div>

<script>
    var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
</script>

<div>
    <button onclick="prev()"> Prev </button>
    <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
      width="200px" height="100px"/>
    <button onclick="next()"> Next </button>
</div>

<script>
    var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
    var num = 0

    function next() {
        var slider = document.getElementById("slider");
        num++;
        if (num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
        }

        function prev() {
            var slider = document.getElementById("slider");
            num--;
            if (num < 0) {
                num = images.length-1;
            }
            slider.src = images[num];
        }
</script>

<form onsubmit="return validate()" method="post">
    Number: <input type="text" name="num1" id="num1" />
    <br />
    Repeat: <input type="text" name="num2" id="num2" />
    <br />
    <input type="submit" value="Submit" />
</form>

<script>
    function validate() {
        var n1 = document.getElementById("num1");
        var n2 = document.getElementById("num2");
        if (n1.value !="" && n2.value != "") {
            if (n1.value == n2.value) {
                return true;
            }
        }
        alert("The values should be equal and not blank");
        return false;
    }
</script>

<script>
    var a = 10;
    const b = 'hello';
    let c = true;
</script>

<script>
    if (true) {
        let name = 'Jack'
    }
    alert(name); //generates an error
</script>

<script>
    function varTest() {
        var x = 1;
        if (true) {
            var x = 2; //same variable
            console.log(x); //2
        }
        console.log(x); //2
    }

    function letTest() {
        let x = 1;
        if (true) {
            let x =2 //diferent variable
            console.log(x); //2
        }
        console.log(x); //1
    }

    for (let i = 0; i < 3; i++) {
        document.write(i);
        
    }
</script>

<script>
    const a = 'Hello';
    a= 'Bye';
</script>

<script>
    let name = 'David';
    let msg = 'Welcome ' + name + '!';
    console.log(msg);
</script>

<script>
    let name ='David';
    let msg = `Welcome ${name}!`;
    console.log(msg);
</script>

<script>
    let a = 8;
    let b = 34;
    let msg = `The sum is ${a+b}`;
    console.log(msg);
</script>

<script>
    let arr = [1, 2, 3];
    for (let k = 0; k < array.length; k++) {
        console.log(array[k]);
    }
</script>

<script>
    let obj = {a: 1, b: 2, c: 3};
    for (let v in obj) {
        console.log(v);
    }
</script>

<script>
    let list = ["x", "y", "z"];
    for (let val of list) {
        console.log(val);
    }
</script>

<script>
    for (let ch of "Hello") {
        console.log(ch);
    }
</script>

<script>
    function add(x, y) {
        var sum = x+y;
        console.log(sum);
    }
</script>

<script>
    const add = (x, y) => {
        let sum = x + y;
        console.log(sum);
    }
</script>

<script>
    const greet = x => "welcome " + x;
</script>

<script>
    const x = () => alert("Hi");
</script>

<script>
    var arr = [2, 3, 7, 8];

    arr.forEach(function(el) {
        console.log(el * 2);
    });
</script>

<script>
    const arr = [2, 3, 7, 8];

    arr.forEach(v => {
        console.log(v * 2);
    });
</script>

<script>
    function test(a, b = 3, c = 42) {
        return a + b + c;
    }
    console.log(test(5)); //50
</script>

<script>
    const test = (a, b = 3, c = 42) => {
    return a + b + c;
    }
    console.log(test(5)); //50 
</script>

<script>
    let tree ={
        height: 10,
        color: 'green',
        grow() {
            this.height += 2;
        }
    };
    tree.grow();
    console.log(tree.height); // 12
</script>

<script>
    let height = 5;
    let health = 100;

    let athlete = {
        height,
        health
    };
</script>

<script>
    var a = {x: 1, x: 2, x: 3, x: 4};
</script>

<script>
    let prop = 'name';
    let id = '1234';
    let mobile = '08923';

    let user = {
        [prop]: 'Jack',
        [`user_${id}`]: `${mobile}`
    };
</script>

<script>
    var i = 0;
    var a = {
        ['foo' + ++i]: i,
        ['foo' + ++i]: i,
        ['foo' + ++i]: i
    };
</script>

<script>
    var param = 'size';
    var config = {
        [param]: 12,
        ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
    };
    console.log(config.mobileSize);
</script>

<script>
    let person ={
        name: 'Jack',
        age: 18,
        sex: 'male'
    };
    let student = {
        name: 'Bob',
        age: 20,
        xp: '2'
    };
    let newStudent = Object.assign({}, person, student);
</script>

<script>
    let person ={
        name: 'Jack',
        age: 18,
    };

    let newPerson = person; // newPerson references person
    newPerson.name = 'Bob';

    console.log(person.name); // Bob
    console.log(newPerson.name); // Bob
</script>

<script>
    let person ={
        name: 'Jack',
        age: 18,
    };

    let newStudent = Object.assign({}, person);
    newPerson.name = 'Bob';

    console.log(person.name); // Jack
    console.log(newPerson.name); // Bob
</script>

<script>
    let person ={
        name: 'Jack',
        age: 18,
    };

    let newStudent = Object.assign({}, person, {name: 'Bob'});
</script>

<script>
    let arr = ['1', '2', '3'];
    let [one, two, three] = arr;

    console.log(one); // 1
    console.log(two); // 2
    console.log(three); // 3
</script>

<script>
    let a = () => {
        return [1, 2, 3];
    }

    let [one, , two] = a();
</script>

<script>
    let a, b, c = 4, d = 8;
    [a, b = 6] = [2]; // a = 2, b = 6

    [c, d] = [d, c]; // c = 8, s = 4
</script>

<script>
    let obj = {h:100, s: true};
    let {h, s} = obj;

    console.log(h); //100
    console.log(s); // true
</script>

<script>
    let a, b;
    ({a, b} = {a: 'Hello ', b: 'Jack'});

    console.log(a + b); // Hello Jack
</script>

<script>
    let {a, b} = {a: 'Hello ', b: 'Jack'};
    console.log(a + b);
</script>

<script>
    var o = {h: 42, s: true};
    var {h: foo, s: bar} = o;

    //console.log(h); // Error
    console.log(foo); // 42
</script>

<script>
    var obj = {id: 42, name: "Jack"};

    let {id = 10, age = 20} = obj;

    console.log(id); // 42
    console.log(age); //20
</script>

<script>
    function containsAll(arr) {
        for (let k = 0; k < arguments.length; k++) {
            let num = arguments[k];
            if (arr.indexOf(num) === -1) {
                return false;
            }
        }
        return true;
    }
    let x = [2, 4, 6, 7];
    console.log(containsAll(x, 2, 4, 7));
    console.log(containsAll(x, 6, 4, 9));
</script>

<script>
    function containsAll(arr, ...nums) {
        for (let num of nums) {
            if (arr.indexOf(num) === -1) {
                return false;
            }
        }
        return true;
    }
</script>

<script>
    function myFunction(w, x, y, z) {
        console.log(w + x + y + z);
    }
    var args =[1, 2, 3];
    myFunction.apply(null, args.concat(4));
</script>

<script>
    const myFunction = (w, x, y, z) => {
        console.log(w + x + y + z);
    }
    let args = [1, 2, 3];
    myFunction(...args, 4);
</script>

<script>
    var dateFields = [1970, 0, 1]; // 1 Jan 1970
    var date = new Date(...dateFields);
    console.log(date);
</script>

<script>
    var arr = ["One", "Two", "Five"];

    arr.splice(2, 0, "Three");
    arr.splice(3, 0, "Four");
    console.log(arr);
</script>

<script>
    let newArr = ['Three', 'Four'];
    let arr = ['One', 'Two', ...newArr, 'Five'];
    console.log(arr);
</script>

<script>
    const obj1 = { foo: 'bar', x: 42 };
    const obj2 = { foo: 'baz', y: 5 };

    const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
    const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }
</script>

<Script>
    const obj1 = { foo: 'bar', x: 42 };
    const obj2 = { foo: 'baz', y: 5 };
    const merge = (...Objects) => ({...Objects});

    let mergedObj = merge(obj1, obj2);
    // { 0: { foo: 'bar', x: 42}, 1: { foo: 'baz', y: 5}}

    let mergedObj2 = merge({}, obj1, obj2);
    // { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }

</Script>

<script>
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
</script>

<script>
const square = new Rectangles(5, 5)
const poster = new Rectangles(2, 3)

var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    }
};

var Square = class  {
    constructor(height, width) {
        this.heigh = height;
        this.width = width;
    }
};

var Square = class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
}
get area() {
    return this.calcArea();
    }
calcArea() {
    return this.calcArea();
    }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25

class Point {
    constructur(x, y) {
        this.x = x;
        this.y = y;
    }
    static distrance(a, b) {
        const dx = a.y - b.x;
        const dy= a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distrance(p1, p2));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a moise');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak();

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a moise');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // Super
        console.log(this.name + ' barks. ');
    }
}

let dog = new Dog('Rex');
dog.speak();

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

let map = new Map();

map.set('K1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);

let set = new set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); //5

let set = new set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for(let v of set.values())
  console.log(v);

  asyncFunc("Work 1") // Task 1
  .then(function(result){
  console.log(result);
  return asyncFunc("Work 2 "); // Task 2
  }, function(error) {
  console.log(error);
  })
  .then(function(result) {
  console.log(result);
  }, function(error) {
  console.log(error);
  });
  console.log("End");

new Promise(function(resolve, reject) {
  // Work
  if (success)
      resolve(result);
  else
      reject(Error("failure"));
}); 

// lib/math.js
export ​let sum = (x, y) => { return x + y; }
export ​let pi = 3.14;

// app.js
import * ​as math from "lib/mat"

class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print(){
      var y ="";
      for (x of this.words) {
        if(x == ","){
          x = "";
        }
        else{
          y += "$" + x;
        }
      }

      y = y + "$";
      console.log(y);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();

setTimeout (function(){
  console.log("Work 1");
  setTimeout(function() {
      console.log("Work 2");
  }, 1000);
}, 1000);
console.log ("End");

function* idMaker() {
  let index = 0;
  while (index <5)
  yield index++;
}
var gen = idMaker();
console.log(gen.next().value);

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
      for(let index of arr){
          yield '{index}';
      }
  }
};
const all = [...my_obj]
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5)
  .reduce((i, d) => i + d);
console.log(all);

[4, 5, 1, 8, 2, 0].filter(function(x){
  return x > 3
})[0];

[4, 5, 1, 8, 2, 0].find (x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex (x => x >3);

"SoloLearn".indexOf ("Solo") === 0; // true
"SoloLearn".indexOf ("Solo") === (4 - "Solo".length); // true
"SoloLearn".indexOf ("loLe") !== -1; // true
"SoloLearn".indexOf ("olo", 1) !== -1; // true
"SoloLearn".indexOf ("olo", 2) !== -1; // false

"SoloLearn".startsWith ("Solo", 0); // true
"SoloLearn".endsWith ("Solo", 4); // true
"SoloLearn".includes ("loLe"); // true
"SoloLearn".includes ("olo", 1); // true
"SoloLearn".includes ("olo", 2); // true
</script>