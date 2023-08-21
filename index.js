/**
 * Define the launcher object responsible for managing modules and scripts
 */
window.launcher = {
  init : () => {
      window.launcher.activateAllModules();
  },
  uninit : () => {
      window.launcher.deactivateAllModules();
  },
  // Function to add an external script to the document
  addScript(src) {
      const script = document.createElement("script");
      script.src = src;
      const nonceElement = document.querySelector("[nonce]");
      if (nonceElement) {
          script.nonce = nonceElement.nonce;
      }
      document.body.appendChild(script);
  },
  modules: {},  // Object to hold registered modules

  // Define the Module class for module handling
  Module: class {
      constructor(name, activateFn, deactivateFn) {
          this.name = name;  // Module's name
          this.active = false;  // Indicates if the module is active
          this.activateFn = activateFn;  // Activation function for the module
          this.deactivateFn = deactivateFn;  // Deactivation function for the module
      }

      // Function to activate the module
      activate() {
          // Check if the module is not already active
          if (!this.active) {
              this.active = true;
              // Execute the activation function if provided
              if (typeof this.activateFn === 'function') {
                  this.activateFn();
              }
          }
      }

      // Function to deactivate the module
      deactivate() {
          // Check if the module is active
          if (this.active) {
              this.active = false;
              // Execute the deactivation function if provided
              if (typeof this.deactivateFn === 'function') {
                  this.deactivateFn();
              }
          }
      }
  },

  // Function to add a new module
  addModule: function(name, activateFn, deactivateFn) {
      // Create a new module instance
      const module = new this.Module(name, activateFn, deactivateFn);
      // Store the module in the modules object
      this.modules[name] = module;
      return module;  // Return the created module
  },
  // Function to activate all registered modules
  activateAllModules: function() {
      for (const moduleName in this.modules) {
          this.modules[moduleName].activate();
      }
  },
  // Function to deactivate all registered modules
  deactivateAllModules: function() {
      for (const moduleName in this.modules) {
          this.modules[moduleName].deactivate();
      }
  }
};

// CONFIG
window.launcher.config = {
  name: "test",  // Name of the hack
  description: "testing",
  version: "1.0.0",
  autoInit: true  // Flag for automatic initialization
};
window[launcher.config.name] = {};


/* SAMPLE MODULE
window.launcher.addModule("test",
    () => { //activate
        // Initialize the module within the launcher's namespace
        window[launcher.config.name].test = {
          //stuff
        }
    },
    () => { //deactivate
        // When the module is deactivated, remove the module from the launcher's namespace
        delete window[launcher.config.name].test;
    }
);
*/


// Initialize the framework if autoInit is enabled
if (window.launcher.config.autoInit == true) {
    window.launcher.init()
    console.clear()
}
