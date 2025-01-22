function test() {
  const result = add({a: 1, b: 2});
  const result2 = add({a: result, b: 4});
  console.log(result2);
}

test();
