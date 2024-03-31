import { dataComment } from "../../data";

function CommentUsers() {
  return (
    <div>
      {dataComment.map((item) => (
        <div key={item.id} className="flex border-b-[2px] p-5 items-center">
          <img className="w-[100px] rounded-full" src={item.image} alt="/" />
          <div className="flex flex-col gap-3 text-[14px]">
            <p className="font-bold">{item.name}</p>
            <span className="text-[12px] text-gray-700">{item.date}</span>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentUsers;
