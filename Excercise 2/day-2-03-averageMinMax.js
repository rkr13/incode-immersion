function averageMinMax(a){
    var min = a[0];
	for(i=1;i<a.length;i++) {
        if(min > a[i]) {
				min = a[i];
			}
		}
    var max = a[0];

    for(i=1;i<a.length;i++) {
        if(max < a[i]) {
            max = a[i];
        }
    }

    console.log("Min:"+min)
    console.log("Max:"+max)

    sum=0;
    for(i=0;i<a.length;i++) {
        sum= sum + a[i];
        }

    console.log("Avg:"+Math.floor(sum/2))
}

averageMinMax([1,2,3]);