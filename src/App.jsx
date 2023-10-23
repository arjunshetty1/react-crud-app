import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import InputForm from "./Components/UI Components/Input Field/InputForm";
import { useState } from "react";
import List from "./Components/List/List";
const App = () => {
  const [title, settitle] = useState("");
  const [task, settask] = useState([]);

  const clearAll = () => {
    settask([]);
  };
  return (
    <NextUIProvider>
      <>
        <div className="w-full h-full bg-[#000000] min-h-screen">
          <div className="flex justify-center">
            <div className="px-4 rounded-md shadow-md bg-[#f6f6f6] w-[90%] md:w-[60%] py-4 mx-[2rem] mt-8">
              <h1 className="flex justify-center font-bold  my-3 mb-5 uppercase">
                Todo List
              </h1>
              <InputForm
                task={task}
                settask={settask}
                title={title}
                settitle={settitle}
              />
              <List task={task} settask={settask} title={title} />
              <p className="flex justify-center mt-5 font-medium">
                You Have {task.length} Todos
                {task.length > 0 ? (
                  <Button
                    color="primary"
                    className="ml-[2rem] relative bottom-1"
                    onClick={clearAll}
                  >
                    Clear All
                  </Button>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      </>
    </NextUIProvider>
  );
};

export default App;
