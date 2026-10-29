import { OverlayLoading } from "..";
import { Title } from "../title";
import "./styles.css";
import { ListProject } from "./_components";

export const Project = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="h-[100vh] overflow-auto">
        <OverlayLoading key={`about-overlay`} />
        <div className="container p-6 pb-[100px] lg:p-0">
          <Title>
            My <span className="text-primary">Project</span>
          </Title>

          <ListProject />
        </div>
      </div>
    </div>
  );
};
