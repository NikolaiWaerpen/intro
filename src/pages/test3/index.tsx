import { useEffect, useState } from "react";
import NonReversed from "../../components/nonreversed";
import Reversed from "../../components/reversed";

export default function Test3() {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const runReverse = async () => {
      await setTimeout(() => {
        setReverse(true);
        console.log(reverse);
      }, 3000);
    };
    runReverse();
  }, []);

  return (
    <div className="bg-gray-200 font-bold font-serif text-3xl">
      <div className="w-screen h-screen flex flex-col ITEMs-center justify-center">
        {reverse ? <Reversed /> : <NonReversed />}
      </div>
    </div>
  );
}
