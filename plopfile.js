module.exports = (plop) => {
    let componentTypes = [
        { name: "Common component", value: "CC" },
        { name: "Higher-Order Component", value: "HOC" },
        { name: "Redux", value: "REDUX" },
    ];

    const printMessage = msg => answers => new Promise((resolve) => resolve(msg));

    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'list',
            name: 'type',
            message: "Chose what you want to generate",
            choices: componentTypes
        },{
            type: 'input',
            name: 'name',
            validate: (value) => {
                if((/^\S+$/).test(value)) return true;
                return 'Name cannot be empty or contain space';
            },
            message: ({type}) => componentTypes.find(c => c.value === type).name + ' name:'
        },{
            // Only if it's common component
            when: (response) => response.type === "CC",
            type: "confirm",
            name: "createMd",
            // Prompt to display on command line
            message: "Do you want to create styleguide example?",
        },{
            // Only if is common component
            when: (response) => response.type === "CC" || response.type === "HOC",
            type: "confirm",
            name: "createIndex",
            message: "Do you want to create index.js file? (Recommended)",
        },{
            // Only if is common component
            when: (response) => response.createIndex === true && response.type === "CC" || response.type === "HOC",
            type: "confirm",
            name: "injectIndexExport",
            message: "Do you want to add this component to ./src/components/index.js file? (Recommended)",
        },{
            // Only if it's common component
            when: (response) => response.type === "CC",
            type: "confirm",
            name: "createUseEffect",
            message: "Add useEffects to component?",
        },{
            // Only if it's common component
            when: (response) => response.type === "CC",
            type: "confirm",
            name: "createUseState",
            message: "Add useState to component?",
        },{
            // Only if it's common component
            when: (response) => response.type === "CC",
            type: "confirm",
            name: "createPropTypes",
            message: "Add PropTypes to component?",
        }],
        actions: (data) => {
            let actions = [];

            // createUseEffect, createUseState
            console.log(data, componentTypes);

            let { type, name, createMd, createIndex, injectIndexExport } = data;

            actions.push(printMessage('\nStarted generating: ' + componentTypes.find(c => c.value === type).name));
            actions.push(printMessage('\nName: ' + name));
            actions.push(printMessage('\n-------------------------------------\n'));

            // If type is custom component
            if(type === 'CC') {
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/components/{{name}}/{{name}}.js',
                    templateFile: 'plop-templates/CommonComponent/Cc.hbs'
                });

                // Create index.js
                if(createIndex) {
                    actions.push({
                        type: 'add',
                        skipIfExists: true,
                        abortOnFail: true,
                        path: 'src/components/{{name}}/index.js',
                        // One line template for default export from component file
                        template: "export {default} from './{{name}}';"
                    });
                    if(injectIndexExport) {
                        actions.push({
                            type: 'append',
                            path: 'src/components/index.js',
                            pattern: /(\/\/ GENERATOR EXPORT)/gi,
                            template: "export {default as " + name + "} from './" + name + "';"
                        });
                    }
                }
                if(createMd) {
                    actions.push({
                        type: 'add',
                        skipIfExists: true,
                        abortOnFail: true,
                        path: 'src/components/{{name}}/{{name}}.md',
                        templateFile: 'plop-templates/CommonComponent/CcMd.hbs'
                    });
                }
            }

            // If type is HoC
            if(type === 'HOC') {
                // HoC example
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/components/HOC/{{name}}/{{name}}.js',
                    templateFile: 'plop-templates/HOC/Hoc.hbs'
                });

                // Create index.js
                if(createIndex) {
                    actions.push({
                        type: 'add',
                        skipIfExists: true,
                        abortOnFail: true,
                        path: 'src/components/HOC/{{name}}/index.js',
                        // One line template for default export from component file
                        template: "export {default} from './{{name}}';"
                    });
                    if(injectIndexExport) {
                        actions.push({
                            type: 'append',
                            path: 'src/components/index.js',
                            pattern: /(\/\/ GENERATOR EXPORT)/gi,
                            template: "export {default as " + name + "} from './HOC/" + name + "';"
                        });
                    }
                }
            }

            // If type is redux
            if(type === 'REDUX') {
                // Create [REDUX-NAME]/index.js file
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/redux/{{name}}/index.js',
                    templateFile: 'plop-templates/redux/ReduxIndex.hbs'
                });
                // Actions file
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/redux/{{name}}/actions.js',
                    templateFile: 'plop-templates/redux/ReduxActions.hbs'
                });
                // Reducers file
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/redux/{{name}}/reducers.js',
                    templateFile: 'plop-templates/redux/ReduxReducers.hbs'
                });
                // Selectors file
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/redux/{{name}}/selectors.js',
                    templateFile: 'plop-templates/redux/ReduxSelectors.hbs'
                });
                // Types file
                actions.push({
                    type: 'add',
                    skipIfExists: true,
                    abortOnFail: true,
                    path: 'src/redux/{{name}}/types.js',
                    templateFile: 'plop-templates/redux/ReduxTypes.hbs'
                });

                // Print message about injection
                actions.push(printMessage('\n\nInjecting import in ./src/redux/index.js'));

                // Append import in index of redux
                actions.push({
                    type: 'append',
                    path: 'src/redux/index.js',
                    pattern: /(\/\/ IMPORTS)/gi,
                    template: "import {{name}} from './{{name}}'"
                });
                // Append export in index of redux
                actions.push({
                    type: 'append',
                    path: 'src/redux/index.js',
                    pattern: /(export default {)/gi,
                    template: '    {{name}},'
                });
            }

            actions.push(printMessage('\nCode generation completed!'));

            return actions;
        }
    });
};