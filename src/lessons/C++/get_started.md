# C++ Getting Started

## Introduction
To start developing in C++, you'll need two essential tools:
- A code editor (Visual Studio Code, commonly known as VS Code, is a popular choice)
- A compiler, which converts your code into machine-readable instructions

## Installation

### Step 1: Install Visual Studio Code (VS Code)
Download and install VS Code from the official website:
- [Download VS Code](https://code.visualstudio.com/download)

### Step 2: Install GCC (GNU Compiler Collection)
Download and install GCC from the official GNU website:
- [Download GCC](https://gcc.gnu.org/)

After downloading and installing GCC, verify the installation by opening your terminal and typing:
```bash
gcc -v
```
You should see the version information of GCC if it was installed successfully.

## Setting Up Your Development Environment

### Install VS Code Extensions
1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "C/C++" and install the extension by Microsoft.
4. Optionally, install the "Code Runner" extension for quickly running code snippets.

### Configure Your Compiler Path
1. Open VS Code and navigate to the settings by clicking on the gear icon in the bottom left corner and selecting "Settings".
2. In the search bar, type "compiler path" to locate the setting where you can specify the path to your GCC installation. Ensure it points to the correct location where GCC is installed.

## Writing Your First C++ Program
1. Open VS Code and create a new file with a `.cpp` extension, for example, `hello_world.cpp`.
2. Type the following code into the file:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```
3. Save the file.

## Compiling and Running Your Program
1. Open the terminal in VS Code by selecting `View > Terminal` from the menu.
2. Navigate to the directory where your `hello_world.cpp` file is saved.
3. Compile the program by typing:
```bash
g++ hello_world.cpp -o hello_world
```
4. Run the compiled program by typing:
```bash
./hello_world
```
You should see the output:
```
Hello, World!
```

Congratulations! You've successfully written, compiled, and run your first C++ program. You're now ready to explore more features and capabilities of C++. Happy coding!