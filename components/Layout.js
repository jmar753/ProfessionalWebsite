import Header from "./Header";
export default function Layout(props) {
    return (
        <div>
            <Header/>
            <div className="max-w-7xl flex items-center justify-center mx-auto">
                {props.children}
            </div>
        </div>
    )
  }