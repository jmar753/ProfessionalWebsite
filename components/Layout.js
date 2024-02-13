import Header from "./Header";
export default function Layout(props) {
    return (
        <div className='font-sans text-black'>
            <Header/>
            <div className="2xl:px-12 xl:max-w-7xl flex items-center justify-center mx-auto">
                {props.children}
            </div>
        </div>
    )
  }