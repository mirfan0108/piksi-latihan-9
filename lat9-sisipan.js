function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
var arr = [12, 11, 13, 5, 6];
console.log("Array sebelum pengurutan: " + arr);
insertionSort(arr);
console.log("Array setelah pengurutan: " + arr);