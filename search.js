// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were
//  inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

function searchInsert ( array, num ) {
     
    if ( array.indexOf( num ) >= 0 ) {
        return array.indexOf ( num )
    } else if ( num < array[0] ){
        return 0;
    } else if ( num > array[array.length-1]) { 
        return array.length;
    }

     for ( let i = 1 ; i <= array.length ; i ++) {
         if ( num > array[ i - 1 ] && num < array [ i + 1 ] ){
             return i ;
         }   
     }
    
}

console.log ( searchInsert ([1,3,5,6], 7)); 
