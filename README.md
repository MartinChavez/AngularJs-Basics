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
 
ng-app 
====================
```HTML
!-- ng-app directive -->
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
