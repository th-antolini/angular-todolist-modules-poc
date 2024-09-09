import { type NewTask } from './new-task.model'
import { Component, Input, Output, EventEmitter, inject } from '@angular/core'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({required: true}) userId!:string
  @Output() close = new EventEmitter<void>()

  inputTitle = ''
  inputDescription = ''
  inputDueDate = ''

  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.inputTitle,
      description: this.inputDescription,
      dueDate: this.inputDueDate
    }, this.userId)
    this.close.emit()
  }
}
