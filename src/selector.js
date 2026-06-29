/**
 * Interactive template selector using Inquirer prompts.
 * Handles template selection with descriptions, category filtering, and project naming.
 */

const inquirer = require('inquirer');
const chalk = require('chalk');
const { getTemplates } = require('./templates');
const { validateProjectName, validateDirectory } = require('./validator');
const { generateProject } = require('./generator');

/**
 * Groups templates by their category.
 * @param {Array} templates - List of template objects
 * @returns {Object} Templates grouped by category
 */
function groupByCategory(templates) {
  return templates.reduce((groups, template) => {
    const cat = template.category || 'Other';
    if (!groups[cat]) {
      groups[cat] = [];
    }
    groups[cat].push(template);
    return groups;
  }, {});
}

/**
 * Runs the interactive template selection workflow.
 * @param {string} projectName - Optional project name from CLI args
 * @param {Object} options - CLI options (directory, etc.)
 */
async function runTemplateSelector(projectName, options) {
  console.log(chalk.bold.cyan('\n⚡ ForgeCLI — Interactive Project Generator\n'));
  console.log(chalk.dim('Let\'s scaffold your project step by step.\n'));

  const templates = getTemplates();

  if (templates.length === 0) {
    console.log(chalk.red('No templates available.'));
    process.exit(1);
  }

  // Step 1: Get or confirm project name
  if (!projectName) {
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

  // Step 2: Show welcome and template selection grouped by category
  const grouped = groupByCategory(templates);

  const choices = [];
  Object.keys(grouped).forEach((category) => {
    choices.push(new inquirer.Separator(` ── ${category} ── `));
    grouped[category].forEach((template) => {
      choices.push({
        name: `${chalk.green(template.label.padEnd(30))} ${chalk.dim(template.tags.slice(0, 3).join(', '))}`,
        value: template.name,
        short: template.label,
      });
    });
  });

  const { templateName } = await inquirer.prompt([
    {
      type: 'list',
      name: 'templateName',
      message: 'Select a project template:',
      choices,
      pageSize: 12,
      loop: false,
    },
  ]);

  // Step 3: Show detailed template description
  const selectedTemplate = templates.find((t) => t.name === templateName);
  console.log('\n' + chalk.bold(`📋 ${selectedTemplate.label}`));
  console.log(chalk.dim(selectedTemplate.description));
  console.log(chalk.dim(`Tech Stack: ${selectedTemplate.techStack.join(', ')}`));

  // Step 4: Confirm directory
  const targetDir = options.directory || process.cwd();

  const { confirmDir } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmDir',
      message: `Create project in ${chalk.cyan(targetDir)}\\${chalk.yellow(projectName)}?`,
      default: true,
    },
  ]);

  if (!confirmDir) {
    const { customDir } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customDir',
        message: 'Enter target directory path:',
        default: targetDir,
        validate: validateDirectory,
      },
    ]);
    options.directory = customDir;
  }

  // Step 5: Generate the project
  console.log(chalk.dim('\nGenerating project...\n'));
  await generateProject(selectedTemplate, projectName, options);
}

module.exports = { runTemplateSelector, groupByCategory };