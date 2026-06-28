/**
 * ForgeCLI main entry logic.
 * Handles non-interactive project initialization via CLI flags.
 */

const chalk = require('chalk');
const { getTemplates } = require('./templates');
const { validateProjectName, validateTemplateName } = require('./validator');
const { generateProject } = require('./generator');

/**
 * Initializes a project non-interactively using provided options.
 * @param {string} projectName - The project name
 * @param {Object} options - CLI options { template, directory }
 */
async function initProject(projectName, options) {
  console.log(chalk.bold.cyan('\n⚡ ForgeCLI — Project Initialization\n'));

  const templates = getTemplates();

  // Validate template name
  const templateValidation = validateTemplateName(options.template, templates);
  if (templateValidation !== true) {
    console.log(chalk.red(templateValidation));
    process.exit(1);
  }

  const selectedTemplate = templates.find(
    (t) => t.name === options.template || t.label === options.template
  );

  // Prompt for project name if not provided
  if (!projectName) {
    const inquirer = require('inquirer');
    const { name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter project name:',
        validate: validateProjectName,
        filter: (input) => input.trim().toLowerCase().replace(/\s+/g, '-'),
      },
    ]);
    projectName = name;
  }

  // Validate project name
  const nameValidation = validateProjectName(projectName);
  if (nameValidation !== true) {
    console.log(chalk.red(nameValidation));
    process.exit(1);
  }

  console.log(chalk.dim(`Template: ${selectedTemplate.label}`));
  console.log(chalk.dim(`Project:  ${projectName}\n`));

  await generateProject(selectedTemplate, projectName, options);
}

module.exports = { initProject };