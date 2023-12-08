/** @format */

import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";
import FooterOutstanding from "./FooterOutstanding";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <div className="mt-10 container">
      <FooterOutstanding />
      <div className="grid grid-cols-2 mt-8">
        <div>
          <FooterNav />
        </div>
        <div>
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
}
