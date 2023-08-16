const delayProcessTask = (time: number) => {
    return new Promise(resolve => setInterval(resolve, time))
}
                   
export { delayProcessTask }