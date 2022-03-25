solution('...!@BaT#*..y.abcdefghijklm');
function solution(new_id) {
  // 1
  new_id = new_id.toLowerCase();
  console.log(new_id);
  // 2
  new_id = new_id.replace(/[^a-z\d\-\_\.]/g, '');
  console.log(new_id);
  // 3
  new_id = new_id.replace(/\.+/gi, '.');
  console.log(new_id);
  // 4
  new_id = new_id.startsWith('.') ? new_id.slice(1) : new_id;
  new_id = new_id.endsWith('.')
    ? new_id.substring(0, new_id.length - 1)
    : new_id;
  console.log(new_id);
  // 5
  if (new_id.length == 0) {
    new_id = 'a';
  }
  console.log(new_id);
  // 6
  if (new_id.length > 15) {
    new_id = new_id.substring(0, 15);
    new_id = new_id.endsWith('.')
      ? new_id.substring(0, new_id.length - 1)
      : new_id;
  }
  console.log(new_id);
  // 7
  if (new_id.length <= 2) {
    for (let i = new_id.length; i < 3; i++) {
      new_id += new_id.substring(i - 1);
    }
  }

  console.log(new_id);
  return new_id;
}
