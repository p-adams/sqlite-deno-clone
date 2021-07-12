function main() {
  while (true) {
    const input = prompt();
    if (input === ".exit") {
      return 0;
    }
    console.log(`Unrecognized command ${input}`);
  }
}
main();
