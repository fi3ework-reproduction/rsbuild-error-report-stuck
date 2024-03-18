const a = 1

// the duplicated const declaration raise an error to rspack, which is expected.
// you can see the error message in the terminal and the browser console as well.
// then change the following line to `const a = 3` or something else that will still raise an error.
// 🐞 here comes the bug, the error message from terminal and console still showing the old code log which is `const a = 2`.
// expect to complain about the new code, but it's not.
const a = 2
export { a }
