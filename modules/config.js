const commandLineArgs = require('command-line-args');

exports.getConfig = ()=>{
  const options = commandLineArgs([
    { name: 'port', type: Number, defaultValue: process.env.port },
    { name: 'dbString', type: String, defaultValue: process.env.dbUrl },
    {name:'dbName', type: String, defaultValue: process.env.dbName}
  ]);
  return options;
};