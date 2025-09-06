# SystemInfoApp

This folder contains the source code for the **SystemInfoApp** project from Chapter 2 of *Electron in Action*. The app demonstrates how to build a simple Electron application that displays system information.

## Features

- Cross-platform desktop application using Electron
- Displays basic system information (CPU, memory, OS, etc.)
- Simple and clean user interface

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the app:**
    ```bash
    npm start
    ```

## Folder Structure

- `main.js` - Main process script
- `renderer.js` - Renderer process script
- `index.html` - Application UI
- `package.json` - Project metadata and scripts

## Requirements

- [Node.js](https://nodejs.org/)
- [Electron](https://electronjs.org/)

Because we also want to check the disk sizes, we install a disk info package by:
Open your terminal and run:
```
npm install diskusage
```


## License

This project is for educational purposes as part of *Electron in Action*.
