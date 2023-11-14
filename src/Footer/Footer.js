import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";
import FooterOutstanding from "./FooterOutstanding";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <div>
      <FooterOutstanding/>
      <div className=" flex-col sm:flex-row flex justify-center sm:justify-between items-center h-32 container space-y-5 ">
        <FooterNav />
        <FooterCopyright />
      </div>
    </div>
  );
  }
  