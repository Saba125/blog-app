import Container from "../Container";
import Heading from "../Heading";
import PostContent from "./PostContent";
import SideContent from "./SideContent";

const Content = () => {
  return (
    <Container>
      <div className="mt-[20px]">
        <Heading large title="Recent posts" />
        <div className="mt-[20px] flex flex-row">
          <div className="flex-[5]">
            <PostContent />
          </div>
          <div className="flex-[2]">
            <SideContent />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
