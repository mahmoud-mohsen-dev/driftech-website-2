import { Link } from "react-router";
import notFoundImg from "../assets/backgrounds/404-with-a-cat.svg";
import { Button } from "antd";
import { AiFillHome } from "react-icons/ai";

function NotFound() {
  return (
    <div className="flex flex-col items-center pt-[100px]">
      <img
        src={notFoundImg}
        alt="Error 404 - page not found photo with a cute cat"
        width={500}
      />
      <Link to="/">
        <Button
          type="primary"
          className="flex items-center justify-center gap-2"
          style={{
            paddingBlock: "24px",
            paddingInline: "48px",
            fontWeight: 500,
          }}
        >
          <AiFillHome />
          <span>Go Back To The Homepage</span>
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
