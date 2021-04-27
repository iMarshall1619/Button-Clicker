var clickCount = 0;
function keepCount() {
    clickCount++
    console.log(clickCount)
    if(clickCount > 10) {
        document.write('you knew what this was')
    }
}