import "./styles.css";

type Props = {
  children: string | React.ReactNode;
};
export const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
      <div className="title-bg">{children}</div>
    </div>
  );
};
