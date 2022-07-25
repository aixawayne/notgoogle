import User from "./User";

export default function Header(){
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 item-center">
                <p className="link">Redbee</p>
                <p className="link">Ayuda</p>
            </div>
            <div className="flex space-x-4 item-center">
                <p className="link">Algo</p>
                <p className="link">Sarasa</p>
                <User/>
            </div>
        </header>
    )
}