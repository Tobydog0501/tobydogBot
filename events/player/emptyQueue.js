module.exports = queue => {
    queue.metadata.channel.send('✅ | Queue finished!');
    // Delete queue and disconnect from voice channel
    queue.delete();
}