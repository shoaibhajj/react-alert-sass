import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertType } from "../../types";
interface IProp {
  type: AlertType;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-danger",
  icon,
  title,
  description,
  children,
}: IProp) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
