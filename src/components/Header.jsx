import { FaCartPlus } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className='bg-[#0D1B2A] '>
        <section className="flex items-center justify-between py-4 px-4 media550:px-8 mx-auto big:max-w-[1536px]">
          <div className='text-3xl font-bold flex items-center'>
            <p className='text-[#FF6F00]'>Apana</p><span className='text-[#fff]'>Bazaar</span>
          </div>
          <ul className='text-[#FFF8E1] flex items-center space-x-4 text-lg font-medium'>
            <li><a href="#">Home</a></li>
            <li className="text-2xl relative">
              <a href="#"><FaCartPlus /><span className="text-[12px] bg-red-500 text-center size-4 rounded-full absolute top-[-12px] right-0">2</span></a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Header