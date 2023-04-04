const path = require('path');

// module.exports = path.dirname(process.mainModule.filename); //dreprecated
module.exports = path.dirname(require.main.filename);