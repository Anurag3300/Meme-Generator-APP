import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (<div className="w-full  flex flex-col background  items-center">
    <h1  className="  bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">RANDOM GIFS</h1>
    <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
    </div>
  </div>);
}
