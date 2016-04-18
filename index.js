var loadDNA = require('organic-dna-loader')
var selectBranch = require('organic-dna-branches').selectBranch
var loaderUtils = require('loader-utils')

module.exports = function(content) {
  var self = this
  var callback = this.async()
  var query = loaderUtils.parseQuery(this.query)
  if(!callback) throw new Error('DNALoader can\'t be async')
  loadDNA(function(err, result) {
    if(err) return callback(err)
    var dna = selectBranch(result, query.branch || 'client.config')
    callback(null, 'module.exports = ' + JSON.stringify(dna) )
  })
}
