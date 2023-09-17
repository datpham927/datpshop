
const Sidebar = ({ setTab, tab }) => {

  const SIDEBAR = [
    {
      name: "Thêm sản phầm",
      code: 1
    }, {
      name: "Thêm danh mục",
      code: 2
    }, {
      name: "Tất cả sản phẩm",
      code: 3
    }
  ]
  return (
    <div className={`flex mobile:w-auto mobile:rounded-xl tablet:w-3/12  w-2/12 shrink-0 h-full  bg-white flex-col  gap-3 border-b-[1px] border-solid border-b-slate-200 shadow-cart py-6 px-2 }`}>
      <ul className="flex flex-col gap-3 text-sm cursor-pointer">

        {SIDEBAR?.map(e => <li
          onClick={() => {
            setTab(e?.code)
          }}
          className={`flex gap-2 items-center text-sm cursor-pointer hover:text-[#FF8CA1] ${tab === e.code ? "text-[#FF8CA1]" : ""}`}
        >
          <span className='mobile:hidden'> {e?.name}</span>
        </li>
        )}
      </ul>
    </div >
  )
};

export default Sidebar