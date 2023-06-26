function compareArrays(arr1, arr2) {
    return arr1.every((index) => (arr1.length === arr2.length) && (arr1[index] === arr2[index]));
}

function getUsersNamesInAgeRange(users, gender) {
  users.filter((item, index, arr) => arr.gender = gender).map((item, index, arr) => arr.age)
  .reduce((acc, item, index, arr) => acc + item)/users.filter((item, index, arr) => arr.gender = gender).length;
}