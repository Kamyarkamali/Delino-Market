import { FC } from "react";
import { IsearchFiltered } from "../../types/type";

// import { foodsData } from "../../data";
// import { Link } from "react-router-dom";

const SearchBar: FC<IsearchFiltered> = ({
  // search,
  // setSearch,
  filtered,
  // seFiltered,
}) => {
  // const searchHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchWord = e.target.value;
  //   setSearch(searchWord);
  //   const newFiltere = foodsData.filter((value) => {
  //     return value.title.includes(searchWord);
  //   });

  //   if (searchWord === "") {
  //     seFiltered([]);
  //   } else {
  //     // @ts-ignore
  //     seFiltered(newFiltere);
  //   }
  // };

  return (
    <div
      className={`${
        filtered.length === 0 ? "h-0 mb-9" : "h-[100px]"
      } lg:mt-[9rem] mt-[6rem] flex justify-center items-center max-w-[1560px]`}
    >
      <input
        // value={search}
        // onChange={searchHandeler}
        className="border-[1px] placeholder:text-sm 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] w-[240px] rounded-sm outline-none lg:p-5 p-2"
        type="text"
        placeholder="غذای مورد نظر را جست و جو کنید"
      />
      <button className="bg-[#EF4123] 2xl:p-2 rounded-md text-[12px] text-white lg:w-[100px] w-[70px] h-[40px] 2xl:h-[66px] xl:h-[60px] lg:h-[55px] md:h-[53px] sm:h-[50px]">
        جستوجو کن
      </button>
    </div>
  );
};

// {filtered.length !== 0 && (
//   <div className="bg-white w-[300px] h-[200px] overflow-hidden hover:overflow-auto rounded-md">
//     {filtered.map((value) => {
//       return (
//         <div>
//           {/* @ts-ignore */}
//           <Link to={`/${value.id}`}>{value.title}</Link>
//         </div>
//       );
//     })}
//   </div>
// )}

export default SearchBar;
