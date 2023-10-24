import { Input, Button } from "@nextui-org/react";
const InputForm = ({ task, settask, title, settitle }) => {
  const variants = ["bordered"];
  const handlesubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      settask([...task, { title }]);
      settitle("");
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="flex gap-2 items-center align-middle">
          <div className="w-full flex flex-col gap-4">
            {variants.map((variant) => (
              <div
                key={variant}
                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
              >
                <Input
                  type="text"
                  variant={variant}
                  value={title}
                  label="Add Task Here"
                  onChange={(e) => settitle(e.target.value)}
                  required
                />
              </div>
            ))}
          </div>{" "}
          <Button
            color="primary"
            size="sm"
            className="pt-6 pb-7 mb-6 px-1 text-3xl text-white md:mb-0"
            onClick={handlesubmit}
          >
            +
          </Button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
