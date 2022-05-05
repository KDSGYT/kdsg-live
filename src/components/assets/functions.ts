/**
 * Sort the array using the bubble sort algorithm
 * This function will go through all the skills and return a new array with values 
 * @return Array
 * 
 * If the loop is not working that means that one or more skills have same serial and this is causing the loop to stop working
 */


export function bubbleSort(data: Array<any>): Array<Object> {
    
    let arr = [...data];
    let i, j, temp;
    let swapped;
    const n = data.length;
    // iterate through the loop
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        // second iteration through the loop to 
        for (j = 0; j < n - i - 1; j++) {

            // swap if the condition is satisfied
            // change the following condition as per your need to use it somewhere else
            if (arr[j].serial > arr[j + 1].serial) {
                temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
            // to break the loop if there was no swap
            if (swapped == false) { break; }
        }
    }
    return arr
}
