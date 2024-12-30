module.exports = (queue, track) => {
    queue.metadata.channel.send(`▶ | Started playing: **${track.title}**!`);
}