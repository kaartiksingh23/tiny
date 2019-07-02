module.exports = {
  replace: function (string,toBeReplaced,toBeReplacedWith) {
                            if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
                            if(toBeReplaced === undefined || toBeReplaced === null){
                              throw new TypeError("Argument 2 cannot be undefined or null")
                            }
                            if(toBeReplacedWith === undefined || toBeReplacedWith === undefined ){
                              throw new TypeError("Argument 3 cannot be undefined or null")
                            }
                            let replace = toBeReplaced;
                            let regex = new RegExp(replace,"g"); // "g" indicates to continue search even if the string is found.
                            return string.replace(regex,toBeReplacedWith)
                          }
  
  
}
