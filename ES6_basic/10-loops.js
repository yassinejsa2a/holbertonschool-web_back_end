export default function appendToEachArrayValue(array, appendString) {
    for of (const value of array) {
      const value;
      array = appendString + value;
    }
  
    return array;
  }