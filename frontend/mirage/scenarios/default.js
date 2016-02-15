import topics from '../fixtures/topics'

export default function(server) {
  server.loadFixtures('topics')

  topics.forEach(topic => {
    let threads = server.createList('thread', 2, { topicId: topic.id })

    threads.forEach(thread => {
      server.createList('comment', 5, { threadId: thread.id })
    })
  })
}
