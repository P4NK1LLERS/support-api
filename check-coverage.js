const fs = require('fs');
const summaryPath = './coverage/coverage-summary.json';
const minCoverage = 70;

if (!fs.existsSync(summaryPath)) {
  console.error('coverage-summary.json not found. Run jest --coverage first.');
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
const statements = summary.total.statements.pct;

if (statements < minCoverage) {
  console.error(`Statements coverage ${statements}% < ${minCoverage}%`);
  process.exit(1);
}
console.log(`Coverage OK: statements ${statements}%`);
process.exit(0);
