/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counttriangle = 0;
  for (var i=0; i<preferences.length; i++)
    if (preferences[preferences[preferences[i]-1]-1] == i+1)   {
      if (preferences[i]!==i+1){
        counttriangle++;
        preferences[preferences[preferences[i]-1]-1] = 0;}}
 
  return(counttriangle);
  }

