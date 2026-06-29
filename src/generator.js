/**
 * Project generator that scaffolds files from a selected template.
 * Handles file creation, directory structure, and success reporting.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { checkTargetDirectory } = require('./validator');

/**
 * Formats a file size in a human-readable format.
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Generates a project from the selected template.
 * Creates all template files in the target directory.
 * @param {Object} template - The selected template object
 * @param {string} projectName - The project name
 * @param {Object} options - CLI options
 */
async function generateProject(template, projectName, options = {}) {
  const targetBase = options.directory || process.cwd();
  const projectPath = path.join(targetBase, projectName);

  // Check if the target directory already exists
  const dirCheck = checkTargetDirectory(projectPath);

  if (dirCheck.exists && !dirCheck.isEmpty) {
    console.log(
      chalk.yellow(`⚠ Directory "${projectName}" already exists and is not empty.`)
    );
    console.log(chalk.yellow('Files may be overwritten if there are conflicts.\n'));
  }

  // Create the project directory
  fs.mkdirSync(projectPath, { recursive: true });

  let filesCreated = 0;

  // Create each file from the template
  for (const file of template.files) {
    const filePath = path.join(projectPath, file.path);
    const fileDir = path.dirname(filePath);

    // Create subdirectories if needed
    fs.mkdirSync(fileDir, { recursive: true });

    // Write the file content
    let content = file.content;

    // Replace any template placeholders (e.g. {{projectName}})
    content = content.replace(/\{\{projectName\}\}/g, projectName);
    content = content.replace(/\{\{projectNamePascal\}\}/g, toPascalCase(projectName));
    content = content.replace(/\{\{year\}\}/g, new Date().getFullYear().toString());

    fs.writeFileSync(filePath, content, 'utf8');
    filesCreated++;

    // Show progress indicator
    const relativePath = path.relative(projectPath, filePath);
    console.log(`  ${chalk.green('✓')} Created ${chalk.cyan(relativePath)}`);
  }

  // Summary
  console.log('');
  console.log(chalk.green('━'.repeat(50)));
  console.log(chalk.bold.green('✅ Project created successfully!'));
  console.log('');
  console.log(`  ${chalk.bold('Template:')}  ${template.label}`);
  console.log(`  ${chalk.bold('Project:')}   ${chalk.yellow(projectName)}`);
  console.log(`  ${chalk.bold('Location:')}  ${chalk.cyan(projectPath)}`);
  console.log(`  ${chalk.bold('Files:')}     ${filesCreated} files created`);
  console.log('');
  console.log(chalk.dim('📋 Next steps:'));
  console.log(chalk.dim(`  cd ${projectName}`));
  console.log(chalk.dim('  Install dependencies and start building!'));
  console.log('');
}

/**
 * Converts a kebab-case string to PascalCase.
 * @param {string} str - The string to convert
 * @returns {string} PascalCase string
 */
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

module.exports = { generateProject };