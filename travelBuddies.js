// # Airbnb launches a new feature called "Travel Buddies". 
// # As part of this feature, users create wishlists of cities they want to visit.
// # Now, given these wishlists as input, recommend buddies for users to travel with.
// # User A is a travel buddy of user B if A has 50% or more of the cities in A's 
// # wishlist in common with B. Write a solution to print out their travel buddies 
// # sorted by rank. The rank of a travel buddy is the number of cities they share 
// # in common with your wishlist.

wishlists = [
    "U1,Amsterdam,Barcelona,London,Prague",
    "U2,Shanghai,Hong Kong,Moscow,Sydney,Melbourne",
    "U3,London,Boston,Amsterdam,Madrid",
    "U4,Barcelona,Prague,London,Sydney,Moscow",
    "U5,Amsterdam,Barcelona,London,Prague"
  ]
  const wishDict = new Map();
  for (let i in wishlists) {
      let line = wishlists[i].split(",");
      wishDict.set(line[0], line.slice(1));
  }
  
    // split up the strings in wl before adding to dictionary
    // add user as key and places as values to dict
    // "U1": ["Amsterdam",...]
    // "U2": ["Shanghai",...] 
    // Target: u5: "Amsterdam,Barcelona,London,Prague" i and "London,Boston,Amsterdam,Madrid" j 
    // then compare places keeping track of how many match
    // U1: 4, U2: 0
    // # Example:
    // getBuddies(wishlists, "U5")
    // expected output: ["U1", "U4", "U3"]
    
    function getBuddies(wishDict, userName) {
      console.log('wishDict', wishDict);
        let count = 0;
        const dict = new Map();
        const targetList = wishDict.get(userName);
        console.log('targetList', targetList)
        let lines = wishDict.entries()
        for (const line of lines) {
          let buddyList = line[1]
          console.log('buddyList', buddyList)
          targetList.forEach(place => {
              if (buddyList.indexOf(place) !== -1) {
                count++
                
              }
          })
          dict.set(line[0], count) 
              console.log('dict', dict)
              count = 0
        }
        let buddies = dict.entries()
        let result = []
        for (const buddy of buddies) {
          console.log('buddy', buddy)
          if (dict.get(buddy[0]) >= targetList.length/2 && buddy[0] !== userName) {
            result.push(buddy)
          }
        }
        return result.sort((a, b) => a[1]-b[1]).reverse().map(a => a[0])
    }
    getBuddies(wishDict, 'U5')