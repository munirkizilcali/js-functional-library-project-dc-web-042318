fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, itemRun) {
      for (let item in array) {
        itemRun(array[item])
      }
      return array
    },

    map: function(array, itemRun) {
      let array2 = []
      for (let item in array) {
        array2.push(itemRun(array[item]))
      }
      return array2
    },

    reduce: function(array, itemRun, acc) {
      for (let item in array) {
        acc = itemRun(acc, array[item], array)
      }
      return acc
    },
    
    find: function(array, itemRun) {
      for (let item in array) {
        if (Boolean(itemRun(array[item]) === true)) {
          return array[item]
        }
      }
    },

    filter: function(array, itemRun) {
      let array2 = []
      for (let item in array) {
        if (Boolean(itemRun(array[item]) === true)) {
          array2.push(array[item])
        }
      }
      return array2
    },

    size: function(array) {
      let size = 0
      for (let item in array) {
          size++
      }
      return size
    },

    first: function(array, n=1) {
      if (n===1){
        for (let item in array) {
          return array[item]
        }
      } else {
        let array2 = []
        let iteration = 0
        for (let item in array) {
          if (iteration < n){
            array2.push(array[item])
          }
          iteration++
        }
        return array2
      }
    },

    last: function(array, n=1) {
      if (n===1) {
        return array[array.length-1]
      }
      return array.slice((0-n))
    },

    compact: function(array) {
      let array2 = []
      for (let item in array) {
        if (Boolean(array[item]) === true) {
          array2.push(array[item])
        }
      }
      return array2
    },

    sortBy: function(array, itemRun) {
      let array2 = array.map(item=>itemRun(item))
      array2.sort((item1, item2)=> item1 > item2)
      return array2
    },

    flatten: function(array, singleLevel = false) {
      let array2 = []
      for (let item of array) {
        // debugger
        if (Array.isArray(item)) {
          if (singleLevel === false) {
            array2.push(...fi.flatten(item))
          } else { array2.push(...item)}
        } else {
          // debugger
          array2.push(item)
        }
      }
      return array2
    },

    uniq: function(array, isSorted = false, itemRun = null) {
      let array2 = []
      if (typeof itemRun === 'function') {
        array2 = Array.from(new Set(array.map(item=>itemRun(item))))
      } else {
        array2 = Array.from(new Set(array))
      }
      // debugger
      return array2
    },

    keys: function(array) {
      let array2 = []
      for (let item in array) {
          array2.push(item)
      }
      return array2
    },

    values: function(array) {
      let array2 = []
      for (let item in array) {
          array2.push(array[item])
      }
      return array2
    },

    functions: function(array) {
      let array2 = []
      for (let item in array) {
          if (typeof(array[item]) === 'function') {
            array2.push(item)
          }
      }
      return array2
    },

    giveMeMore: function() {
    },
  }
})()

fi.libraryMethod()
