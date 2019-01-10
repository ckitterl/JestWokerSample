export function foo(param) {
    return `Hello from foo: ${param}, pid ${process.pid}`;
}

export function bar(param) {
    return `Hello from bar: ${param}, pid: ${process.pid}`;
}

export function getWorkerId() {
    console.log('stdout at child process'); // to test getStdout;
    return `getWorkerId: ${process.env.JEST_WORKER_ID}, pid: ${process.pid}`;
}
