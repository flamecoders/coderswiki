---
title: Java Intro
order: 0
---
# JAVA:)
## 1.What is Java:

Java is an object oriented programming language.


It is used for:

Mobile applications (specially Android apps)
Desktop applications,
Web applications,
Web servers and application servers,
Games,
Database connection
And much, much more !

## 2.Java Install:

Some PCs might have Java already installed.

To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):

```bash
java -- version
```
If Java is installed, you will see something like this (depending on version):

```bash
java version "11.0.1" 2018-10-16 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
```
If you do not have Java installed on your computer, you can download it for free at oracle.com.


In this tutorial, we will write Java code in a text editor.
It is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA,which are particularly useful when managing larger collections of Java files.


You can type "Install Intellij Idea" in google search bar to download it.
## 3.Setup for windows:
To install Java on Windows:

1.Go to "System Properties" (Can be found on Control Panel > System and Security > System > Advanced System Settings)


2.Click on the "Environment variables" button under the "Advanced" tab


3.Then, select the "Path" variable in System variables and click on the "Edit" button


4.Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: C:\Program Files\Java\jdk-11.0.1\bin


5.Then, click "OK", and save the settings


6.At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine
## 4.Basic structure of a Java program:
In Java, every application begins with a class name, and that class must match the filename.

Let's create our first Java file, called Main.java, which can be done in any text editor (like Notepad).

The file should contain a "Hello World" message, which is written with the following code:
```java
package com.company;
public class Main{
public static void main(String[] args){
     System.out.println("Hello World");
    }
  }
```
Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":
```bash
C:\Users\Your Name>javac Main.java
```
This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:
```bash
C:\Users\Your Name>java Main
```
The output should read:
```bash
Hello World
```
