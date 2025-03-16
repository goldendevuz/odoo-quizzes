import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const quizzes = [
    {
      id: "odoo",
      title: "Odoo Database",
      description: "Test your knowledge about Odoo database management",
      questions: 4,
    },
    { id: "nextjs", title: "Next.js Basics", description: "Learn about Next.js fundamentals", questions: 4 },
    { id: "react", title: "React Fundamentals", description: "Test your React knowledge", questions: 4 },
  ]

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Quiz Application</h1>
        <p className="text-xl text-muted-foreground">Select a quiz to test your knowledge</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{quiz.questions} questions</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={`/quiz/${quiz.id}`} className="w-full">
                <Button className="w-full">Start Quiz</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

