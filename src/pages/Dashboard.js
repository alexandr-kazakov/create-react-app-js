import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TodoList from "../Components/TodoList";


export default function Dashboard() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 pt-10 mb-20">
                <h1 className="text-2xl mb-5">To-do list</h1>
                <TodoList></TodoList>
            </main>     
            <Footer />
        </div>
    )
}
