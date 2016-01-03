var loadDNA = require('organic-dna-loader')
var selectBranch = require('organic-dna-branches').selectBranch

var DNALoader = function(content) {
  var self = this
  var callback = this.async()
  if(!callback) throw new Error('DNALoader can\'t be async')
  loadDNA(content, function(err, result) {
    if(err) return callback(err)
    var dna = selectBranch(result, self.query || 'client')
    callback(null, 'module.exports = ' + JSON.stringify(dna) )
  })
}
