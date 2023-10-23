import { Card, CardBody, Button } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const List = ({ task, settask }) => {
  const [edit, setedit] = useState(false);
  const deleteHandler = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    settask(updatedTask);
  };

  const editHandler = () => {
    setedit(true);
  };
  return (
    <>
      {task.map((item, index) => {
        return (
          <Card className="md:mt-4">
            <CardBody>
              <div className="flex justify-between ">
                <div className="flex">
                  <p className="text-lg mt-[0.35rem]">
                    {edit ? (
                      <input
                        key={index}
                        value={item.title}
                        onChange={(e) => settask(e.target.value)}
                      />
                    ) : (
                      <h1 key={index}>{item.title}</h1>
                    )}
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

                  <Button
                    isIconOnly
                    className="bg-[black] text-white "
                    aria-label="Like"
                    onClick={editHandler}
                  >
                    <AiOutlineEdit />
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
