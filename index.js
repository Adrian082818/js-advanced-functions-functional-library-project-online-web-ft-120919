const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let k in collection) {
        callback(collection[k], k, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for (let k in collection) {
       newCollection.push(callback(collection[k], k, collection))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      let total = collection[0];
      
    },

    find: function(collection, predicate) {
      return collection.find(predicate)
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n=0) {
      let result = []
      if (!n) {
        result = array[0]
      } else {
        for (let i =0; i < n; i++) {
          result.push(array[i]);
        }
      } 
      return result;
    },

    last: function(array, n=0) {
      let result = [];
     if (!n) {
       return array[array.length - 1]
      }
      return array.slice(-n)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
