const yaml = require('yamljs');
const path = require('path');

// Carga el archivo YAML que acabamos de crear
const swaggerSpec = yaml.load(path.join(__dirname, './openapi.yaml'));

module.exports = swaggerSpec;