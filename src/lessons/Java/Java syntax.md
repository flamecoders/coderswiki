---
title: Java Syntax
order: 4
author: Devdatta Routh
---


# JAVA SYNTAX

 So in the previous chapter we learnt how to create a file and execute  a simple output operation. Now, let's dive into the working of the code lines and the **rules** to be followed while writing them!
 Here's your code lines for `Main.Java`  file to print "Hello World" to the screen:

Main.java
```java

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
## 1. Code Explained

 Every line of code that runs in Java must be inside a `class`. In our example, we named the class **Main**. A class should always start with an uppercase first letter.

 **Note**: Java is case-sensitive: "MyClass" and "myclass" holds different different.

 Always remember to save a java file with the **EXACT** name as the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: Go to the [Get Started Chapter](https://www.w3schools.com/java/java_getstarted.asp) for how to install Java. The output should be:

>`Hello World`

## 2. The main() Method

 The `main()` method is **COMPULSORY** in every Java program.

>`public static void main(String[] args)`

 Any code inside the `main()` method will be executed. Don't worry about the keywords before and after main. You will get to know them bit by bit while reading this tutorial.

 For now, simply keep in mind that every Java program has a `class` name which must match the filename, and that every program must contain the `main()` mathod. Finally, arriving to last section of this chapter-

## 3. System.out.println()

 Inside the `main()` method, we can use the `println()` method to print a line of text to the screen:
```java
public static void main(String[] args) {
  System.out.println("Hello World");
}
```
---
### ***POINTS TO REMEMBER***
 - The curly braces `{}` marks the beginning and the end of a block of code.

 - `System` is a built-in Java class that contains useful members, such as `out`, which is short for "output". The `println()` method, short for "print line", is used to print a value to the screen (or a file).

 - Each code statement must end with a semicolon (`;`).

 _**PS**: Don't worry too much about_ `System`, `out` _and_ `println()`.  _Just know that you need them together to print stuff to the screen :)_
