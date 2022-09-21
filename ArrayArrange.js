function arrayCompare(arr,n)
    {
    
        let i = -1, temp = 0;
        for (let j = 0; j < n; j++)
        {
            if (arr[j] < 0)
            {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
       let pos = i+1, neg = 0;
        while (pos < n && neg < pos && arr[neg] < 0)
        {
            temp = arr[neg];
            arr[neg] = arr[pos];
            arr[pos] = temp;
            pos++;
            neg += 2;
        }
    }
function printArray(arr,n)
    {
        for (let i = 0; i < n; i++)
            console.log(arr[i] + "   ");
    }
 
   let arr =[-3, 1, 2, 4, -6, 8, -8, -1];
        let n = arr.length;
        arrayCompare(arr,n);
        console.log(arr,n);