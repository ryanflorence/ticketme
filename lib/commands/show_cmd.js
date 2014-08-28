var connectionBuilder = require('../jira/connection_builder');
var jiraLink = require('../jira/link');
var buildLine = require('../utils/build_line');

module.exports = function(key){
  connectionBuilder(function(connection){
    connection.findIssue(key, function(error, issue) {
      var label = issue.key + ' - ' + jiraLink(issue.key);
      console.log('');

      console.log(label);
      console.log(buildLine(label.length));

      console.log('Summary:  ' + issue.fields.summary);
      console.log('Creator:  ' + issue.fields.creator.name);
      console.log('Assignee: ' + issue.fields.assignee.name);
      console.log('Type:     ' + issue.fields.issuetype.name);
      console.log('Status:   ' + issue.fields.status.name);
      console.log('Desc:     ' + issue.fields.description);
      console.log('');
    });
  });
}