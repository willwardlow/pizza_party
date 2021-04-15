const compareKey = key => (a, b) => {
  if (a[key] < b[key]) {
    return -1
  }
  if (a[key] > b[key]) {
    return 1
  }
  return 0
}

export const restaurantAZ = arr => arr.sort(compareKey('restaurant_name'));
export const restaurantZA = arr => arr.sort(compareKey('restaurant_name')).reverse();
export const neighborhoodAZ = arr => arr.sort(compareKey('neighborhood.name'));
export const neighborhoodZA = arr => arr.sort(compareKey('neighborhood.name')).reverse();

//function to sort by likes will be implemented later. Just getting the function set up
export const likeSort = arr => arr.sort(compareKey('likes')).reverse();
