module.exports = queue => {
    queue.metadata.channel.send('❌ | I was manually disconnected from the voice channel, clearing queue!');
}