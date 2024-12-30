module.exports = (queue, error) => {
    console.log(`Player error event: ${error.message}`);
    console.log(error);
}