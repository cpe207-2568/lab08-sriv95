import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'
import type { TaskCardProps } from './libs/types'

function App() {
  const Taskcards: TaskCardProps[] = [
    {id: 1,title: "Read a book",description: "Vite + React + Boostrap + TS",isDone: false},
    {id: 2,title: "Write code",description: "Finish project for class",isDone: false},
    {id: 3,title: "Deploy app",description: "Push project to GitHub Pages",isDone: false},
  ]
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header/>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar  userName="Tinnaphat" type="student" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput/>
            {/* Card รายการ */}
            <TaskCard {...Taskcards[0]} />
            <TaskCard {...Taskcards[1]} />
            <TaskCard {...Taskcards[2]} />
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Tinnaphat Srivichai" studentId="670610695" />
    </div>
  );
}

export default App;
