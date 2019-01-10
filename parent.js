import Worker from 'jest-worker';

async function main() {
  const worker = new Worker(require.resolve('./worker'), {
    forkOptions: {
      execArgv: ['-r', 'babel-register', '-r', 'babel-polyfill'],
    }
  });
  // get stdout and pipe to current process's stdout
  let stdout = worker.getStdout();
  stdout.pipe(process.stdout);
	
  console.log(await worker.bar('Alice')); 
  console.log(await worker.foo('Alice')); 
  console.log(await worker.getWorkerId()); 
  worker.end();
}

main();
