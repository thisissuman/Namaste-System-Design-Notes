const sortingByAge = require("./app");
// by writing this it will know jest will recoginze this function
test("Testing the sorting feature (if first user is Kumar)", () => {
  const sorteData = sortingByAge();
  // every test case expect somehting so expect is used here
  expect(sorteData[0].name).toBe("Kumar");
});

test("Testing if the sorted data has length of 3)", () => {
  const sorteData = sortingByAge();
  // every test case expect somehting so expect is used here
  expect(sorteData.length).toBe(3);
});
