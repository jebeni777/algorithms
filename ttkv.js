

// │ 
// │ 
// t=2│put("a", "first_value") 
// │ 
// │ 
// │ 
// t=5│put("a", "second_value") 
// │ 
// │ 
// │ 
// t=9│put("a", "third_value") 
// │ 
// │ 
// │ 
// │get("a") -> "third_value" 
// │get("a", 5) -> "second_value" 
// │get("a", 8.2) -> "second_value" 
// │ 
// │ 
// │ 
// │ 
// ▼ 


/**
 * Initialize your data structure here.
 */
 var TimeMap = function() {
    this.tkv = new Map();
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(k, v, t) {
    
    if (this.tkv.get(k)) {
        this.tkv.get(k).push([v,t]);
    } else {
        this.tkv.set(k, [[v, t]])   
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(k, t) {
    let valuesOverTime = this.tkv.get(k)                       //    0       1       2
    let maxSoFar = ['', 0]
    for (let i = 0; i < valuesOverTime.length; i++) {   //  [[fv, 2] [sv, 5] [tv, 9]]
        let thisValue = valuesOverTime[i]    // 0 = [fv, 2]
        if (thisValue[1] === t) {        
            return thisValue[0]
        }
        else if (thisValue[1] < t && thisValue[1] > maxSoFar[1]) {
            maxSoFar = thisValue
        }
    }
    return maxSoFar[0]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */