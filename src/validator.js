/**
 * Validation utilities for project names, directories, and template selections.
 */

const fs = require('fs');
const chalk = require('chalk');

/**
 * Validates a project name.
 * Rules: 1-50 chars, alphanumeric, hyphens, underscores only. No spaces.
 * @param {string} input - The project name to validate
 * @returns {boolean|string} true if valid, error message string if invalid
 */
function validateProjectName(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return 'Project name cannot be empty.';
  }

  if (trimmed.length > 50) {
    return 'Project name must be 50 characters or fewer.';
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return 'Project name may only contain letters, numbers, hyphens, and underscores.';
  }

  if (trimmed.startsWith('-') || trimmed.startsWith('_')) {
    return 'Project name cannot start with a hyphen or underscore.';
  }

  return true;
}

/**
 * Validates that a directory path exists and is accessible.
 * @param {string} input - The directory path to validate
 * @returns {boolean|string} true if valid, error message string if invalid
 */
function validateDirectory(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return 'Directory path cannot be empty.';
  }

  try {
    const stats = fs.statSync(trimmed);
    if (!stats.isDirectory()) {
      return `"${trimmed}" is not a directory.`;
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      return `Directory "${trimmed}" does not exist. Please create it first or provide an existing path.`;
    }
    return `Cannot access "${trimmed}": ${err.message}`;
  }

  return true;
}

/**
 * Validates that a template name exists in the provided templates list.
 * @param {string} templateName - The template name to validate
 * @param {Array} templates - List of available template objects
 * @returns {boolean|string} true if valid, error message string if invalid
 */
function validateTemplateName(templateName, templates) {
  if (!templateName) {
    return 'Template name is required.';
  }

  const match = templates.find(
    (t) => t.name === templateName || t.label === templateName
  );

  if (!match) {
    const available = templates.map((t) => `  - ${t.name} (${t.label})`).join('\n');
    return `Unknown template "${templateName}".\nAvailable templates:\n${available}`;
  }

  return true;
}

/**
 * Checks whether a target directory already exists and optionally warns.
 * @param {string} fullPath - The full path to check
 * @returns {Object} { exists: boolean, isEmpty: boolean }
 */
function checkTargetDirectory(fullPath) {
  try {
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      const contents = fs.readdirSync(fullPath);
      return { exists: true, isEmpty: contents.length === 0 };
    }
    return { exists: false, isEmpty: true };
  } catch (err) {
    if (err.code === 'ENOENT') {
      return { exists: false, isEmpty: true };
    }
    throw err;
  }
}

module.exports = {
  validateProjectName,
  validateDirectory,
  validateTemplateName,
  checkTargetDirectory,
};