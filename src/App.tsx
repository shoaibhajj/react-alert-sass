import Alert from "./components/Alert/Alert";
import { BellRing, BookCheck, OctagonX, ShieldAlert } from "lucide-react";
function App() {
  return (
    <>
      <Alert
        type="alert-danger"
        icon={<BellRing />}
        title="Something went Wrong "
      >
        description="lorem ipsum dolor sit amet, consectetur adip element lorem
        lorem <a href="/">this is the link </a>, consectetur adip element lorem
        "
      </Alert>
      <Alert
        type="alert-info"
        icon={<ShieldAlert />}
        title="Note"
        description="lorem ipsum dolor sit amet, consectetur adip element lorem lorem ipsum dolor sit amet, consectetur adip element lorem "
      />
      <Alert
        type="alert-warning"
        icon={<OctagonX /> }
        title="Tips & Tricks "
        description="lorem ipsum dolor sit amet, consectetur adip element lorem lorem ipsum dolor sit amet, consectetur adip element lorem "
      />
      <Alert
        type="alert-default"
        icon={<BellRing />}
        title="Upgrade Your Plan"
        description="lorem ipsum dolor sit amet, consectetur adip element lorem lorem ipsum dolor sit amet, consectetur adip element lorem "
      />
      <Alert
        type="alert-success"
        icon={<BookCheck />}
        title="Your order has been upgraded"
        description="lorem ipsum dolor sit amet, consectetur adip element lorem lorem ipsum dolor sit amet, consectetur adip element lorem "
      />
    </>
  );
}

export default App;
