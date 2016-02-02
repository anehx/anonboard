export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('topic'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
