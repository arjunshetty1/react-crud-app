import { Card, CardBody, Button } from "@nextui-org/react";
import { AiOutlineDelete } from "react-icons/ai";

const List = ({ task, settask }) => {
  const deleteHandler = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    settask(updatedTask);
  };
  return (
    <>
      {task.map((item, index) => {
        return (
          <Card className="md:mt-4 mt-4">
            <CardBody>
              <div className="flex justify-between ">
                <div className="flex">
                  <p className="text-lg mt-[0.35rem]">
                    <h1 key={index}>{item.title}</h1>
                  </p>
                </div>
                <div>
                  <Button
                    isIconOnly
                    className="bg-[red] text-white mr-3"
                    aria-label="Like"
                    onClick={() => deleteHandler(index)}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default List;
