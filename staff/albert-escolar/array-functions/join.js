'use strict'
/*The join() method creates and returns a new string by concatenating all of the elements in an array 
(or an array-like object), separated by commas or a specified separator string. If the array has only one item, 
then that item will be returned without using the separator.
*/


function join(arr, separator) {
    if(!(arr instanceof Array)) throw TypeError(arr+' is not an array');
    var resultString = "";
    for (var i = 0; i < arr.length; i++) {
        resultString += arr[i];
        if (i < arr.length - 1) {
            resultString += separator;
        }
    }
    return resultString;
}
