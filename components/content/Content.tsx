import Container from "../Container";
import PostContent from "./PostContent";
import SideContent from "./SideContent";

const Content = () => {
  return (
    <Container>
      <div className="mt-[20px]">
        <h3 className="text-[34px] font-bold">Recent posts</h3>
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
