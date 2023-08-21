# Launcher Framework

The Launcher framework is responsible for managing modules and scripts within your application. It provides functions to initialize, activate, and deactivate modules, as well as to add external scripts to the document. This readme provides an overview of the framework's functionality and usage.

## Introduction
The Launcher framework simplifies the management of modules and scripts in your application. It provides an easy way to define, activate, and deactivate modules, as well as add external scripts dynamically.

## Usage

### Adding External Scripts
To add an external script to the document:
```javascript
// Add an external script
window.launcher.addScript('path/to/your/script.js');
```

### Defining Modules
To define a module:
```javascript
// Define a module named "sampleModule"
window.launcher.addModule('sampleModule',
    () => { // Activate
        // Initialize the module within the launcher's namespace
        window[launcher.config.name].sampleModule = {
            // Your module's functionality here
        };
    },
    () => { // Deactivate
        // When the module is deactivated, remove the module from the launcher's namespace
        delete window[launcher.config.name].sampleModule;
    }
);
```

### Activating and Deactivating Modules
To activating and deactivating modules:
```javascript
// Activate all registered modules
window.launcher.activateAllModules();

// Deactivate all registered modules
window.launcher.deactivateAllModules();
```

## Configuration
The framework's behavior can be configured using the `launcher.config` object:
- `name`: The name of the hack.
- `description`: A description of the hack.
- `version`: The version of the hack.
- `autoInit`: A flag for automatic initialization.

## Contributing
Feel free to contribute to this framework by submitting pull requests or suggesting improvements. Please ensure that your contributions align with the project's goals and maintain code quality.

## License
This Launcher framework is provided under the [MIT License](LICENSE). You are free to use, modify, and distribute it in your projects. Refer to the license file for more information.
