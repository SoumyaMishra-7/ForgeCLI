#!/usr/bin/env node

const { program } = require('commander');
const { runTemplateSelector } = require('../src/selector');
const { generateProject } = require('../src/generator');
const { initProject } = require('../src/index');

program
  .name('forge')
  .description('Deploy. Scale. Monitor — From Your Terminal.')
  .version('1.0.0');

program
  .command('init [project-name]')
  .description('Initialize a new project with interactive template selection')
  .option('-t, --template <name>', 'Specify a template directly (skip interactive mode)')
  .option('-d, --directory <path>', 'Target directory for the project')
  .action((projectName, options) => {
    if (options.template) {
      initProject(projectName, options);
    } else {
      runTemplateSelector(projectName, options);
    }
  });

program
  .command('templates')
  .description('List all available project templates')
  .action(() => {
    const { getTemplates } = require('../src/templates');
    const chalk = require('chalk');
    const templates = getTemplates();

    console.log(chalk.bold('\n📦 Available ForgeCLI Templates\n'));

    templates.forEach((template) => {
      console.log(`  ${chalk.green('▶')} ${chalk.bold(template.name)}`);
      console.log(`    ${template.description}`);
      console.log(`    ${chalk.dim('Tags:')} ${template.tags.join(', ')}`);
      console.log(`    ${chalk.dim('Tech Stack:')} ${template.techStack.join(', ')}`);
      console.log('');
    });
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}