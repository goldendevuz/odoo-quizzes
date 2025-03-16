"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { quizData } from "@/lib/quiz-data"

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentAnswers, setCurrentAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const quiz = quizData.find((q) => q.id === params.id)

  if (!quiz) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Quiz not found</h1>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    )
  }

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setCurrentAnswers({
      ...currentAnswers,
      [questionIndex]: value,
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const score = submitted
    ? quiz.questions.reduce((acc, question, index) => {
        return acc + (currentAnswers[index] === question.correctAnswer ? 1 : 0)
      }, 0)
    : 0

  return (
    <div className="container mx-auto py-10 px-4">
      {submitted && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">
              You scored {score} out of {quiz.questions.length} ({Math.round((score / quiz.questions.length) * 100)}%)
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/")}>Back to Home</Button>
          </CardFooter>
        </Card>
      )}

      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>

      <div className="space-y-8">
        {quiz.questions.map((question, questionIndex) => (
          <Card
            key={questionIndex}
            className={
              submitted && currentAnswers[questionIndex] === question.correctAnswer ? "border-green-500 border-2" : ""
            }
          >
            <CardHeader>
              <CardTitle className="text-xl">
                {questionIndex + 1}. {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={currentAnswers[questionIndex]}
                onValueChange={(value) => handleAnswerChange(questionIndex, value)}
                disabled={submitted}
              >
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`flex items-center space-x-2 p-2 rounded-md ${
                      submitted && option === question.correctAnswer
                        ? "bg-green-100 dark:bg-green-900/20"
                        : submitted && currentAnswers[questionIndex] === option && option !== question.correctAnswer
                          ? "bg-red-100 dark:bg-red-900/20"
                          : ""
                    }`}
                  >
                    <RadioGroupItem value={option} id={`q${questionIndex}-option-${optionIndex}`} />
                    <Label htmlFor={`q${questionIndex}-option-${optionIndex}`} className="flex-grow cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      {!submitted && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={Object.keys(currentAnswers).length !== quiz.questions.length}
            size="lg"
          >
            Submit Answers
          </Button>
        </div>
      )}
    </div>
  )
}

