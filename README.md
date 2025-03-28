# php.js
This allows you to run PHP in JavaScript.
In order to do this, all you need to do is include:
```
<script src='https://coding-master5.github.io/php.js/process.js'></script>
```
And, wherever you want the PHP to execute, put the JS function:
```
runPhp(//php to run);
```
This simple tool will allow you to create cool stuff without having to use the .php file extension.
HTML example:
```
<h2>php.js example</h2>
<input id='php'>
<button onclick='runPhp(document.getElementById("php").value)'>Run</button>
<!--NOTICE: this example is highly abbreviated and you are welcome to put the function in your <script> tags as well.-->
```
