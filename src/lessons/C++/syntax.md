---
title: C++ syntax
order: 1
author: Malay Patra
---

# C++ Syntax

## 1. C++ Syntax
Let's break up the following code to understand it practically:
```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

## 2. Example explained
`#include <iostream>` 

it is a header file library that lets us work with input and output objects, such as `cout` (used in line 5). Header files add functionality to C++ programs.

`using namespace std` 

it means that we can use names for objects and variables from the standard library.

> Don't worry if you don't understand how `#include <iostream>` and `using namespace std` works. Just think of it as something that (almost) always appears in your program.

`int main() {`

Another thing that always appears in a C++ program is `int main()`. This is called a function. Any code inside its curly brackets `{}` will be executed when we call that function.

`cout << "Hello World!";`

`cout` (pronounced "see-out") is an object used together with the insertion operator (`<<`) to output/print text. In our example, it will output "Hello World!".

**NOTE :**
> - Every c++ statement ends with a semicolon `;`
> - The body on `int main()` could also be written as:
> ```cpp
> int main () { cout << "Hello World! "; return 0; }
> ```
> - The compiler ignores white spaces (blank line and spaces). However, multiple lines make the code more readable.

`return 0;`

it ends the main function. (don't worry about it now) 

`}`

finally, finish the defination of main function with a closing paranthesis.

## 3. Omitting Namespace
You might see some C++ programs that run without the standard namespace library. The `using namespace std` line can be omitted and replaced with the `std` keyword, followed by the `::` operator for some objects:
```cpp
#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}
```
It is up to you if you want to include the standard namespace library or not.