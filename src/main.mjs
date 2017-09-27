import fs from 'fs-extra';
import packageTemplate from './package-template.json';
import path from 'path';
import projectPath from 'app-root-path';
import spawn from 'cross-spawn';

const reactSoloDirRelative = '.react-solo';
const useYarn = fs.existsSync(path.join(`${projectPath}`, 'yarn.lock'));

const runCommand = (command, args) => {
  const proc = spawn.sync(command, args, { stdio: 'inherit' });
  
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
    return;
  }
};

const projectInstall = () => {
  const command = useYarn ? 'yarn' : 'npm';
  const args = ['install'];

  // runCommand('cd', reactSoloDirRelative);
  process.chdir(reactSoloDirRelative);
  console.log('New directory: ' + process.cwd());
  runCommand(command, args);
}

const main = async () => {
  const reactSoloDir = `${projectPath}/${reactSoloDirRelative}`;
  fs.ensureDir(`${projectPath}/.react-solo`);
  const packageJson = await import(`${projectPath}/package.json`);
  const { dependencies = {} } = packageJson.default;

  dependencies['react'] = '16.0.0';
  dependencies['react-dom'] = '16.0.0';
  dependencies['react-scripts'] = '1.0.13';
  
  const newPackageJson = Object.assign({}, packageTemplate, { dependencies });

  await fs.writeJson(`${reactSoloDir}/package.json`, newPackageJson);

  projectInstall();
};

// - Use cross-spawn to run "cd .react-solo" command
// - Use cross-spawn to run npm install (or yarn install if installed)
// - Use console.log and chalk to give user updates
// - Replace App.js with file that imports the target component and puts it in render function
// - Run npm/yarn start in that directory

main();
