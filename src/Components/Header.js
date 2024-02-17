import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header className="">
            <div className="container mx-auto px-4">
                <div className="flex flex-row items-center">
                    <div className="basis-2/12">
                        <div className="text-primary text-2xl">React Pro</div> 
                    </div>
                    <div className="basis-10/12">
                        <nav className="nav">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-primary" : ""} > 
                                <span className="font-bold p-5 inline-block">Home</span>
                            </NavLink>
                            <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-primary" : ""} > 
                                <span className="font-bold p-5 inline-block">Dashboard</span>
                                </NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-primary" : ""} > 
                                <span className="font-bold p-5 inline-block">About</span>
                            </NavLink>
                        </nav> 
                    </div>
                </div>
            </div>
        </header>
    )
}