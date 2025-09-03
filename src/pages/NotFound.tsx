import { Link } from "react-router";
import notFoundImg from "../assets/backgrounds/404-with-a-cat.svg";
import { Button } from "antd";
import { AiFillHome } from "react-icons/ai";

function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <img
        src={notFoundImg}
        alt="Error 404 - page not found photo with a cute cat"
        width={500}
        height={500}
      />
      <Link to="/" className="mx-auto w-[80%] max-w-[325px] md:w-fit">
        <Button
          type="primary"
          className="flex w-full items-center justify-center gap-2"
          style={{
            paddingBlock: "24px",
            paddingInline: "48px",
            fontWeight: 500,
          }}
        >
          <AiFillHome className="h-5 min-h-5 w-5 min-w-5" />
          <span>Go Back To The Homepage</span>
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
