import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() categoryId!: number;
  quizContent: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    if (this.categoryId) {
      this.quizService
        .getQuestionsByCategory(this.categoryId)
        .subscribe((questions: any) => {
          this.quizContent = questions;
          this.quizContent.forEach((question) => {
            this.quizService
              .getAnswersByQuestionId(question.id)
              .subscribe((answers: any) => {
                question.answers = answers;
              });
          });
        });
    }
  }
}
