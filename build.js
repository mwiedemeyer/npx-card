'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
// prettier-ignore
const data = {
	name:            chalk.white('           Marco Wiedemeyer'),
	handle:          chalk.white('mwiede'),
	work:            chalk.white('Azure Cloud Architect @ QUIBIQ Hamburg GmbH (quibiq.de)'),
	from:            chalk.white('Hamburg, Germany'),
	bluesky:         chalk.blueBright('@mwiede') + chalk.gray('.bsky.social'),
	github:          chalk.gray('https://github.com/') + chalk.green('mwiedemeyer'),
	linkedin:        chalk.gray('https://linkedin.com/in/') + chalk.blueBright('mwiede'),
	xing:            chalk.gray('https://xing.com/profile/') + chalk.cyan('Marco_Wiedemeyer'),
	web:             chalk.blueBright('https://blog.mwiedemeyer.de'),
	keybase: 				 chalk.gray('https://keybase.io/') + chalk.blueBright('mwiede'),
	credly: 				 chalk.gray('https://www.credly.com/users/') + chalk.cyan('mwiede'),
	npx:             chalk.red('npx') + ' ' + chalk.white('mwiede'),
	labelWork:       chalk.white.bold('   Title:'),
	labelFrom:       chalk.white.bold('    From:'),
	labelBluesky: 	 chalk.white.bold(' Bluesky:'),
	labelGitHub:     chalk.white.bold('  GitHub:'),
	labelLinkedIn:   chalk.white.bold('LinkedIn:'),
	labelXing:       chalk.white.bold('    Xing:'),
	labelWeb:        chalk.white.bold('     Web:'),
	labelKeybase:		 chalk.white.bold(' Keybase:'),
	labelCredly:     chalk.white.bold('  Credly:'),
	labelCard:       chalk.white.bold('    Card:'),
};

// Actual strings we're going to output, newlines matter
const output = `${data.name} / ${data.handle}

${data.labelWork}  ${data.work}
${data.labelFrom}  ${data.from}

${data.labelBluesky}  ${data.bluesky}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelXing}  ${data.xing}
${data.labelKeybase}  ${data.keybase}
${data.labelWeb}  ${data.web}
${data.labelCredly}  ${data.credly}

${data.labelCard}  ${data.npx}
`;

// frame the text
const box = chalk.green(boxen(output, options));

// generate the single js file that need run with npx
fs.writeFileSync(
	path.join(__dirname, 'bin/card.js'),
	`#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
console.log('${box.split('\n').join('\\n\\\n')}');
`
);
