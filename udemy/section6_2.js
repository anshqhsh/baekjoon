function areThereDuplicates(...args) {
  let set = new Set(args);
  console.log(set);
}

areThereDuplicates('a', 'b', 'c', 'a');
