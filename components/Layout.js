import Header from "./Header";
export default function Layout(props) {
    return (
        <div className='font-sans text-black'>
            <Header/>
            <div className="">
                {props.children}
            </div>
        </div>
    )
  }