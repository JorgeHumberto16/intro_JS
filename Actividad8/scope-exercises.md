# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> _your answer here_ 
> Undefined
>2        
Porque a se declara después de imprimirse por lo que no tiene un valor definido para ese momento, sin embargo, para una función no funciona igual, 
ya que cuando se manda llamar una función irá a buscarla a donde esté y hará lo que la función tenga en ella.

> _console answer_
> Undefined
>2       

2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _your answer here_ 
Tal cual, nada, ya que no estamos imprimendo ningún valor, pero si imprimimos "firstResult" y "result"
>5
> Undefined

> _console answer_
>[Function: otherFunction]
>5

3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _your answer here_ 2
> _console answer_ 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> _your answer here_
De nuevo, nada ya que no mandamos imprimir nada, pero si imprimimos b()
> Undefined
> _console answer_
> Undefined
