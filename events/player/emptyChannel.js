module.exports = queue => {
    queue.metadata.channel.send('❌ | Nobody is in the voice channel, leaving...');
}