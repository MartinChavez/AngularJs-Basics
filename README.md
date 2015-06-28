<a name="README">[<img src="https://pbs.twimg.com/profile_images/2149314222/square.png" width="200px" height="200px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

AngularJS : Run and Play
================

A project aimed to help the user use and Learn AngularJS. Each unit contains a tutorial with concepts and examples.

Topics
================
 - Expressions
 - Controllers
 - Directives
 - Custom Directives
 - Forms
 - Services
 
Tools
====================
<a name="README">[<img src="http://www.jetbus.io/images/logo-node.png" width="50px" height="50px" />](https://nodejs.org/)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width="50px" height="50px" />](https://github.com/gruntjs/grunt)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67" width="50px" height="50px" />](http://bower.io/)</a>
<a name="README">[<img src="https://www.npmjs.com/static/images/npm-logo.svg" width="50px" height="50px" />](https://www.npmjs.com/)</a>
 
ng-app 
====================
```HTML
  <!-- ng-app directive -->
  <!-- The ng-app directive creates an angular application by running the specified module when the document loads -->
  <!-- By including this directive, the enclosed HTML is going to be treated as part of the Angular app -->
  <body ng-app="learnAngularApp">
```
Attaching a Controller
====================
```HTML
 <!-- Attaching a Controller -->
    <!-- In order to achieve this, you need to use the ng-controller Directive -->
    <!-- You are attaching this controller to an element inside of HTML tags-->
    <!-- You can create an alias with the 'as' keyword -->
    <div class="footer" ng-controller="FooterController as footerController">
      <div class="container">
        <p>{{footerController.footer.projectName}}</p>
      </div>
    </div><!-- The scope of the controller is only inside the closing <div> -->
```
Expressions
====================
```HTML
<!-- Expressions -->
<!-- Allow you to insert dynamic values into the HTML-->
<div class="row marketing">
  <h4>Numerical Operations</h4>
  <p> 5 + 5 = {{ 5 + 5 }}</p>
  <h4>String Operations</h4>
  <p> {{ "String"}} {{ "Operations Example"}}</p>
</div>
```

Install
====================
```Terminal
npm install
bower install
```

Run and Play
====================
```Terminal
grunt serve
```
<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/AngularRunAndPlay.png" />

Questions ?
====================
If you have any questions, please feel free to ask me:
[Martin Chavez Aguilar](mailto:martin.chavez@live.com)

Contributors
====================
* [Martin Chavez Aguilar](https://www.linkedin.com/in/martinchavezaguilar) - Wrote the project

References
====================
* [Code School](https://www.codeschool.com/)
