function recursiveBinarySearch(
  searchableList: number[],
  target: number
): boolean {
  if (searchableList.length === 0) {
    return false
  }

  const midpoint = Math.floor(searchableList.length / 2)

  if (searchableList[midpoint] === target) {
    return true
  }

  if (searchableList[midpoint] < target) {
    return recursiveBinarySearch(
      searchableList.slice(midpoint + 1, searchableList.length),
      target
    )
  }

  return recursiveBinarySearch(searchableList.slice(0, midpoint), target)
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))
